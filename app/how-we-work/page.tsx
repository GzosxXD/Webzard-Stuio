import type { Metadata } from "next"
import { Search, PenTool, RefreshCw, Rocket, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "How We Work | Webzard Studios",
  description: "Learn about our transparent 4-step process for building your website.",
}

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business, goals, target audience, and requirements.",
    details: [
      "Detailed discovery calls",
      "Competitive analysis",
      "Requirements documentation",
      "Project scope definition",
      "Timeline and budget planning",
    ],
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Development",
    description: "We create and build your website with regular progress updates and transparency.",
    details: [
      "Wireframe design",
      "Visual mockups",
      "Responsive development",
      "AI integration setup",
      "Weekly progress updates",
    ],
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Review & Revisions",
    description: "You review the demo and we implement your feedback with unlimited revisions.",
    details: [
      "Live demo presentation",
      "Unlimited revision rounds",
      "Feedback incorporation",
      "Performance testing",
      "QA and bug fixing",
    ],
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "We deploy your site and provide ongoing support to ensure continued success.",
    details: [
      "Production deployment",
      "DNS and domain setup",
      "Launch coordination",
      "Post-launch monitoring",
      "Ongoing support and updates",
    ],
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      <div className="pt-20 pb-16 sm:pb-24 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">Our Process</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-foreground text-balance">
              How We Work
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A transparent, collaborative process designed to deliver exceptional results on time and on budget.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="p-8 sm:p-10 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-extralight text-gold/20">{step.step}</span>
                    <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center -mt-14">
                      <step.icon className="w-6 h-6 text-navy" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">{step.title}</h2>
                  </div>
                </div>

                <p className="text-base text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                <div className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Communication & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-secondary/30 rounded-2xl border border-border text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Regular Communication</h3>
              <p className="text-sm text-muted-foreground">
                Weekly updates, direct developer access, and transparent progress tracking throughout the project.
              </p>
            </div>
            <div className="p-8 bg-secondary/30 rounded-2xl border border-border text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Typical Timeline</h3>
              <p className="text-sm text-muted-foreground">
                Most projects complete in 4-8 weeks depending on complexity and scope. Rush options available.
              </p>
            </div>
            <div className="p-8 bg-secondary/30 rounded-2xl border border-border text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Unlimited Revisions</h3>
              <p className="text-sm text-muted-foreground">
                No surprise costs. Feedback-driven development ensures your vision is realized exactly as intended.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild className="bg-navy hover:bg-navy-light text-primary-foreground px-8 py-6 text-base">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
