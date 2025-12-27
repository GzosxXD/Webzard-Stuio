import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import WhyTrust from "@/components/why-trust"
import Process from "@/components/process"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import CredibilityCounters from "@/components/credibility-counters"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ContactBar from "@/components/contact-bar"
import ChristmasBanner from "@/components/christmas-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ContactBar />
      <ChristmasBanner />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CredibilityCounters />
      <WhyTrust />
      <Process />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
