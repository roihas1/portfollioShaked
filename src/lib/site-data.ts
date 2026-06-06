import { BookText, Compass, PenSquare, Sparkles } from "lucide-react"

const whatsAppPhone = "972526691960"

const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${whatsAppPhone}?text=${encodeURIComponent(message)}`

/** Message visitors see pre-filled in WhatsApp — change this to whatever you want */
const whatsAppPrefillMessage =
  "היי שקד, הגעתי אליך דרך האתר ואשמח לשוחח על שיתוף פעולה."

/** Opens WhatsApp chat for booking and pricing inquiries (includes pre-filled message) */
export const whatsAppBookingUrl = buildWhatsAppUrl(whatsAppPrefillMessage)

/** Opens WhatsApp with a package-specific pricing inquiry message */
export const whatsAppPricingUrl = (packageName: string) =>
  buildWhatsAppUrl(
    `היי שקד, הגעתי אליך דרך האתר ואני מתעניין בחבילה ${packageName}.`
  )

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#pricing" },
  { label: "Contact", href: "#final-cta" },
]

export const services = [
  {
    title: "Strategy & Positioning",
    description:
      "Defining your voice, messaging, audience, and the way you want to be perceived online.",
    icon: Compass,
  },
  {
    title: "Founder Content",
    description:
      "Creating strategic content for LinkedIn or Instagram that reflects your perspective, experience, and expertise.",
    icon: PenSquare,
  },
  {
    title: "Content Refinement & Writing",
    description:
      "Transforming ideas, notes, or existing content into communication that feels intentional, clear, and authentic.",
    icon: BookText,
  },
  {
    title: "Ongoing Brand Direction",
    description:
      "Providing continuous guidance, feedback, and creative support to help your brand stay aligned and consistent over time.",
    icon: Sparkles,
  },
]
