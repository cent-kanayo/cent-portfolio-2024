"use client"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { CiMenuFries } from "react-icons/ci"
import Link from "next/link"
import { useState } from "react"

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
]

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const handleClick = () => {
    setIsOpen(false)
  }
  return (
    <nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <CiMenuFries
            onClick={() => setIsOpen(true)}
            className="text-[28px] text-foreground"
          />
        </SheetTrigger>
        <SheetContent>
          <div className="mt-24 text-center">
            <Link href="/">
              <h1 className="text-lg font-semibold tracking-wider">
                <span className="text-foreground">centcodes@portfolio</span>
                <span className="text-foreground">:~$</span>
                <span className="terminal-cursor"> </span>
              </h1>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-12">
            {links.map((link, index) => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={index}
                  href={link.path}
                  onClick={handleClick}
                  className={`px-4 py-2 text-base tracking-wide transition-colors ${
                    isActive
                      ? "bg-foreground text-primary font-bold"
                      : "text-foreground/70 hover:text-foreground hover:bg-foreground/10"
                  }`}
                >
                  {isActive ? `[ ${link.name} ]` : `$ cd ${link.name}`}
                </Link>
              )
            })}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
