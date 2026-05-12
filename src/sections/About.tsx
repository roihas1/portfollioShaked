import { motion } from "framer-motion"
import { Sparkles, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/layouts/SectionWrapper"

const focusAreas = [
  {
    icon: Target,
    title: "Clarity",
    description: "Sharp message, identity, and market position so people know why you matter.",
  },
  {
    icon: Sparkles,
    title: "Authentic voice",
    description: "Strategy and storytelling that feel like you, not a template.",
  },
] as const

export function About() {
  return (
    <SectionWrapper
      id="about"
      className="relative overflow-hidden py-14 sm:py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand-teal/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-brand-light/10 blur-3xl"
        aria-hidden
      />

      <div className="relative rounded-[1.75rem] border border-brand-border/80 bg-gradient-to-b from-brand-surface/80 via-brand-bg/60 to-brand-bg p-6 shadow-[0_0_0_1px_rgba(26,155,170,0.06)] sm:rounded-[2rem] sm:p-8 md:p-12 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-14 lg:items-start">
          <div className="min-w-0">
            <Badge variant="accent" className="font-medium tracking-wide">
              About The Brand Lab
            </Badge>
            <h2 className="mt-4 text-pretty font-serif text-3xl font-normal leading-[1.12] tracking-tight text-foreground sm:mt-5 sm:text-4xl md:text-5xl lg:text-[2.65rem]">
              A studio for{" "}
              <span className="text-brand-light italic">personal branding</span>
              {" "}and positioning.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              We shape perception through strategy, psychology, and storytelling — translating identity into clear
              positioning. For founders who want to express their voice authentically and strengthen both their personal
              brand and their company&apos;s place in the market.
            </p>
            <div className="relative mt-6 max-w-xl sm:mt-7">
              <div
                className="pointer-events-none absolute -left-1 top-0 font-serif text-[2.75rem] leading-none text-brand-teal/[0.12] sm:text-[3.25rem]"
                aria-hidden
              >
                &ldquo;
              </div>
              <p className="relative border-l border-brand-teal/35 bg-gradient-to-r from-brand-teal/[0.06] to-transparent py-2 pl-4 pr-2 text-[13px] leading-relaxed text-muted-foreground sm:py-2.5 sm:pl-5 sm:text-sm">
                <span className="font-medium text-foreground/90">Founded by Shaked Even Zahav</span>
                <span className="text-muted-foreground">, </span>
                <span className="font-serif italic text-foreground/85">The Brand Lab</span>
                <span className="text-muted-foreground">
                  {" "}
                  is for founders who want to express their voice authentically and strengthen both their personal brand
                  and their company positioning.
                </span>
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-w-0 overflow-hidden rounded-2xl border border-brand-border/70 bg-brand-bg/40 sm:rounded-3xl"
          >
            <div className="grid divide-y divide-brand-border/55 md:grid-cols-2 md:divide-x md:divide-y-0">
              {focusAreas.map((item) => {
                const Icon = item.icon
                return (
                  <article
                    key={item.title}
                    className="group relative px-5 py-7 sm:px-6 sm:py-8 md:px-6 md:py-7 lg:px-7"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/[0.07] via-transparent to-transparent" />
                    </div>
                    <div className="relative flex flex-col gap-3 sm:gap-3.5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border/70 bg-brand-surface/80 text-brand-light shadow-[0_0_0_1px_rgba(26,155,170,0.12)] transition-colors duration-300 group-hover:border-brand-teal/35 group-hover:text-brand-light">
                        <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-normal leading-snug text-foreground sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
