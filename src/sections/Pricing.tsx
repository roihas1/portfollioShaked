import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper } from "@/layouts/SectionWrapper"
import { whatsAppBookingUrl } from "@/lib/site-data"

const tiers = [
  {
    title: "OPTION 1 — Foundation",
    features: [
      "Personal brand strategy session",
      "Positioning & messaging direction",
      "10 LinkedIn posts",
      "Content guidance",
    ],
    popular: false,
  },
  {
    title: "OPTION 2 — Growth",
    features: [
      "Ongoing strategic direction",
      "8–10 monthly posts",
      "Content refinement & writing",
      "Continuous support & guidance",
    ],
    popular: false,
  },
  {
    title: "OPTION 3 — Advanced Growth",
    features: [
      "Everything in Growth",
      "Custom GEMS AI assistant",
      "Advanced content optimization",
      "Strategic brand support",
    ],
    popular: true,
  },
  {
    title: "OPTION 4 — Premium Presence",
    features: [
      "Everything in Advanced Growth",
      "Conference & event coverage",
      "On-site content creation",
      "Video editing & brand storytelling",
      "High-touch strategic support",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <SectionWrapper id="pricing" className="space-y-6 sm:space-y-8">
      <div className="max-w-3xl">
        <Badge variant="accent" className="max-w-full whitespace-normal text-left leading-snug">
          Ways To Build Your Brand
        </Badge>
        <h2 className="mt-3 text-pretty text-2xl font-semibold sm:mt-4 sm:text-3xl md:text-5xl">
          Premium growth partnerships tailored for founders
        </h2>
      </div>
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <Card key={tier.title} className={tier.popular ? "border-brand-light shadow-glow" : ""}>
            <CardHeader className="space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                <CardTitle className="text-base leading-snug sm:min-w-0 sm:flex-1 sm:text-lg">{tier.title}</CardTitle>
                {tier.popular ? (
                  <Badge variant="accent" className="w-fit shrink-0">
                    Most Popular
                  </Badge>
                ) : null}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-muted">Includes</p>
              <ul className="space-y-2 text-sm leading-snug text-muted-foreground">
                {tier.features.map((feature) => (
                  <li key={feature} className="break-words pl-0">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={tier.popular ? "default" : "outline"} className="mt-1 w-full min-h-12" asChild>
                <a href={whatsAppBookingUrl} target="_blank" rel="noopener noreferrer">
                  Contact for Pricing
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
