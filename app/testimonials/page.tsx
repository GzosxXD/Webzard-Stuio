"use client"

import { Star } from "lucide-react"
import Footer from "@/components/footer"

const testimonials = [
  {
    name: "Alex Chen",
    company: "Founder, SaaS Startup",
    initial: "A",
    industry: "Software/SaaS",
    rating: 5,
    quote:
      "The AI integration has been transformative for our platform. Clean code, clear communication, and they delivered ahead of schedule. Couldn't ask for a better team.",
    result: "Increased user engagement by 45%",
  },
  {
    name: "Maria Rodriguez",
    company: "CEO, E-commerce Brand",
    initial: "M",
    industry: "E-commerce",
    rating: 5,
    quote:
      "Conversion rate increased significantly after the redesign. Professional team that truly understands business goals and user psychology. Highly recommended.",
    result: "Revenue increased by 60% in first quarter",
  },
  {
    name: "Sarah Thompson",
    company: "Owner, Digital Agency",
    initial: "S",
    industry: "Digital Services",
    rating: 5,
    quote:
      "Best development partner we've worked with. Transparent pricing, no surprises, and exceptional code quality. Now a core part of our offering.",
    result: "Became our top recommended developer",
  },
  {
    name: "Robert Johnson",
    company: "Director, Healthcare Tech",
    initial: "R",
    industry: "Healthcare",
    rating: 5,
    quote:
      "Security and compliance were handled expertly. The team's attention to detail is outstanding, and they understand healthcare regulations inside and out.",
    result: "HIPAA compliant within timeline",
  },
  {
    name: "Jessica Lee",
    company: "Founder, Fintech Startup",
    initial: "J",
    industry: "Financial Tech",
    rating: 5,
    quote:
      "Fast turnaround without compromising quality. The AI features work flawlessly in production. Their support team is always there when we need them.",
    result: "Launched with zero downtime",
  },
  {
    name: "Michael Brown",
    company: "VP Product, B2B SaaS",
    initial: "L",
    industry: "Enterprise SaaS",
    rating: 5,
    quote:
      "Clear documentation and smooth handoff. Our engineering team was impressed with the code quality and architecture. Set a new standard for partnerships.",
    result: "Adopted as internal development partner",
  },
]

export default function TestimonialsPage() {
  return (
    <>
      <div className="pt-20 pb-16 sm:pb-24 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">Client Feedback</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-foreground text-balance">
              Trusted by Founders & Teams
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from real clients across diverse industries.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 sm:p-10 bg-card rounded-2xl border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Avatar & Stars */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                      <span className="text-xl font-semibold text-gold">{testimonial.initial}</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
                      <p className="text-xs text-gold/70 font-medium mt-1">{testimonial.industry}</p>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 text-sm sm:text-base">"{testimonial.quote}"</p>

                {/* Result Badge */}
                <div className="p-3 bg-secondary/50 rounded-lg border border-border/50">
                  <p className="text-xs sm:text-sm font-medium text-gold">Result</p>
                  <p className="text-xs sm:text-sm text-foreground mt-1">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 sm:mt-24">
            <div className="text-center">
              <p className="text-3xl sm:text-5xl font-bold text-gold">48+</p>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-5xl font-bold text-gold">23+</p>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-5xl font-bold text-gold">37%+</p>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">Avg Growth</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
