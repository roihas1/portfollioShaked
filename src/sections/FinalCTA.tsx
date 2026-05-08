import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section id="final-cta" className="container pb-24">
      <div className="overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-r from-brand-dark via-brand-teal to-brand-light bg-[length:200%_200%] p-10 text-center shadow-glow animate-gradient md:p-16">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold text-white md:text-5xl">
          Build your authority before your competitors do.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm text-white/85 md:text-base">
          Book a strategic growth call and get a clear roadmap to scale your personal brand across LinkedIn, Instagram,
          X, and TikTok.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-8">
          <a href="#">
            Book a Strategy Call <ArrowRight className="ml-2" size={18} />
          </a>
        </Button>
      </div>
    </section>
  )
}
