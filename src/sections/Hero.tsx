import { motion } from "framer-motion"
import heroWorkspace from "@/assets/hero-workspace.png"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-0 flex-col border-b border-brand-border pt-[calc(5rem+env(safe-area-inset-top,0px))] lg:min-h-[100dvh] lg:flex-row lg:pt-20"
    >
      <motion.div
        className="relative flex w-full flex-none flex-col justify-start bg-brand-cream px-4 pb-5 pt-8 sm:px-8 sm:pb-8 sm:pt-10 lg:min-h-[calc(100dvh-5rem)] lg:w-1/2 lg:flex-none lg:justify-center lg:px-14 lg:py-12 xl:px-20"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col lg:mx-0">
          <h1 className="mt-8 font-serif text-[1.65rem] leading-[1.15] tracking-tight text-brand-charcoal sm:mt-10 sm:text-3xl md:text-5xl lg:mt-10 lg:text-[2.85rem]">
            <span className="block font-normal lg:whitespace-nowrap">Building personal brands</span>
            <span className="mt-2 block font-normal italic">people remember.</span>
          </h1>

          <hr className="mt-6 h-px w-16 shrink-0 border-0 bg-brand-teal sm:mt-8" aria-hidden />

          <p className="mt-6 text-base font-medium text-brand-teal sm:mt-8 sm:text-lg lg:text-xl">
            For founders, CEOs &amp; modern businesses.
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-grayMuted sm:mt-4 lg:text-[15px]">
            Helping founders build authentic digital presence through strategy, positioning and content.
          </p>

          <a
            href="#pricing"
            className="mt-8 inline-flex min-h-[3rem] w-full max-w-xl touch-manipulation items-center justify-center bg-brand-teal px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream active:bg-brand-dark sm:mt-10 sm:min-w-[240px] sm:px-8 sm:tracking-[0.28em] sm:w-auto lg:mt-14"
          >
            Build your brand
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative flex min-h-[32vh] w-full flex-none sm:min-h-[38vh] lg:min-h-[calc(100dvh-5rem)] lg:w-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <img
          src={heroWorkspace}
          alt="Curated workspace with laptop, books, and stationery in warm natural light."
          className="absolute inset-0 h-full min-h-full w-full object-cover object-[center_40%] sm:object-center"
          decoding="async"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg/15 via-transparent to-brand-bg/10"
          aria-hidden
        />
      </motion.div>
    </section>
  )
}
