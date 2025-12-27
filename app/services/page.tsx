import type { Metadata } from "next"
import { Globe, Sparkles, Zap, Shield, BarChart3, Headphones } from "lucide-react"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Services | Webzard Studios",
  description:
    "Explore our comprehensive AI web development services including custom websites, optimization, and AI integration.",
}

const services = [
  {
    icon: Globe,
    title: "Custom Business Websites",
    description: "Modern, mobile-responsive websites tailored to your brand identity and business goals.",
    details: [
      "Brand-aligned design systems",
      "Mobile-first responsive layouts",
      "Fast load times and smooth interactions",
      "SEO-optimized structure",
      "Scalable codebase",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Leverage AI-powered tools to automate processes and enhance user experiences.",
    details: [
      "Chatbot integration",
      "Content generation tools",
      "Personalization engines",
      "Predictive analytics",
      "Automated workflows",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth interactions that keep visitors engaged.",
    details: [
      "Core Web Vitals optimization",
      "Image compression and CDN",
      "Code splitting and lazy loading",
      "Database optimization",
      "Caching strategies",
    ],
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Robust security measures and ongoing maintenance to protect your digital assets.",
    details: [
      "SSL/TLS encryption",
      "Regular security audits",
      "Backup and disaster recovery",
      "Dependency updates",
      "Proactive monitoring",
    ],
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics",
    description: "Data-driven strategies to improve search rankings and track your business growth.",
    details: [
      "Technical SEO audit",
      "Keyword research and optimization",
      "Analytics setup and reporting",
      "Conversion tracking",
      "Performance benchmarking",
    ],
  },
  {
    icon: Headphones,
    title: "Direct Support",
    description: "Communicate directly with the developer. No account managers, no waiting.",
    details: [
      "Direct email and phone support",
      "Priority response times",
      "Regular strategy calls",
      "Quarterly reviews",
      "Dedicated developer access",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20 pb-16 sm:pb-24 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">What We Offer</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-foreground text-balance">
              AI Web Development Services
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to establish a powerful online presence and grow your business with AI-powered
              solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {services.map((service, index) => (
              <div key={index} className="p-8 sm:p-10 bg-card rounded-2xl border border-border">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">{service.title}</h2>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
