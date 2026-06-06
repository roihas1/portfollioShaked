import logo from "@/assets/logo.png"

export function Footer() {
  return (
    <footer className="border-t border-brand-border py-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:py-10">
      <div className="page-container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex max-w-full flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-3 md:max-w-none">
          <img src={logo} alt="The Brand Lab" className="h-8 w-8 shrink-0 rounded-md object-cover" />
          <p className="max-w-[20rem] text-sm leading-snug text-muted-foreground sm:max-w-none">
            The Brand Lab - Personal Branding for Founders
          </p>
        </div>
        <p className="shrink-0 text-xs text-brand-muted">© {new Date().getFullYear()} The Brand Lab. All rights reserved.</p>
      </div>
    </footer>
  )
}
