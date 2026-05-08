import { SectionWrapper } from "@/layouts/SectionWrapper"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Within 90 days we doubled inbound founder calls. Their positioning work made our content feel like a market signal.",
    author: "Amit R., SaaS Founder",
  },
  {
    quote:
      "The Brand Lab transformed my LinkedIn from silent to strategic. I now attract partnerships and podcast invites weekly.",
    author: "Maya L., CEO",
  },
  {
    quote:
      "Every post sounds exactly like me, but stronger. We built authority without spending my time on content operations.",
    author: "David S., Tech Entrepreneur",
  },
]

export function SocialProof() {
  return (
    <SectionWrapper id="social-proof" className="space-y-10">
      <div className="grid gap-4 md:grid-cols-3">
        {["+12M content impressions", "+250K followers generated", "+500 viral posts created"].map((metric) => (
          <Card key={metric} className="bg-brand-surface/55">
            <CardContent className="pt-6 text-center text-lg font-semibold text-brand-light">{metric}</CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.author}>
            <CardContent className="space-y-4 pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">"{item.quote}"</p>
              <p className="text-sm font-medium text-brand-light">{item.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
