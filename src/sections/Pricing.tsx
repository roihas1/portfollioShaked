import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper } from "@/layouts/SectionWrapper"

export function Pricing() {
  return (
    <SectionWrapper id="pricing" className="space-y-8">
      <div className="max-w-3xl">
        <Badge variant="accent">Strategic Engagement Models</Badge>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Premium growth partnerships tailored for executives</h2>
      </div>
      <Card className="border-brand-teal/40 bg-gradient-to-br from-brand-surface to-brand-bg">
        <CardHeader>
          <CardTitle>Stage 1 — Build Your Presence</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Strategic positioning session</li>
            <li>Personal brand strategy and content direction</li>
            <li>10 custom founder posts and voice development</li>
          </ul>
          <Button asChild>
            <a href="#final-cta">Start Building Your Brand</a>
          </Button>
        </CardContent>
      </Card>
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          {
            title: "Essential Growth",
            features: ["8-10 posts per month", "Ongoing strategy optimization", "Guidance and support"],
            cta: "Contact for Pricing",
          },
          {
            title: "Advanced Growth",
            features: ["Everything in Essential", "Custom GEMS AI bot creation", "Enhanced audience systems"],
            cta: "Contact for Pricing",
            popular: true,
          },
          {
            title: "Premium Authority",
            features: ["Everything in Advanced", "Conference/event content coverage", "Professional filming and editing"],
            cta: "Custom Pricing",
          },
        ].map((tier) => (
          <Card key={tier.title} className={tier.popular ? "border-brand-light shadow-glow" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-xl">{tier.title}</CardTitle>
                {tier.popular ? <Badge variant="accent">Most Popular</Badge> : null}
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button variant={tier.popular ? "default" : "outline"} className="w-full">
                {tier.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
