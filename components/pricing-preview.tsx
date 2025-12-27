import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingTiers = [
  {
    name: "Core",
    originalPrice: 600,
    price: 510,
    description: "For early startups launching their first serious presence.",
    features: [
      "Up to 3 conversion-focused pages",
      "Mobile-first responsive design",
      "SEO foundation",
      "Secure contact form",
      "Analytics & event tracking",
      "1 month support",
    ],
  },
  {
    name: "Growth",
    originalPrice: 1200,
    price: 1020,
    highlighted: true,
    description: "For startups and businesses expecting traction and growth.",
    features: [
      "Up to 8 structured pages",
      "Custom design system",
      "Advanced SEO implementation",
      "Backend integration ready",
      "Performance optimization",
      "3 months support",
    ],
  },
  {
    name: "Scale",
    originalPrice: 2000,
    price: 1700,
    description: "For serious businesses, funded startups, or complex products.",
    features: [
      "Up to 15+ pages",
      "Architecture-first planning",
      "Full backend integration",
      "Authentication & role-based access",
      "Advanced performance optimization",
      "6 months support",
    ],
  },
]

export default function PricingPreview() {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-foreground text-balance">
            Simple, Transparent Pricing
          </h2>
          <div className="mt-6 inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300/50 rounded-lg shadow-sm">
            <p className="text-sm font-bold flex items-center gap-2" style={{ color: "#b8860b" }}>
              <span className="text-amber-500">✨</span> New Year Sale: 15% OFF All Plans Until January 10{" "}
              <span className="text-amber-500">✨</span>
            </p>
          </div>
        </div>

        {/* Pricing Grid - Preview (3 tiers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border transition-all duration-300 relative ${
                tier.highlighted
                  ? "border-gold shadow-xl md:scale-105 bg-card"
                  : "border-border bg-card hover:shadow-md"
              }`}
            >
              <div className="absolute -top-2 -right-2 rotate-6">
                <div
                  className="bg-gradient-to-br from-amber-100 to-yellow-100 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide shadow-lg border border-amber-300/50 flex items-center gap-1"
                  style={{ color: "#b8860b" }}
                >
                  <span className="text-amber-500">✨</span> 15% OFF
                </div>
              </div>

              {tier.highlighted && (
                <div className="px-6 py-3 bg-gradient-to-r from-amber-200 to-yellow-200 text-center border-b border-amber-300/30">
                  <span className="text-sm font-semibold" style={{ color: "#996515" }}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">${tier.price}</span>
                    <span className="text-sm text-muted-foreground line-through">${tier.originalPrice}</span>
                  </div>
                  <p className="mt-2 text-xs font-bold flex items-center gap-1" style={{ color: "#b8860b" }}>
                    <span className="text-amber-500">✨</span> 15% OFF New Year Sale
                  </p>
                </div>

                <Button asChild className="w-full mt-8 bg-navy hover:bg-navy-light text-primary-foreground">
                  <Link href={`/pricing?plan=${tier.name.toLowerCase()}`}>Get Started</Link>
                </Button>

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

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button asChild className="bg-navy hover:bg-navy-light text-primary-foreground px-8">
            <Link href="/pricing">View All Plans</Link>
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            All plans follow our transparent{" "}
            <Link href="/how-we-work#payment" className="text-gold hover:underline font-medium">
              milestone-based payment structure
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
