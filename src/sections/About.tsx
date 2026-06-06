import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/layouts/SectionWrapper"

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
        <div className="min-w-0">
          <Badge variant="accent" className="font-medium tracking-wide">
            About The Brand Lab
          </Badge>
          <h2 className="mt-4 text-pretty font-serif text-3xl font-normal leading-[1.12] tracking-tight text-foreground sm:mt-5 sm:text-4xl md:text-5xl lg:text-[2.65rem]">
            Behind The Brand Lab
          </h2>
          <div className="mt-5 sm:mt-6 lg:grid lg:grid-cols-[minmax(0,52%)_1fr] lg:items-start xl:grid-cols-[minmax(0,58%)_1fr]">
            <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-none">
              <p>
                The Brand Lab was created from the belief that strong personal brands are not built by copying trends or
                sounding like everyone else, but by learning how to communicate your own voice with clarity, confidence,
                and purpose.
              </p>
              <p>
                Because today, people connect with people.
                <br />
                With perspective.
                <br />
                With authenticity.
                <br />
                And with stories they can relate to.
              </p>
              <p>
                The challenge? Most founders know the value of personal branding, but lack the time, structure, or
                expertise to turn it into a consistent asset.
              </p>
            </div>

            <aside className="relative mt-6 max-w-xl sm:mt-7 lg:mt-0 lg:max-w-xs lg:justify-self-end xl:max-w-sm">
              <div
                className="pointer-events-none absolute -left-1 top-0 font-serif text-[2.75rem] leading-none text-brand-teal/[0.12] sm:text-[3.25rem] lg:-right-1 lg:-top-2 lg:left-auto lg:text-[3.5rem]"
                aria-hidden
              >
                &ldquo;
              </div>
              <p className="relative border-l border-brand-teal/35 bg-gradient-to-r from-brand-teal/[0.06] to-transparent py-2 pl-4 pr-2 text-[13px] leading-relaxed text-muted-foreground sm:py-2.5 sm:pl-5 sm:text-sm lg:rounded-2xl lg:border lg:border-brand-teal/20 lg:bg-gradient-to-br lg:from-brand-teal/[0.08] lg:via-brand-surface/60 lg:to-brand-bg/90 lg:p-6 lg:pl-6 lg:pr-5 lg:shadow-[0_0_0_1px_rgba(26,155,170,0.06)]">
                <span className="font-medium text-foreground/90">Founded by Shaked Even Zahav</span>
                <span className="text-muted-foreground">, </span>
                <span className="font-serif italic text-foreground/85">The Brand Lab</span>
                <span className="text-muted-foreground">
                  {" "}
                  is for founders who want to express their voice authentically and strengthen both their personal brand
                  and their company positioning.
                </span>
              </p>
            </aside>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
