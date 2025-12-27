import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"

const pricingTiers = [
  {
    name: "Core",
    originalPrice: 600,
    price: 510,
    description: "For early startups launching their first serious presence.",
    features: [
      "Up to 3 conversion-focused pages",
      "Home, About or Services, Contact / Lead Capture",
      "Mobile-first responsive design",
      "Clear value proposition & CTA hierarchy",
      "SEO foundation (structure, metadata, indexing readiness)",
      "Secure contact form with email routing",
      "Performance optimization (core web vitals baseline)",
      "Analytics & basic event tracking",
      "Scalable, clean architecture (not a throwaway build)",
      "1 revision round",
      "1 month support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    originalPrice: 1200,
    price: 1020,
    highlighted: true,
    description: "For startups and businesses expecting traction and growth.",
    features: [
      "Up to 8 structured pages",
      "Home, 2-3 Service pages, About, Contact, Utility pages (Privacy / Terms)",
      "Custom design system (scales cleanly)",
      "Advanced SEO implementation & internal structure",
      "Backend integration (forms, APIs, or database-ready setup)",
      "Performance optimization & caching",
      "Security best practices",
      "Analytics, tracking & funnel visibility",
      "Built to scale to 12-15 pages without rebuild",
      "Future-proof architecture for growth",
      "3 revision rounds",
      "3 months support",
    ],
    cta: "Get Started",
  },
  {
    name: "Scale",
    originalPrice: 2000,
    price: 1700,
    description: "For serious businesses, funded startups, or complex products.",
    features: [
      "Up to 15+ pages (structured, not filler)",
      "Architecture-first planning before development",
      "Advanced custom design system",
      "Full backend integration (APIs, databases, workflows)",
      "Authentication & role-based access (if required)",
      "Advanced performance optimization & stability tuning",
      "Enhanced security hardening",
      "Analytics, events & growth-ready tracking",
      "Built for long-term expansion without refactor",
      "5 revision rounds",
      "6 months support",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: null,
    highlighted: false,
    description: "For platforms, products, and businesses with complex requirements.",
    features: [
      "Custom scope, timeline & milestones",
      "Architecture-first system design",
      "Full-stack development (frontend + backend)",
      "Custom APIs & backend services",
      "Database design, optimization & data modeling",
      "Authentication, permissions & access control",
      "Third-party integrations (payments, tools, CRMs, etc.)",
      "Security audits, hardening & compliance considerations",
      "Performance, load testing & scalability planning",
      "Dedicated support & priority communication",
      "Long-term technical partnership",
    ],
    cta: "Contact Us",
  },
]

export default function PricingPage() {
  return (
    <>
      <div className="pt-20 pb-16 sm:pb-24 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">Pricing</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-foreground text-balance">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our 10-day money-back guarantee.
            </p>
            <div className="mt-6 inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300/50 rounded-lg shadow-sm">
              <p className="text-sm font-bold flex items-center gap-2" style={{ color: "#b8860b" }}>
                <span className="text-amber-500">✨</span> New Year Sale: 15% OFF All Plans Until January 10{" "}
                <span className="text-amber-500">✨</span>
              </p>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden relative ${
                  tier.highlighted
                    ? "border-gold shadow-2xl md:lg:scale-105 bg-card ring-2 ring-gold/20"
                    : "border-border bg-card hover:shadow-lg hover:border-gold/30"
                }`}
              >
                {tier.price && (
                  <div className="absolute -top-2 -right-2 rotate-6">
                    <div
                      className="bg-gradient-to-br from-amber-100 to-yellow-100 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide shadow-lg border border-amber-300/50 flex items-center gap-1"
                      style={{ color: "#b8860b" }}
                    >
                      <span className="text-amber-500">✨</span> 15% OFF
                    </div>
                  </div>
                )}

                {tier.highlighted && (
                  <div className="px-6 py-3 bg-gradient-to-r from-amber-200 to-yellow-200 text-center border-b border-amber-300/30">
                    <span className="text-sm font-semibold" style={{ color: "#996515" }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

                  {/* Pricing */}
                  <div className="mt-6">
                    {tier.price ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl sm:text-5xl font-bold text-foreground">${tier.price}</span>
                          <span className="text-sm text-muted-foreground line-through">${tier.originalPrice}</span>
                        </div>
                        <p className="mt-2 text-xs font-bold flex items-center gap-1" style={{ color: "#b8860b" }}>
                          <span className="text-amber-500">✨</span> 15% OFF New Year Sale
                        </p>
                      </>
                    ) : (
                      <div className="text-4xl sm:text-5xl font-bold text-foreground">Custom</div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full mt-8 ${
                      tier.highlighted
                        ? "bg-gold hover:bg-gold/90 text-foreground"
                        : "bg-navy hover:bg-navy-light text-primary-foreground"
                    }`}
                  >
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>

                  {/* Features */}
                  <ul className="mt-8 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 sm:p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Can I upgrade or downgrade anytime?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan anytime. We'll adjust the pricing accordingly.
                </p>
              </div>
              <div className="p-6 sm:p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">What's included in the updates?</h3>
                <p className="text-sm text-muted-foreground">
                  Minor bug fixes, security patches, and performance improvements. Major features require additional
                  investment.
                </p>
              </div>
              <div className="p-6 sm:p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Is the money-back guarantee really 10 days?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes, if you're not satisfied with our work within 10 days, we refund 100% of your payment.
                </p>
              </div>
              <div className="p-6 sm:p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Do you offer custom pricing?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely. For projects outside these tiers, let's discuss your specific needs and create a custom
                  package.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
