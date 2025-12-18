import { Shield, Clock, MessageCircle, Zap, HeartHandshake, Cpu } from "lucide-react"

const trustPoints = [
  {
    icon: Shield,
    title: "Transparent One-Time Pricing",
    description: "No hidden fees, no recurring charges. What you see is what you pay.",
  },
  {
    icon: HeartHandshake,
    title: "No Long-Term Contracts",
    description: "Flexible engagement with no binding commitments.",
  },
  {
    icon: MessageCircle,
    title: "Direct Developer Communication",
    description: "Work directly with the person building your website.",
  },
  {
    icon: Clock,
    title: "Fast Delivery (5–14 Days)",
    description: "Get your website live quickly without compromising quality.",
  },
  {
    icon: Zap,
    title: "Post-Launch Support Included",
    description: "We don't disappear after delivery. Support is part of the deal.",
  },
  {
    icon: Cpu,
    title: "AI-First Modern Development",
    description: "We leverage the latest AI tools to build smarter, faster.",
  },
]

export default function WhyTrust() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extralight tracking-tight text-foreground text-balance">
            Why Trust Webzard Studios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                <point.icon className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{point.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
