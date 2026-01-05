"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Evergreen Dental",
    category: "Healthcare",
    description: "Modern patient-focused dental website with 42% faster load times.",
    image: "/modern-dental-clinic-website-professional.jpg",
    stats: "+42% speed",
  },
  {
    id: 2,
    title: "Summit Realty",
    category: "Real Estate",
    description: "Luxury property platform engineered for conversion and performance.",
    image: "/luxury-real-estate-website-property-listings.jpg",
    stats: "+38% leads",
  },
  {
    id: 3,
    title: "Craft & Barrel",
    category: "Restaurant",
    description: "Elegant digital presence with online ordering integration.",
    image: "/upscale-restaurant-website-elegant-dark-theme.jpg",
    stats: "+51% orders",
  },
]

export default function PortfolioPreview() {
  const [isInView, setIsInView] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsInView(true), {
      threshold: 0.1,
    })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="portfolio" className="py-32 lg:py-48 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Chapter marker */}
        <div
          className={`mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-xs font-mono text-gold/60 tracking-widest uppercase">/ 04 — Selected Work</span>
        </div>

        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight">
              Case Studies
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Real businesses. Measurable outcomes. Engineering solutions that last.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="mt-8 lg:mt-0 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors group"
          >
            View All Work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className={`group relative overflow-hidden transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-card">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={`object-cover transition-all duration-700 ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={85}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? "opacity-90" : "opacity-70"}`}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-gold/60 tracking-wider uppercase">{project.category}</span>
                    <span className="text-xs font-mono text-muted-foreground">{project.stats}</span>
                  </div>

                  <h3 className="text-2xl font-light text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p
                    className={`text-sm text-muted-foreground leading-relaxed transition-all duration-500 ${hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  >
                    {project.description}
                  </p>

                  <div
                    className={`mt-4 flex items-center gap-2 text-xs text-gold transition-all duration-500 ${hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  >
                    View Case Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
