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
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Measurable growth for high-performing founders</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {results.map((item) => (
          <Card key={item.label}>
            <CardContent className="space-y-5 pt-6">
              <p className="font-medium">{item.label}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
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
