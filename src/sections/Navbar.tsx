import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import { navItems } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "border-b border-brand-border bg-brand-bg/75 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="The Brand Lab logo" className="h-10 w-10 rounded-md object-cover" />
          <span className="text-sm font-semibold tracking-[0.2em] text-brand-light">THE BRAND LAB</span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-brand-light">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button asChild size="sm">
            <a href="#final-cta">Book a Free Strategy Call</a>
          </Button>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-border lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border-b border-brand-border bg-brand-bg/95 px-4 pb-5 pt-2 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <Button asChild>
              <a href="#final-cta" onClick={() => setOpen(false)}>
                Book a Free Strategy Call
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
