import { Search, PenTool, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Planning",
    description: "We discuss your goals and requirements.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Development",
    description: "We build your website with regular updates.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Review & Revisions",
    description: "You review and request any changes.",
  },
]

export default function ProcessPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">How We Work</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-foreground text-balance">
            Our Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent workflow designed for your success.
          </p>
        </div>

        {/* Process Grid - Preview (3 steps) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 sm:p-8 rounded-2xl bg-card border border-border text-center">
              <span className="text-3xl sm:text-4xl font-extralight text-gold/30">{step.step}</span>
              <div className="w-12 h-12 mx-auto mt-2 rounded-full bg-navy/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="mt-4 font-medium text-foreground text-balance">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button asChild className="bg-navy hover:bg-navy-light text-primary-foreground px-8">
            <Link href="/how-we-work">View Full Process</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
