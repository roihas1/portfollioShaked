import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsAppBookingUrl } from "@/lib/site-data"

export function FinalCTA() {
  return (
    <section id="final-cta" className="container max-w-[100vw] pb-16 pt-2 sm:pb-20 md:pb-24">
      <div className="overflow-hidden rounded-2xl border border-brand-border bg-gradient-to-r from-brand-dark via-brand-teal to-brand-light bg-[length:200%_200%] p-6 text-center shadow-glow animate-gradient sm:rounded-3xl sm:p-10 md:p-16">
        <h2 className="mx-auto max-w-3xl text-pretty text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">
          Build your authority before your competitors do.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-base">
          Book a meeting call and get a clear roadmap to scale your personal brand across LinkedIn, Instagram,
          X, and TikTok.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-6 w-full min-h-12 sm:mt-8 sm:w-auto">
          <a
            href={whatsAppBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2"
          >
            Book a meeting call <ArrowRight className="shrink-0" size={18} aria-hidden />
          </a>
        </Button>
      </div>
    </section>
  )
}
