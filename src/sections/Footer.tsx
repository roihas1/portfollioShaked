import logo from "@/assets/logo.png"

export function Footer() {
  return (
    <footer className="border-t border-brand-border py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="The Brand Lab" className="h-8 w-8 rounded-md object-cover" />
          <p className="text-sm text-muted-foreground">The Brand Lab - Personal Branding for Founders</p>
        </div>
        <p className="text-xs text-brand-muted">© {new Date().getFullYear()} The Brand Lab. All rights reserved.</p>
      </div>
    </footer>
  )
}
