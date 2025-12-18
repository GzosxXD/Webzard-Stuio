import { User, Globe, MessageCircle, Code } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: User,
      title: "Founder-Led Studio",
      description: "You work directly with the developer. No account managers, no middlemen.",
    },
    {
      icon: Globe,
      title: "Remote-First",
      description: "We work remotely with clients globally. Clear communication across time zones.",
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Transparent updates, honest timelines, and straightforward conversations.",
    },
    {
      icon: Code,
      title: "Modern Stack",
      description: "Clean code, performance-first mindset, and long-term maintainability.",
    },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">About Us</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extralight tracking-tight text-foreground text-balance">
            Who We Are
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Webzard Studios is a remote, independent AI-focused web development studio. We build modern, AI-powered
              websites for businesses that want clarity and results—not generic templates or bloated solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in custom business websites, AI integration, and performance-focused development. Every
              project starts with understanding your goals and ends with a website that works for your business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach is simple: transparent pricing, direct developer communication, and no long-term contracts.
              We believe good work speaks for itself.
            </p>

            {/* Trust Signals */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Transparent pricing with milestone-based payments</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Remote-first studio—no fake addresses</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Direct developer communication on every project</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>No long-term contracts or hidden fees</span>
              </div>
            </div>
          </div>

          {/* Right Column - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
