import Hero from "@/components/hero"
import Services from "@/components/services-preview"
import Process from "@/components/process-preview"
import Portfolio from "@/components/portfolio-preview"
import Testimonials from "@/components/testimonials-preview"
import CredibilityCounters from "@/components/credibility-counters"
import Pricing from "@/components/pricing-preview"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <CredibilityCounters />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
