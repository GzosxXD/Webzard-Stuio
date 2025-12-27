"use client"

import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Founder, SaaS Startup",
    initial: "A",
    rating: 5,
    quote:
      "The AI integration has been transformative. Clean code, clear communication, and delivered ahead of schedule.",
  },
  {
    name: "CEO, E-commerce Brand",
    initial: "M",
    rating: 5,
    quote:
      "Conversion rate increased significantly after the redesign. Professional team that truly understands business.",
  },
  {
    name: "Owner, Digital Agency",
    initial: "S",
    rating: 5,
    quote: "Best development partner we've worked with. Transparent pricing and no surprises. Highly recommend.",
  },
  {
    name: "Director, Healthcare Tech",
    initial: "R",
    rating: 5,
    quote: "Security and compliance were handled expertly. The team's attention to detail is outstanding.",
  },
  {
    name: "Founder, Fintech Startup",
    initial: "J",
    rating: 5,
    quote: "Fast turnaround without compromising quality. The AI features work flawlessly in production.",
  },
  {
    name: "VP Product, B2B SaaS",
    initial: "L",
    rating: 5,
    quote: "Clear documentation and smooth handoff. Our engineering team was impressed with the code quality.",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background" aria-live="polite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">Client Feedback</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extralight tracking-tight text-foreground text-balance">
            Trusted by Founders & Teams
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Anonymized feedback from real clients across various industries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 bg-card rounded-2xl border transition-all duration-500 ${
                index === activeIndex
                  ? "border-gold shadow-lg scale-105"
                  : "border-border hover:border-gold/50 hover:shadow-md"
              }`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Initial Avatar */}
              <div className="w-12 h-12 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-4">
                <span className="text-lg font-semibold text-gold">{testimonial.initial}</span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 text-sm">"{testimonial.quote}"</p>

              {/* Attribution */}
              <div>
                <p className="text-sm font-medium text-muted-foreground">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index)
                setIsPaused(false)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "bg-gold w-8" : "bg-border hover:bg-gold/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
