"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const testimonials = [
  {
    name: "Founder, SaaS Startup",
    initial: "A",
    rating: 5,
    quote: "The AI integration has been transformative. Clean code and clear communication.",
  },
  {
    name: "CEO, E-commerce Brand",
    initial: "M",
    rating: 5,
    quote: "Conversion rate increased significantly. Professional team that truly understands business.",
  },
  {
    name: "Owner, Digital Agency",
    initial: "S",
    rating: 5,
    quote: "Best development partner we've worked with. Transparent pricing.",
  },
]

export default function TestimonialsPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">Client Feedback</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-foreground text-balance">
            Trusted by Founders & Teams
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            What our clients have to say.
          </p>
        </div>

        {/* Testimonials Grid - Preview (3 only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-gold/50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-4">
                <span className="text-lg font-semibold text-gold">{testimonial.initial}</span>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 text-sm">"{testimonial.quote}"</p>

              <p className="text-sm font-medium text-muted-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button asChild className="bg-navy hover:bg-navy-light text-primary-foreground px-8">
            <Link href="/testimonials">Read Client Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
