"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description:
      "I help businesses streamline and automate processes using cutting edge technologies while implementing industry best practices.",
  },
  {
    num: "02",
    title: "WordPress Development",
    description:
      "I design visually appealing and performant WordPress websites. I also develop and customize custom WordPress themes to suit specific client needs.",
  },
  {
    num: "03",
    title: "Plugin Development",
    description:
      "With custom plugins, I help clients transform a static website into an enterprise level web app.",
  },
  {
    num: "04",
    title: "IT Admin Services",
    description:
      "I provide general IT administration functions, from setting up servers on Cpanel or Cloud platforms, domain registrations and DNS configurations.",
  },
]

const Services = () => {
  return (
    <motion.section
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
          <span>ls ./services/</span>
          <span className="terminal-cursor" />
        </div>

        <div className="p-4 xl:p-6">
          <div className="text-xs text-foreground/50 mb-6">
            {">"} Available services (4)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-foreground/20 p-4 hover:border-foreground/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-bold text-foreground/20">
                    {service.num}
                  </span>
                  <span className="text-xs text-foreground/30">./{service.num}</span>
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-3 border-t border-foreground/10 pt-2">
                  <Link
                    href="/contact"
                    className="text-xs text-foreground/50 hover:text-foreground underline underline-offset-2"
                  >
                    $ request this service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Services
