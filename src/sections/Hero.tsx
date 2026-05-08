import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Globe, Rocket, Send, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const kpis = [
  { label: "LinkedIn Reach", value: "+480%" },
  { label: "Inbound Leads", value: "+160%" },
  { label: "Thought Leadership", value: "Top 1%" },
]

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-brand-border pt-32">
      <div className="absolute inset-0 -z-10 bg-brand-radial" />
      <div className="container grid gap-12 pb-20 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface/80 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-light">
            <Rocket size={14} /> Personal Branding for Elite Founders
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
            Turn Your Personal Brand Into Your Strongest Business Asset
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We help entrepreneurs, founders, and CEOs become industry authorities through strategic content, premium
            storytelling, and social media systems designed to drive demand.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#final-cta">
                Book a Free Strategy Call <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#results">See Client Results</a>
            </Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="rounded-3xl border border-brand-border bg-card/85 p-6 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Founder Authority Dashboard</p>
              <BarChart3 className="text-brand-light" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-brand-border bg-brand-surface/70 p-4">
                  <p className="text-xs text-muted-foreground">{kpi.label}</p>
                  <p className="mt-2 text-xl font-semibold text-brand-light">{kpi.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-brand-border p-4">
              <Users className="text-brand-light" size={18} />
              <Send className="text-brand-light" size={18} />
              <Globe className="text-brand-light" size={18} />
              <p className="text-sm text-muted-foreground">Multi-platform growth: LinkedIn, X, Instagram, TikTok</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
