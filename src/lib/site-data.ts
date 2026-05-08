import {
  BarChart3,
  BookText,
  Megaphone,
  PenSquare,
  Sparkles,
  Users,
} from "lucide-react"

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export const services = [
  {
    title: "Personal Branding",
    description: "Build clear founder positioning that makes you the obvious authority in your niche.",
    icon: Sparkles,
  },
  {
    title: "LinkedIn Growth",
    description: "Strategic thought-leadership content that compounds credibility and inbound opportunities.",
    icon: BarChart3,
  },
  {
    title: "Content Creation",
    description: "High-performing multi-platform content calendars tailored to your business goals.",
    icon: Megaphone,
  },
  {
    title: "Ghostwriting",
    description: "Premium founder voice development with conversion-focused storytelling that feels authentic.",
    icon: PenSquare,
  },
  {
    title: "Social Media Management",
    description: "End-to-end execution across LinkedIn, Instagram, X, and TikTok for consistent growth.",
    icon: Users,
  },
  {
    title: "Founder Storytelling",
    description: "Narrative architecture that turns experience into trust, authority, and demand.",
    icon: BookText,
  },
]
