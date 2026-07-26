import { logger } from '@/src/app/shared/logger';
import prisma from '@/src/app/shared/prisma';
import { PermissionKeys, RoleKeys } from '@/src/app/cache/getPermissionKeys';

// Mock the dependencies
jest.mock('@/src/app/shared/redis', () => ({
  RedisClient: {
    get: jest.fn(),
    set: jest.fn(),
    pipeline: jest.fn(),
  },
}));

jest.mock('@/src/app/shared/prisma', () => ({
  __esModule: true,
  default: {
    apiPermission: {
      findFirst: jest.fn(),
    },
  },
}));

jest.mock('@/src/app/shared/logger', () => ({
  logger: {
    warn: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
  },
}));

import { RedisClient } from '@/src/app/shared/redis';
import { checkPermissionFromNewCacheService } from '@/src/app/middlewares/auth';

const mockPrisma = jest.mocked(prisma);
const mockRedisGet = RedisClient.get as jest.Mock;
const mockLoggerWarn = logger.warn as jest.Mock;

describe('checkPermission - Redis Fallback & DB Query Validation', () => {
  let mockPipeline: {
    set: jest.Mock;
    sadd: jest.Mock;
    expire: jest.Mock;
    exec: jest.Mock;
  };

  const userId = 'user123';
  const roleId = 'role456';
  const route = '/api/test';
  const method = 'GET';

  beforeEach(() => {
    jest.clearAllMocks();

    // Create mock pipeline with all required methods
    mockPipeline = {
      set: jest.fn().mockReturnThis(),
      sadd: jest.fn().mockReturnThis(),
      expire: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue([['OK'], ['OK']]),
    };

    (RedisClient.pipeline as jest.Mock).mockReturnValue(mockPipeline);
  });

  it('should fallback to DB when Redis is unavailable, query twice (deny + allow), and attempt to cache', async () => {
    // 1. Mock Redis.get to throw (simulating Redis down)
    mockRedisGet.mockRejectedValue(new Error('Redis connection failed'));

    // Mock database queries: First query: No deny record found, Second query: Allow record found
    mockPrisma.apiPermission.findFirst
      .mockResolvedValueOnce(null) // Deny check: no deny record
      .mockResolvedValueOnce({
        id: '1',
        userId,
        roleId,
        isAllowed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }); // Allow check: allow record found

    // Execute the permission check
    const result = await checkPermissionFromNewCacheService(route, method, userId, roleId);

    // Assertions - Permission should be granted
    expect(result).toBe(true);

    // Assert Redis cache read was attempted and failed
    const expectedCacheKey = PermissionKeys.access(userId, method, route);
    expect(mockRedisGet).toHaveBeenCalledWith(expectedCacheKey);

    // Assert warning was logged about Redis failure
    expect(mockLoggerWarn).toHaveBeenCalledWith(
      'Redis unavailable for permission cache, falling back to database',
      {
        error: expect.any(Error),
        cacheKey: expectedCacheKey,
      },
    );

    // Assert database was queried TWICE (deny check + allow check)
    expect(mockPrisma.apiPermission.findFirst).toHaveBeenCalledTimes(2);

    // Verify first query checks for DENY records
    expect(mockPrisma.apiPermission.findFirst).toHaveBeenNthCalledWith(1, {
      where: {
        isAllowed: false,
        OR: [{ userId }, { roleId }],
        apiRoutes: {
          some: {
            route,
            method: { in: [method, '*'] },
          },
        },
      },
    });

    // Verify second query checks for ALLOW records
    expect(mockPrisma.apiPermission.findFirst).toHaveBeenNthCalledWith(2, {
      where: {
        isAllowed: true,
        OR: [{ userId }, { roleId }],
        apiRoutes: {
          some: {
            route,
            method: { in: [method, '*'] },
          },
        },
      },
    });

    // Assert pipeline was created for caching
    expect(RedisClient.pipeline).toHaveBeenCalled();

    // 11. Assert pipeline methods were chained correctly to cache the result
    const indexKey = PermissionKeys.index(userId);
    const roleKey = RoleKeys.users(roleId);

    expect(mockPipeline.set).toHaveBeenCalledWith(expectedCacheKey, 'true', 'EX', 600);
    expect(mockPipeline.sadd).toHaveBeenCalledWith(indexKey, expectedCacheKey);
    expect(mockPipeline.sadd).toHaveBeenCalledWith(roleKey, userId);
    expect(mockPipeline.expire).toHaveBeenCalledWith(indexKey, 600);
    expect(mockPipeline.expire).toHaveBeenCalledWith(roleKey, 600);

    // 12. Assert pipeline.exec() was called to apply all commands
    expect(mockPipeline.exec).toHaveBeenCalled();
  });

  it('should handle deny records and cache the false result', async () => {
    // 1. Mock Redis to fail
    mockRedisGet.mockRejectedValue(new Error('Redis down'));

    // 2. Mock database to return a DENY record
    mockPrisma.apiPermission.findFirst.mockResolvedValueOnce({
      id: '1',
      userId,
      roleId,
      isAllowed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 3. Execute the permission check
    const result = await checkPermissionFromNewCacheService(route, method, userId, roleId);

    // 4. Permission should be denied
    expect(result).toBe(false);

    // 5. Database should only be queried ONCE (deny check returns record)
    expect(mockPrisma.apiPermission.findFirst).toHaveBeenCalledTimes(1);

    // 6. Pipeline should still attempt to cache the deny result
    const expectedCacheKey = PermissionKeys.access(userId, method, route);
    expect(mockPipeline.set).toHaveBeenCalledWith(expectedCacheKey, 'false', 'EX', 600);
    expect(mockPipeline.exec).toHaveBeenCalled();
  });
});
