import { SectionWrapper } from "@/layouts/SectionWrapper"
import { Card, CardContent } from "@/components/ui/card"

const results = [
  { label: "Follower Growth", before: "18K", after: "97K" },
  { label: "Avg Engagement", before: "1.9%", after: "8.7%" },
  { label: "Monthly Inbound Leads", before: "12", after: "66" },
]

export function Results() {
  return (
    <SectionWrapper id="results" className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-light">Case Studies</p>
        <h2 className="mt-2 text-pretty text-2xl font-semibold sm:mt-3 sm:text-3xl md:text-5xl">
          Measurable growth for high-performing founders
        </h2>
      </div>
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        {results.map((item) => (
          <Card key={item.label}>
            <CardContent className="space-y-4 px-4 pb-5 pt-5 sm:space-y-5 sm:px-6 sm:pt-6">
              <p className="font-medium leading-snug">{item.label}</p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <span>Before: {item.before}</span>
                <span className="text-brand-light">After: {item.after}</span>
              </div>
              <div className="h-2 rounded-full bg-brand-border">
                <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-brand-dark to-brand-light" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
