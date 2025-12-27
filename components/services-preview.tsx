import { Globe, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Custom Business Websites",
    description: "Modern, mobile-responsive websites tailored to your brand identity.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Leverage AI-powered tools to automate processes and enhance experiences.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth interactions that keep visitors engaged.",
  },
]

export default function ServicesPreview() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">What We Offer</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-foreground text-balance">
            AI Web Development Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to establish a powerful online presence.
          </p>
        </div>

        {/* Services Grid - Preview (3 only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-card rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-navy flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-foreground mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button asChild className="bg-navy hover:bg-navy-light text-primary-foreground px-8">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
