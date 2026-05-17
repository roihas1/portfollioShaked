import { About } from "@/sections/About"
import { FAQ } from "@/sections/FAQ"
import { FinalCTA } from "@/sections/FinalCTA"
import { Footer } from "@/sections/Footer"
import { Hero } from "@/sections/Hero"
import { Navbar } from "@/sections/Navbar"
import { Pricing } from "@/sections/Pricing"
import { Results } from "@/sections/Results"
import { Services } from "@/sections/Services"
import { SocialProof } from "@/sections/SocialProof"

/** Toggle to show impressions, testimonials, and case studies again */
const SHOW_MARKETING_PROOF_SECTIONS = false

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        {SHOW_MARKETING_PROOF_SECTIONS ? <SocialProof /> : null}
        <About />
        <Services />
        {SHOW_MARKETING_PROOF_SECTIONS ? <Results /> : null}
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
