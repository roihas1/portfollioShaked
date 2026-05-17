import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import { navItems, whatsAppBookingUrl } from "@/lib/site-data"

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 max-w-[100vw] bg-brand-bg/90 backdrop-blur-md supports-[backdrop-filter]:bg-brand-bg/80 lg:bg-transparent lg:backdrop-blur-none supports-[backdrop-filter]:lg:bg-transparent">
      <div className="border-b border-brand-border/80 lg:border-transparent">
        <div className="pt-[env(safe-area-inset-top,0px)]">
          <nav className="container flex min-h-16 w-full items-center gap-3 sm:gap-4 lg:min-h-20 lg:gap-6">
            <a
              href="#hero"
              className="flex min-h-11 min-w-0 shrink-0 items-center gap-2 rounded-md py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              <img src={logo} alt="The Brand Lab logo" className="h-9 w-9 shrink-0 rounded-md object-cover sm:h-10 sm:w-10" />
              <span className="truncate text-xs font-semibold tracking-[0.18em] text-brand-teal sm:text-sm sm:tracking-[0.2em]">
                THE BRAND LAB
              </span>
            </a>
            <div className="hidden min-w-0 flex-1 items-center justify-end gap-6 lg:flex xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 text-xs font-medium uppercase tracking-[0.2em] text-brand-teal transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="hidden shrink-0 lg:block">
              <Button asChild size="sm">
                <a href={whatsAppBookingUrl} target="_blank" rel="noopener noreferrer">
                  Schedule a meeting
                </a>
              </Button>
            </div>
            <button
              type="button"
              className="ml-auto inline-flex h-11 min-h-11 w-11 min-w-11 shrink-0 items-center justify-center rounded-md border border-brand-border text-brand-teal touch-manipulation lg:ml-0 lg:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} strokeWidth={2} aria-hidden /> : <Menu size={20} strokeWidth={2} aria-hidden />}
            </button>
          </nav>
        </div>
      </div>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto overscroll-contain border-b border-brand-border bg-brand-bg/98 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pt-2 backdrop-blur-xl lg:hidden"
          id="mobile-nav-panel"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3.5 text-base text-foreground touch-manipulation active:bg-brand-surface/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <Button asChild className="h-12 w-full touch-manipulation">
                <a
                  href={whatsAppBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Schedule a meeting
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}
