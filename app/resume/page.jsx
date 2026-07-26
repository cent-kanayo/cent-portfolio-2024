"use client"
import { useState } from "react"
import { motion } from "framer-motion"

const tabs = [
  { id: "experience", label: "experience.md" },
  { id: "education", label: "education.md" },
  { id: "skills", label: "skills.txt" },
  { id: "projects", label: "projects.md" },
  { id: "about", label: "about.me" },
]

const experience = [
  {
    role: "Backend Engineer",
    company: "Neli Arabi GmbH [Contract]",
    duration: "May 2026 - Present",
    highlights: [
      "Built 5-stage Product Data Integrity Architecture (PDIA) pipeline with BullMQ workers processing CSV, XML, REST APIs, and webhooks",
      "Designed JWT-embedded multi-tenant isolation system with middleware stamping trusted companyId across 40+ modules",
      "Implemented stock verification guards, warehouse deletion protection, and low-stock summary reporting",
    ],
  },
  {
    role: "Software Engineer [Contract]",
    company: "University of Houston",
    duration: "Sep 2025 - Apr 2026",
    highlights: [
      "Designed RESTful API in Node.js + Express serving geospatial health, demographic, and environmental data across 10+ endpoints",
      "Modeled PostgreSQL relational schema with Prisma ORM supporting independent data domains",
      "Built generic CSV-to-Database import pipeline handling messy public health data with auto-upsert",
      "Developed GeoJSON caching layer and disaster report system with full-text search",
    ],
  },
  {
    role: "Lead WordPress Developer [Full-time]",
    company: "Sprinnng (TechWriteable)",
    duration: "Jul 2023 - Aug 2026",
    highlights: [
      "Led development and maintenance of WordPress-based projects",
      "Collaborated with cross-functional teams to deliver client requirements",
      "Managed project timelines ensuring on-time delivery",
    ],
  },
  {
    role: "Software Engineer & Tutor [Intern]",
    company: "Cyclobold",
    duration: "Aug 2022 - May 2023",
    highlights: [
      "Developed full-stack applications using JavaScript, React, and Node.js",
      "Assisted in designing and implementing database solutions with SQL",
      "Gained hands-on experience in DevOps and Cloud Computing",
    ],
  },
]

const education = [
  {
    degree: "BSc. Computer Science",
    school: "University of the People",
    duration: "Jun 2026 - Jun 2030",
  },
  {
    degree: "BSc. Quantity Surveying",
    school: "University of Lagos",
    duration: "Jan 2019 - Nov 2024",
  },
]

const skills = {
  languages: ["JavaScript", "TypeScript", "PHP", "Golang"],
  frameworks: [
    "Node", "React", "React-Query", "Redux", "Jotai", "Zustand",
    "React Native", "Fastify", "Express", "Prisma", "Gin", "Echo", "Next.js",
  ],
  databases: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
  ops: [
    "Git", "GitHub", "Postman", "Swagger", "Docker", "DataDog",
    "REST", "GraphQL", "Kubernetes", "Kafka", "Cypress", "Jest",
    "AWS", "GCP", "Sentry", "Digital Ocean",
  ],
}

const projects = [
  {
    name: "Landlord Beware",
    url: "https://landlordbeware.com",
    stack: "Node.js, Express, React, TypeScript, PostgreSQL",
    desc: "Tenant evaluation and property management platform",
  },
  {
    name: "TechWriteable",
    url: "https://techwriteable.me",
    stack: "WordPress, PHP, jQuery, MySQL",
    desc: "Job board platform for creative professionals",
  },
  {
    name: "Future Design Collaborative",
    url: "https://futuredesigncollaborative.com",
    stack: "React, TypeScript, Fastify, Node.js, PostgreSQL",
    desc: "Design industry platform connecting Nigerian designers globally",
  },
  {
    name: "Kripa Limited",
    url: "https://kripalimited.com",
    stack: "WordPress, PHP, MySQL",
    desc: "Logistics and errand delivery platform",
  },
  {
    name: "JoinSportMe",
    url: "https://joinsportme.com",
    stack: "React, TypeScript, Fastify, Node.js, PostgreSQL",
    desc: "Social platform for sports events, real-time chat, and networking",
  },
]

