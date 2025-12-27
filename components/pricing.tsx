import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    originalPrice: "$200",
    discountedPrice: "$170",
    description: "Perfect for small businesses just getting started online.",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 revision round",
      "1 month support",
    ],
    popular: false,
    discount: true,
  },
  {
    name: "Essential",
    originalPrice: "$400",
    discountedPrice: "$340",
    description: "Great for businesses ready to establish their online presence.",
    features: [
      "Up to 3 pages",
      "Mobile responsive design",
      "SEO optimization",
      "Social media integration",
      "2 revision rounds",
      "Google Analytics setup",
      "2 months support",
    ],
    popular: false,
    discount: true,
  },
  {
    name: "Professional",
    originalPrice: "$500",
    discountedPrice: "$425",
    description: "Ideal for growing businesses that need more features.",
    features: [
      "Up to 5 pages",
      "Custom design",
      "Advanced SEO",
      "Blog setup",
      "3 revision rounds",
      "Speed optimization",
      "3 months support",
      "10-Day Money-Back Guarantee",
    ],
    popular: true,
    discount: true,
  },
  {
    name: "Business",
    originalPrice: "$800",
    discountedPrice: "$680",
    description: "For established businesses seeking comprehensive solutions.",
    features: [
      "Up to 8 pages",
      "Premium design",
      "E-commerce ready",
      "AI chatbot integration",
      "Priority support",
      "Monthly analytics report",
      "4 months support",
    ],
    popular: false,
    discount: true,
  },
  {
    name: "Advanced",
    originalPrice: "$1,200",
    discountedPrice: "$1,020",
    description: "Complete solution for businesses with advanced requirements.",
    features: [
      "Up to 12 pages",
      "Custom animations",
      "Full e-commerce setup",
      "CRM integration",
      "Advanced AI features",
      "Unlimited revisions",
      "6 months support",
      "Priority development queue",
    ],
    popular: false,
    discount: true,
  },
  {
    name: "Premium",
    originalPrice: "$2,000",
    discountedPrice: "$1,700",
    description: "Enterprise-grade solution for ambitious businesses.",
    features: [
      "Up to 20 pages",
      "Custom functionality",
      "Multi-language support",
      "Advanced integrations",
      "Dedicated account manager",
      "White-label options",
      "12 months support",
      "SLA guarantee",
    ],
    popular: false,
    discount: true,
  },
  {
    name: "Enterprise",
    originalPrice: "$3,000+",
    discountedPrice: "$2,550+",
    description: "Complete digital transformation for large organizations.",
    features: [
      "Unlimited pages",
      "Custom platform development",
      "Enterprise AI solutions",
      "Dedicated development team",
      "24/7 priority support",
      "On-demand development",
      "Lifetime support options",
      "White-glove service",
    ],
    popular: false,
    discount: true,
  },
  {
    name: "Custom",
    price: "Contact Us",
    description: "Tailored solutions for unique enterprise requirements.",
    features: [
      "Custom scope & timeline",
      "Full-stack development",
      "System architecture design",
      "API & backend development",
      "Database optimization",
      "Security audits",
      "Flexible payment terms",
      "Ongoing partnership",
    ],
    popular: false,
    discount: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-foreground text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-2 text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time payment. No subscriptions. No hidden fees. Just high-quality websites delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-5 sm:p-6 rounded-2xl border ${
                plan.popular
                  ? "border-gold bg-gradient-to-b from-gold/5 to-transparent shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {plan.discount && (
                <div className="absolute -top-2 -right-2 rotate-6">
                  <div className="bg-gradient-to-br from-red-600 to-green-700 text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide shadow-lg border-2 border-gold/40 flex items-center gap-1">
                    <span>🎄</span> 15% OFF
                  </div>
                </div>
              )}

              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium bg-gold text-accent-foreground rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
                <div className="mt-2">
                  {plan.discount ? (
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xl sm:text-2xl font-light text-muted-foreground line-through decoration-2">
                        {plan.originalPrice}
                      </span>
                      <span className="text-2xl sm:text-3xl font-light text-gold">{plan.discountedPrice}</span>
                    </div>
                  ) : (
                    <span className="text-2xl sm:text-3xl font-light text-foreground">{plan.price}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-navy hover:bg-navy-light text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-secondary border border-border">
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.37 3.477a.64.64 0 0 1 .633-.538h7.397c2.093 0 3.655.523 4.642 1.554.97 1.013 1.33 2.447.96 4.264-.032.156-.068.31-.109.459l-.007.03c-.03.11-.063.224-.1.336-.015.042-.03.086-.045.128a7.37 7.37 0 0 1-.141.361l-.047.111a6.03 6.03 0 0 1-.196.408l-.002.004a5.78 5.78 0 0 1-.262.434l-.053.08a5.236 5.236 0 0 1-.312.415l-.018.022a4.87 4.87 0 0 1-.362.395l-.082.079a4.56 4.56 0 0 1-.37.31l-.113.086a4.96 4.96 0 0 1-.447.289 5.64 5.64 0 0 1-.535.276l-.147.063c-.18.076-.37.143-.565.203l-.152.046a6.59 6.59 0 0 1-.67.156l-.078.013c-.218.04-.445.07-.68.091l-.126.01a8.31 8.31 0 0 1-.654.032H9.28l-.433 2.749-.003.016a.64.64 0 0 1-.633.54H7.076zm8.73-14.56c-.002.017-.005.033-.007.05l-.006.045c-.27 1.745-1.196 2.349-2.754 2.349h-.698a.32.32 0 0 0-.316.27l-.534 3.389-.151.959a.168.168 0 0 0 .166.194h1.918a.32.32 0 0 0 .316-.27l.13-.827.034-.218.266-1.689a.32.32 0 0 1 .316-.27h.199c1.29 0 2.3-.524 2.596-2.041.124-.634.06-1.163-.27-1.536a1.47 1.47 0 0 0-.455-.326 2.5 2.5 0 0 0-.604-.174 4.63 4.63 0 0 0-.146.095z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">Secure payments via PayPal</span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">10-Day Money-Back Guarantee on all packages</p>
        </div>
      </div>
    </section>
  )
}
