"use client"

import { Search, PenTool, RefreshCw, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Alignment",
    description:
      "We map your business constraints, technical requirements, and success metrics before writing a single line of code.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Engineering & Build",
    description: "Systematic development with milestone-based progress tracking. You see the work as it evolves.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Review & Refinement",
    description:
      "Structured feedback loops. We iterate on functionality, performance, and user experience until it's right.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy & Support",
    description: "Launch with proper monitoring, documentation, and ongoing maintenance to ensure long-term stability.",
  },
]

export default function ProcessPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-32 lg:py-40 bg-secondary/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-background/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`mb-20 ${isVisible ? "animate-stagger-1" : "opacity-0"}`}>
          <span className="text-xs font-medium text-gold uppercase tracking-[0.2em]">How We Build</span>
          <h2 className="mt-6 text-5xl md:text-6xl font-extralight tracking-tight text-foreground leading-tight">
            Process & Methodology
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A systematic approach to every project—from discovery to long-term maintenance.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className={`relative group ${isVisible ? `animate-stagger-${index + 2}` : "opacity-0"}`}>
              {/* Connecting line (hidden on mobile, shown on lg+) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[calc(100%+1rem)] w-8 h-[2px] bg-border" />
              )}

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl font-extralight text-gold/40 group-hover:text-gold transition-colors duration-300">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center group-hover:bg-navy group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-navy group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-navy hover:bg-navy-light text-primary-foreground px-8 py-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/how-we-work">Deep Dive: Full Process</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
