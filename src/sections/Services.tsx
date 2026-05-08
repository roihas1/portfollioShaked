import { motion } from "framer-motion"
import { SectionWrapper } from "@/layouts/SectionWrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/site-data"

export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-light">Services</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Strategic systems that grow authority and demand</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <motion.div key={service.title} whileHover={{ y: -6 }}>
            <Card className="h-full transition-all duration-300 hover:border-brand-teal/50 hover:shadow-glow">
              <CardHeader>
                <service.icon className="mb-3 text-brand-light" size={26} />
                <CardTitle>{service.title}</CardTitle>
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
