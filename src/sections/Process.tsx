import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/layouts/SectionWrapper"

const steps = [
  { title: "Brand Strategy", description: "Position your expertise to own a category and attract premium attention." },
  { title: "Content Creation", description: "Build a founder-led content engine with strategic narratives and ghostwriting." },
  { title: "Audience Growth", description: "Scale authority with consistent publishing, optimization, and platform systems." },
]

export function Process() {
  return (
    <SectionWrapper id="process" className="space-y-10">
      <div>
        <Badge variant="accent">Our Process</Badge>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A simple framework for compounding authority</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-2xl border border-brand-border bg-card/70 p-6">
            <p className="text-sm font-medium text-brand-light">Step {index + 1}</p>
            <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
