"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutRenovated() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-32 lg:py-48 bg-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Chapter marker */}
        <div
          className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-xs font-mono text-gold/60 tracking-widest uppercase">/ 02 — The Studio</span>
        </div>

        {/* Main grid - 60% text, 40% visual/motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column - Primary content (60%) */}
          <div className="lg:col-span-7 space-y-12">
            {/* Main statement */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight">
                An Independent
                <br />
                <span className="text-muted-foreground">Engineering Studio</span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
                Webzard Studios is a technical practice focused on performance, reliability, and measurable outcomes. We
                build, optimize, and maintain digital infrastructure for serious businesses.
              </p>
            </div>

            {/* Philosophy points */}
            <div
              className={`pt-12 border-t border-border space-y-8 transition-all duration-1000 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h3 className="text-xs font-mono text-gold/60 tracking-widest uppercase">How We Work</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-gold/40 mt-3 group-hover:w-12 transition-all duration-300" />
                    <div>
                      <h4 className="text-base text-white font-medium mb-2">Direct Communication</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        No account managers. You work directly with the developer building your project.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-gold/40 mt-3 group-hover:w-12 transition-all duration-300" />
                    <div>
                      <h4 className="text-base text-white font-medium mb-2">Transparent Systems</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Clear pricing. Milestone payments. No hidden costs or long-term contracts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-gold/40 mt-3 group-hover:w-12 transition-all duration-300" />
                    <div>
                      <h4 className="text-base text-white font-medium mb-2">Engineering First</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We prioritize performance and maintainability over trends or temporary fixes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-gold/40 mt-3 group-hover:w-12 transition-all duration-300" />
                    <div>
                      <h4 className="text-base text-white font-medium mb-2">Remote Global</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Working with clients worldwide. Clear communication across time zones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Vision & Principles (40%) */}
          <div
            className={`lg:col-span-5 space-y-8 transition-all duration-1000 delay-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Vision card */}
            <div className="p-8 bg-card border border-border">
              <span className="text-xs font-mono text-gold/60 tracking-widest uppercase">Vision</span>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                To build digital infrastructure that lasts—websites and systems that remain fast, secure, and functional
                years after launch.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-gold/60 tracking-widest uppercase">Core Principles</span>

              <div className="space-y-3">
                <div className="p-5 bg-card border-l-2 border-gold/30 hover:border-gold/60 transition-colors">
                  <h4 className="text-sm text-white font-medium">Performance Over Decoration</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Every animation is intentional. Every interaction has purpose.
                  </p>
                </div>

                <div className="p-5 bg-card border-l-2 border-gold/30 hover:border-gold/60 transition-colors">
                  <h4 className="text-sm text-white font-medium">Clarity Over Complexity</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Solutions should be understandable, maintainable, documented.
                  </p>
                </div>

                <div className="p-5 bg-card border-l-2 border-gold/30 hover:border-gold/60 transition-colors">
                  <h4 className="text-sm text-white font-medium">Outcomes Over Optics</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    We measure success by speed, conversions, and stability—not awards.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-light text-white">16+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white">38%</div>
                <div className="text-xs text-muted-foreground mt-1">Avg Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white">14</div>
                <div className="text-xs text-muted-foreground mt-1">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
