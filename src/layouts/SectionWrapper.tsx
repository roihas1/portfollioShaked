import { motion } from "framer-motion"
import type { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

type SectionWrapperProps = PropsWithChildren<{
  id: string
  className?: string
}>

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "page-container py-12 sm:py-16 md:py-24",
        className,
      )}
    >
      {children}
    </motion.section>
  )
}
