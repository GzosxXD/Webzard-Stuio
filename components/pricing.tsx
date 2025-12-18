import { Check, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$200",
    description: "Perfect for small businesses just getting started online.",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 revision round",
    ],
    popular: false,
  },
  {
    name: "Essential",
    price: "$400",
    description: "Great for businesses ready to establish their online presence.",
    features: [
      "Up to 3 pages",
      "Mobile responsive design",
      "SEO optimization",
      "Social media integration",
      "2 revision rounds",
      "Google Analytics setup",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$500",
    description: "Ideal for growing businesses that need more features.",
    features: [
      "Up to 5 pages",
      "Custom design",
      "Advanced SEO",
      "Blog setup",
      "3 revision rounds",
      "Speed optimization",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "$800",
    description: "For established businesses seeking comprehensive solutions.",
    features: [
      "Up to 8 pages",
      "Premium design",
      "E-commerce ready",
      "AI chatbot integration",
      "Priority support",
      "Monthly analytics report",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$1,000",
    description: "Advanced features for businesses with complex needs.",
    features: [
      "Up to 12 pages",
      "Custom animations",
      "Full e-commerce setup",
      "CRM integration",
      "Unlimited revisions",
      "6 months support",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "$1,500",
    description: "Complete digital transformation for ambitious businesses.",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Advanced AI features",
      "Multi-language support",
      "Dedicated account manager",
      "12 months support",
    ],
    popular: false,
  },
  {
    name: "Custom",
    price: "Contact Us",
    description: "Tailored solutions for unique enterprise requirements.",
    features: [
      "Custom scope",
      "Enterprise integrations",
      "Dedicated team",
      "SLA guarantee",
      "On-demand development",
      "White-glove service",
    ],
    popular: false,
  },
]

const paymentMilestones = [
  {
    percentage: "30%",
    title: "Advance Payment",
    description: "To initiate the project and reserve the development slot.",
  },
  {
    percentage: "80%",
    title: "After Demo Review",
    description: "Paid once the working demo is shown and approved.",
  },
  {
    percentage: "100%",
    title: "Final Payment on Delivery",
    description: "Paid when the complete website is delivered and handed over.",
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
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <span className="text-2xl sm:text-3xl font-light text-foreground">{plan.price}</span>
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

        <div className="mt-12 sm:mt-20">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extralight tracking-tight text-foreground">
              Simple & Transparent Payment Structure
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              We follow milestone-based payments so you only pay as progress is delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {paymentMilestones.map((milestone, index) => (
              <div
                key={index}
                className="relative p-5 sm:p-6 rounded-xl bg-secondary/50 border border-border text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-navy flex items-center justify-center">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <span className="block mt-3 sm:mt-4 text-2xl sm:text-3xl font-light text-gold">
                  {milestone.percentage}
                </span>
                <h4 className="mt-2 text-sm sm:text-base font-medium text-foreground">{milestone.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-secondary border border-border">
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.37 3.477a.64.64 0 0 1 .633-.538h7.397c2.093 0 3.655.523 4.642 1.554.97 1.013 1.33 2.447.96 4.264-.032.156-.068.31-.109.459l-.007.03c-.03.11-.063.224-.1.336-.015.042-.03.086-.045.128a7.37 7.37 0 0 1-.141.361l-.047.111a6.03 6.03 0 0 1-.196.408l-.002.004a5.78 5.78 0 0 1-.262.434l-.053.08a5.236 5.236 0 0 1-.312.415l-.018.022a4.87 4.87 0 0 1-.362.395l-.082.079a4.56 4.56 0 0 1-.37.31l-.113.086a4.96 4.96 0 0 1-.447.289 5.64 5.64 0 0 1-.535.276l-.147.063c-.18.076-.37.143-.565.203l-.152.046a6.59 6.59 0 0 1-.67.156l-.078.013c-.218.04-.445.07-.68.091l-.126.01a8.31 8.31 0 0 1-.654.032H9.28l-.433 2.749-.003.016a.64.64 0 0 1-.633.54H7.076zm8.73-14.56c-.002.017-.005.033-.007.05l-.006.045c-.27 1.745-1.196 2.349-2.754 2.349h-.698a.32.32 0 0 0-.316.27l-.534 3.389-.151.959a.168.168 0 0 0 .166.194h1.918a.32.32 0 0 0 .316-.27l.13-.827.034-.218.266-1.689a.32.32 0 0 1 .316-.27h.199c1.29 0 2.3-.524 2.596-2.041.124-.634.06-1.163-.27-1.536a1.47 1.47 0 0 0-.455-.326 2.5 2.5 0 0 0-.604-.174 4.63 4.63 0 0 0-.146.095z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">Secure payments via PayPal</span>
          </div>
        </div>
      </div>
    </section>
  )
}
