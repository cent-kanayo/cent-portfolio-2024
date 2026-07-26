"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
]

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className="flex gap-4">
      {links.map((link, index) => {
        const isActive = pathname === link.path
        return (
          <Link
            key={index}
            href={link.path}
            className={`px-3 py-1 text-sm tracking-wide transition-colors ${
              isActive
                ? "bg-foreground text-primary font-bold"
                : "text-foreground/70 hover:text-foreground hover:bg-foreground/10"
            }`}
          >
            {isActive ? `[ ${link.name} ]` : link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