const about = {
  name: "Chukwu Innocent",
  email: "centkanayo@gmail.com",
  phone: "+234 0906 545 7397",
  location: "Lagos, Nigeria",
  website: "https://centcodes.com",
  summary:
    "Seasoned Software Engineer with 4+ years of professional experience specializing in TypeScript, Node.js, Golang, PHP, and React. I build scalable backend systems with proven work experience in API development, testing, and deployment. I combine technical excellence with clear and prompt communication, consistently delivering quality, testable code.",
}

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience")

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="space-y-6">
            <div className="text-xs text-foreground/50 mb-4">
              {"> cat ./experience.md"}
            </div>
            {experience.map((item, i) => (
              <div key={i} className="border-l-2 border-foreground/30 pl-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-foreground font-bold">{item.role}</span>
                  <span className="text-foreground/50 text-sm">@ {item.company}</span>
                </div>
                <div className="text-xs text-foreground/40 mb-2">{item.duration}</div>
                <ul className="space-y-1">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-foreground/80 flex gap-2">
                      <span className="text-foreground shrink-0">&gt;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {i < experience.length - 1 && (
                  <div className="mt-3 text-xs text-foreground/30">---</div>
                )}
              </div>
            ))}
          </div>
        )
      case "education":
        return (
          <div className="space-y-6">
            <div className="text-xs text-foreground/50 mb-4">
              {"> cat ./education.md"}
            </div>
            {education.map((item, i) => (
              <div key={i} className="border-l-2 border-foreground/30 pl-4">
                <div className="text-foreground font-bold">{item.degree}</div>
                <div className="text-sm text-foreground/70">{item.school}</div>
                <div className="text-xs text-foreground/40">{item.duration}</div>
              </div>
            ))}
          </div>
        )
      case "skills":
        return (
          <div className="space-y-6">
            <div className="text-xs text-foreground/50 mb-4">
              {"> cat ./skills.txt"}
            </div>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <div className="text-foreground font-bold mb-2">
                  <span className="text-foreground/50"># </span>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <span
                      key={j}
                      className="text-sm border border-foreground/40 px-2 py-0.5 text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      case "projects":
        return (
          <div className="space-y-6">
            <div className="text-xs text-foreground/50 mb-4">
              {"> cat ./projects.md"}
            </div>
            {projects.map((item, i) => (
              <div key={i} className="border-l-2 border-foreground/30 pl-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-foreground font-bold">{item.name}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-foreground/50 hover:text-foreground underline underline-offset-2"
                  >
                    {item.url}
                  </a>
                </div>
                <div className="text-sm text-foreground/80 mt-1">{item.desc}</div>
                <div className="text-xs text-foreground/50 mt-1">[{item.stack}]</div>
              </div>
            ))}
          </div>
        )
      case "about":
        return (
          <div className="space-y-4">
            <div className="text-xs text-foreground/50 mb-4">
              {"> cat ./about.me"}
            </div>
            <div className="border-l-2 border-foreground/30 pl-4 space-y-3">
              <div>
                <span className="text-foreground/50 text-xs">name: </span>
                <span className="text-foreground">{about.name}</span>
              </div>
              <div>
                <span className="text-foreground/50 text-xs">email: </span>
                <span className="text-foreground">{about.email}</span>
              </div>
              <div>
                <span className="text-foreground/50 text-xs">phone: </span>
                <span className="text-foreground">{about.phone}</span>
              </div>
              <div>
                <span className="text-foreground/50 text-xs">location: </span>
                <span className="text-foreground">{about.location}</span>
              </div>
              <div>
                <span className="text-foreground/50 text-xs">website: </span>
                <a
                  href={about.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-2"
                >
                  {about.website}
                </a>
              </div>
              <div className="pt-2 border-t border-foreground/20">
                <span className="text-foreground/50 text-xs">summary: </span>
                <p className="text-foreground/80 text-sm mt-1 leading-relaxed">
                  {about.summary}
                </p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] py-8"
    >
      <div className="border border-foreground/30">
        <div className="border-b border-foreground/30 px-4 py-2 text-xs text-foreground/50 flex items-center gap-2">
          <span className="text-foreground">$</span>
          <span>cat ./resume</span>
          <span className="terminal-cursor" />
        </div>

        <div className="flex flex-col xl:flex-row">
          <div className="xl:w-56 border-b xl:border-b-0 xl:border-r border-foreground/30">
            <div className="p-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-foreground text-primary font-bold"
                        : "text-foreground/70 hover:text-foreground hover:bg-foreground/10"
                    }`}
                  >
                    {isActive ? `> ${tab.label}` : `  ${tab.label}`}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex-1 p-4 xl:p-6 min-h-[60vh]">
            {renderContent()}
          </div>
        </div>
      </div>

      <div className="mt-2 text-xs text-foreground/30 flex items-center gap-2">
        <span>--- END ---</span>
        <span className="terminal-cursor" />
      </div>
    </motion.div>
  )
}

export default Resume
