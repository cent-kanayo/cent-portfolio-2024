import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-4 text-foreground border-b border-foreground/30">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <h1 className="text-lg md:text-xl font-semibold tracking-wider">
            <span className="text-foreground">centcodes@portfolio</span>
            <span className="text-foreground animate-pulse">:~$</span>
            <span className="terminal-cursor"> </span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
