import { About } from "@/sections/About"
import { FAQ } from "@/sections/FAQ"
import { FinalCTA } from "@/sections/FinalCTA"
import { Footer } from "@/sections/Footer"
import { Hero } from "@/sections/Hero"
import { Navbar } from "@/sections/Navbar"
import { Pricing } from "@/sections/Pricing"
import { Process } from "@/sections/Process"
import { Results } from "@/sections/Results"
import { Services } from "@/sections/Services"
import { SocialProof } from "@/sections/SocialProof"

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Results />
        <Process />
        <About />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
