"use client"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import {CiMenuFries} from "react-icons/ci"
import Link from "next/link"
import { useState } from "react"
const links = [
    {
      name: "home",
      path: "/"
    },
    {
      name: "services",
      path: "/services"
    },
    {
      name: "resume",
      path: "/resume"
    },
    {
      name: "work",
      path: "/work"
    },
    {
      name: "contact",
      path: "/contact"
    },
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
                <CiMenuFries onClick={() => setIsOpen(true)} className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent>
                <div className="mt-32 text-center">
                <Link href="/">
                    <h1 className="text-2xl md:text-4xl font-semibold">_CentCodes<span className="text-accent">.</span></h1>
                </Link>
                </div>
                <div className="flex flex-col justify-center items-center gap-8 mt-8">
                {links.map((link, index) => {
                return <Link key={index} href={link.path} onClick={handleClick} className={`${pathname === link.path && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
                 })}
                </div>
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav