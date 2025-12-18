import { Search, PenTool, RefreshCw, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Planning",
    description: "We discuss your goals, audience, and requirements.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Development",
    description: "We build your website with regular progress updates.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Review & Revisions",
    description: "You review the demo and request any changes.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "We deploy your site and provide ongoing support.",
  },
]

export default function Process() {
  return (
    <section className="py-20 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">How We Work</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extralight tracking-tight text-foreground text-balance">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 rounded-xl bg-card border border-border text-center">
              <span className="text-4xl font-extralight text-gold/30">{step.step}</span>
              <div className="w-12 h-12 mx-auto mt-2 rounded-full bg-navy/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="mt-4 font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
