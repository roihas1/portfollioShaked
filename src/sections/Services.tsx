import { motion } from "framer-motion"
import { SectionWrapper } from "@/layouts/SectionWrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/site-data"

export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="mb-8 max-w-2xl sm:mb-12">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-light">Services</p>
        <h2 className="mt-2 text-pretty text-2xl font-semibold sm:mt-3 sm:text-3xl md:text-5xl">Our Approach</h2>
      </div>
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="h-full [@media(hover:hover)_and_(pointer:fine)]:transition-transform [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1.5"
          >
            <Card className="h-full transition-[border-color,box-shadow] duration-300 hover:border-brand-teal/50 hover:shadow-glow">
              <CardHeader className="pb-2">
                <service.icon className="mb-2 text-brand-light sm:mb-3" size={26} strokeWidth={1.75} />
                <CardTitle className="text-lg leading-snug sm:text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
