import { SectionWrapper } from "@/layouts/SectionWrapper"

export function About() {
  return (
    <SectionWrapper id="about" className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-light">About The Brand Lab</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Your strategic partner for long-term founder authority</h2>
        <p className="mt-6 text-muted-foreground">
          We work with ambitious entrepreneurs and executive leaders who know visibility is leverage. Our team blends
          strategy, storytelling, and elite execution to build brand equity that compounds over years, not weeks.
        </p>
      </div>
      <div className="rounded-3xl border border-brand-border bg-gradient-to-br from-brand-surface to-brand-bg p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">Positioning Pillars</p>
        <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
          <li>Executive positioning built around business outcomes.</li>
          <li>Thought leadership that drives trust and inbound demand.</li>
          <li>Content systems designed for scale without founder burnout.</li>
        </ul>
      </div>
    </SectionWrapper>
  )
}
