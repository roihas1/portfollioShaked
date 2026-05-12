import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/layouts/SectionWrapper"

const steps = [
  { title: "Brand Strategy", description: "Position your expertise to own a category and attract premium attention." },
  { title: "Content Creation", description: "Build a founder-led content engine with strategic narratives and ghostwriting." },
  { title: "Audience Growth", description: "Scale authority with consistent publishing, optimization, and platform systems." },
]

export function Process() {
  return (
    <SectionWrapper id="process" className="space-y-8 sm:space-y-10">
      <div className="min-w-0">
        <Badge variant="accent" className="max-w-full whitespace-normal text-left leading-snug">
          Our Process
        </Badge>
        <h2 className="mt-3 text-pretty text-2xl font-semibold sm:mt-4 sm:text-3xl md:text-5xl">
          A simple framework for compounding authority
        </h2>
      </div>
      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="min-w-0 rounded-2xl border border-brand-border bg-card/70 p-5 sm:p-6"
          >
            <p className="text-sm font-medium text-brand-light">Step {index + 1}</p>
            <h3 className="mt-2 text-lg font-semibold leading-snug sm:mt-3 sm:text-xl">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
