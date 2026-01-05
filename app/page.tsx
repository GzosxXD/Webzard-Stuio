import Hero from "@/components/hero"
import AboutRenovated from "@/components/about-renovated"
import Capabilities from "@/components/capabilities"
import Process from "@/components/process-preview"
import Portfolio from "@/components/portfolio-preview"
import Testimonials from "@/components/testimonials-preview"
import CredibilityCounters from "@/components/credibility-counters"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutRenovated />
      <Capabilities />
      <Portfolio />
      <Process />
      <Testimonials />
      <CredibilityCounters />
      <Contact />
      <Footer />
    </main>
  )
}
