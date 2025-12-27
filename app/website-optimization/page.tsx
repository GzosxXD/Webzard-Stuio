import { Zap, TrendingUp, BarChart3, ShieldCheck, Smartphone, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"

const optimizationBenefits = [
  {
    icon: Zap,
    title: "Faster Results",
    description:
      "Optimize before rebuilding. Get 40-70% faster load times with targeted improvements to existing infrastructure.",
    improvements: ["90+ Lighthouse score", "Sub-2 second load times", "Core Web Vitals optimization"],
  },
  {
    icon: TrendingUp,
    title: "Lower Cost",
    description:
      "Fix performance issues at a fraction of a full rebuild cost. Maximize ROI with surgical improvements.",
    improvements: ["50-70% less expensive than rebuild", "Quick payoff period", "Incremental improvements"],
  },
  {
    icon: BarChart3,
    title: "Preserve What Works",
    description: "Keep your existing content, SEO rankings, and user trust while improving what needs work.",
    improvements: ["Maintain search rankings", "Preserve brand continuity", "Save historical data"],
  },
  {
    icon: ShieldCheck,
    title: "Test Before Rebuilding",
    description: "Use optimization metrics to guide rebuild decisions. Know exactly what works before major changes.",
    improvements: ["Data-driven decisions", "Reduced rebuild risk", "Clear roadmap"],
  },
]

const optimizationServices = [
  {
    title: "Performance Audit",
    description: "Comprehensive analysis of load time, Core Web Vitals, and user experience.",
    deliverables: [
      "Detailed performance report",
      "Waterfall analysis",
      "Recommendations prioritized by impact",
      "Competitor benchmarking",
    ],
  },
  {
    title: "Speed Optimization",
    description: "Targeted improvements for faster load times and better user experience.",
    deliverables: [
      "Image optimization & compression",
      "Code splitting & minification",
      "Caching strategies",
      "CDN implementation",
    ],
  },
  {
    title: "SEO Optimization",
    description: "Improve search rankings without losing existing equity.",
    deliverables: [
      "Technical SEO audit",
      "Meta tag optimization",
      "Schema markup implementation",
      "XML sitemap generation",
    ],
  },
  {
    title: "Security Audit",
    description: "Identify and fix security vulnerabilities.",
    deliverables: [
      "Vulnerability scanning",
      "SSL/TLS verification",
      "Dependency security check",
      "Security recommendations",
    ],
  },
]

export default function WebsiteOptimizationPage() {
  return (
    <>
      <div className="pt-20 pb-16 sm:pb-24 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">Optimization</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-foreground text-balance">
              Optimize Before You Rebuild
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't replace what works. Fix what doesn't. Get faster, better results at a fraction of the cost.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-24">
            {optimizationBenefits.map((benefit, index) => (
              <div key={index} className="p-8 sm:p-10 bg-card rounded-2xl border border-border">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">{benefit.title}</h2>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">{benefit.description}</p>

                <ul className="space-y-2">
                  {benefit.improvements.map((improvement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-center mb-12">
              Our Optimization Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {optimizationServices.map((service, index) => (
                <div key={index} className="p-8 bg-secondary/30 rounded-2xl border border-border">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Smartphone className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                        <span className="text-sm text-foreground">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Comparison */}
          <div className="mb-24 p-8 sm:p-12 bg-secondary/30 rounded-2xl border border-border">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
              Optimization vs. Rebuild
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Website Optimization</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Cost: $200-500</p>
                      <p className="text-xs text-muted-foreground">One-time investment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Timeline: 1-2 weeks</p>
                      <p className="text-xs text-muted-foreground">Fast results</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Results: 30-50% improvement</p>
                      <p className="text-xs text-muted-foreground">Immediate impact</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Full Fledged Rebuild</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Cost: $2,000-5,000+</p>
                      <p className="text-xs text-muted-foreground">Significant investment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Timeline: 2-3 weeks</p>
                      <p className="text-xs text-muted-foreground">Longer wait time</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Results: 50-80% improvement</p>
                      <p className="text-xs text-muted-foreground">Delayed impact</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-center mb-12">
              The Optimization Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: "1",
                  title: "Audit",
                  desc: "Comprehensive performance analysis",
                },
                {
                  step: "2",
                  title: "Plan",
                  desc: "Prioritized improvement roadmap",
                },
                {
                  step: "3",
                  title: "Implement",
                  desc: "Execute improvements systematically",
                },
                {
                  step: "4",
                  title: "Verify",
                  desc: "Measure results and impact",
                },
              ].map((item, index) => (
                <div key={index} className="p-6 sm:p-8 bg-card rounded-2xl border border-border text-center">
                  <div className="text-3xl font-bold text-gold mb-3">{item.step}</div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild className="bg-navy hover:bg-navy-light text-primary-foreground px-8 py-6 text-base">
              <Link href="/contact">Audit My Website</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
