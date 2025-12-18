import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell's Bakery",
    location: "Portland, OR",
    rating: 5,
    quote:
      "Webzard Studios transformed our online presence. Our orders increased by 40% within the first month of launching our new website!",
  },
  {
    name: "James Rodriguez",
    business: "Rodriguez Auto Repair",
    location: "Phoenix, AZ",
    rating: 5,
    quote:
      "Professional, responsive, and delivered exactly what we needed. The AI chatbot feature has been a game-changer for customer inquiries.",
  },
  {
    name: "Emily Chen",
    business: "Chen Family Dentistry",
    location: "Seattle, WA",
    rating: 5,
    quote:
      "Our patients love the new booking system. The team at Webzard made the whole process seamless and stress-free.",
  },
  {
    name: "Michael Thompson",
    business: "Thompson Law Office",
    location: "Dallas, TX",
    rating: 4,
    quote:
      "The attention to detail and understanding of our industry was impressive. Our website now reflects the professionalism of our firm.",
  },
  {
    name: "Lisa Anderson",
    business: "Bloom & Grow Florist",
    location: "Chicago, IL",
    rating: 5,
    quote:
      "Beautiful design, easy to manage, and our e-commerce sales have tripled. Best investment we've made for our business.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extralight tracking-tight text-foreground text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real business owners across the United States.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-gold/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-gold fill-gold" : "text-border"}`}
                  />
                ))}
              </div>
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
