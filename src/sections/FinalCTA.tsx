import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsAppBookingUrl } from "@/lib/site-data"

export function FinalCTA() {
  return (
    <section id="final-cta" className="page-container pb-16 pt-2 sm:pb-20 md:pb-24">
      <div className="overflow-hidden rounded-2xl border border-brand-border bg-gradient-to-r from-brand-dark via-brand-teal to-brand-light bg-[length:200%_200%] p-6 text-center shadow-glow animate-gradient sm:rounded-3xl sm:p-10 md:p-16">
        <h2 className="mx-auto max-w-2xl text-pretty font-serif text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
          It&apos;s time to build{" "}
          <span className="italic">your brand</span>
        </h2>
        <Button asChild size="lg" variant="secondary" className="mt-8 w-full min-h-12 sm:mt-10 sm:w-auto">
          <a
            href={whatsAppBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2"
          >
            Schedule a meeting <ArrowRight className="shrink-0" size={18} aria-hidden />
          </a>
        </Button>
      </div>
    </section>
  )
}
