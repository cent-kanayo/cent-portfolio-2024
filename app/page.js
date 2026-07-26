"use client"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { motion } from "framer-motion"

export default function Home() {
  const downloadFile = (fileUrl, fileName) => {
    const link = document.createElement("a")
    link.href = fileUrl
    link.download = fileName || "download.pdf"
    link.click()
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <section className="py-8 md:py-16">
        <div className="border border-foreground/30">
          <div className="border-b border-foreground/30 px-4 py-2 text-xs text-foreground/50 flex items-center gap-2">
            <span className="text-foreground">$</span>
            <span>./greet --visitor</span>
            <span className="terminal-cursor" />
          </div>

          <div className="p-4 md:p-8 space-y-4">
            <div className="text-xs text-foreground/50">
              {">} Welcome to my portfolio terminal"}
            </div>

            <div className="space-y-1">
              <div className="text-xs text-foreground/50">$ whoami</div>
              <div className="text-xl md:text-3xl font-bold text-foreground terminal-glow tracking-wide">
                Chukwu Innocent
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-foreground/50">$ cat role.txt</div>
              <div className="text-base md:text-lg text-foreground/80">
                Full-Stack Developer
              </div>
            </div>

            <div className="border-l-2 border-foreground/30 pl-4 py-2">
              <div className="text-xs text-foreground/50 mb-2">
                {">} ./profile-summary"}
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed max-w-2xl">
                I am a seasoned Software Engineer with 4+ years of professional
                experience specializing in TypeScript, Node.js, Golang, PHP, and
                React. I build scalable backend systems with proven work
                experience in API development, testing, and deployment. With a
                strong work ethic, I excel in transforming technical challenges
                into maintainable solutions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() =>
                  downloadFile(
                    "http://www.centcodes.com/chukwu_innocent.pdf",
                    "chukwu_innocent.pdf"
                  )
                }
                className="border border-foreground px-4 py-2 text-sm text-foreground hover:bg-foreground hover:text-primary transition-colors"
              >
                $ ./download-cv
              </button>
              <Socials
                containerStyle="flex gap-3"
                iconStyle="w-8 h-8 border border-foreground/50 flex justify-center items-center text-foreground/70 text-sm hover:bg-foreground hover:text-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <Stats />
      </section>
    </motion.main>
  )
}
