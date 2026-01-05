"use client"

import { useEffect, useRef, useState } from "react"

const capabilities = [
  {
    number: "01",
    title: "Experience & Interface",
    description:
      "Custom-built websites with intentional motion, optimized layouts, and conversion-focused experiences. No templates.",
    details: ["Custom UI/UX", "Motion interfaces", "Mobile-first", "Conversion optimization"],
  },
  {
    number: "02",
    title: "Engineering & Performance",
    description:
      "Frontend and backend optimization for speed, stability, and scalability. We fix slow sites and engineer for longevity.",
    details: ["Performance audits", "Code optimization", "Infrastructure tuning", "Lighthouse 90+"],
  },
  {
    number: "03",
    title: "AI & Systems",
    description:
      "Strategic AI implementation—chatbots, automation, content generation—integrated thoughtfully without adding bloat.",
    details: ["AI chatbots", "Workflow automation", "Smart content", "Data insights"],
  },
  {
    number: "04",
    title: "Motion & Interaction",
    description:
      "Cinematic motion design and scroll-driven storytelling. Every animation serves a purpose: guiding attention, signaling progress.",
    details: ["Scroll animations", "Momentum scrolling", "Interactive experiences", "Cinematic transitions"],
  },
  {
    number: "05",
    title: "Long-term Partnership",
    description:
      "Ongoing maintenance, security updates, and technical support. We stay available to ensure your site remains fast and functional.",
    details: ["Security monitoring", "Performance maintenance", "Content updates", "Technical support"],
  },
]

export default function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="capabilities" ref={sectionRef} className="py-32 lg:py-48 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Chapter marker */}
        <div
          className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-xs font-mono text-gold/60 tracking-widest uppercase">/ 03 — Capabilities</span>
        </div>

        {/* Header */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight">
            What We Build
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Five core pillars defining how we approach every project—from concept to long-term maintenance.
          </p>
        </div>

        {/* Capabilities list */}
        <div className="space-y-0 border-t border-border">
          {capabilities.map((cap, index) => (
            <div
              key={cap.number}
              className={`group py-10 border-b border-border transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-xs font-mono text-gold/40">{cap.number}</span>
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <h3 className="text-xl text-white font-light group-hover:text-gold transition-colors duration-300">
                    {cap.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>

                {/* Details */}
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    {cap.details.map((detail, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-secondary border border-border text-muted-foreground"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
