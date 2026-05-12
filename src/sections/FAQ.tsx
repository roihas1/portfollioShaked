import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionWrapper } from "@/layouts/SectionWrapper"

const questions = [
  {
    question: "Which platforms do you support?",
    answer: "We support LinkedIn, Instagram, X/Twitter, and TikTok with platform-specific strategy and execution.",
  },
  {
    question: "How does pricing work?",
    answer: "Every engagement is customized to your goals, output scope, and strategic complexity. We provide tailored proposals.",
  },
  {
    question: "How involved do I need to be each week?",
    answer: "Most founders spend 60-90 minutes weekly in strategic review and voice capture sessions.",
  },
  {
    question: "Do you create the content for us?",
    answer: "Yes. We handle strategy, ghostwriting, editing, and publishing workflow while preserving your authentic voice.",
  },
  {
    question: "When should we expect growth?",
    answer: "Foundational clarity appears quickly, while measurable audience and inbound demand usually compound within 8-12 weeks.",
  },
]

export function FAQ() {
  return (
    <SectionWrapper id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-pretty text-2xl font-semibold sm:text-3xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="mt-6 w-full rounded-2xl border border-brand-border bg-card/70 p-3 sm:mt-8 sm:p-6"
        >
          {questions.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.question} className="border-brand-border/80">
              <AccordionTrigger className="text-sm sm:text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}
