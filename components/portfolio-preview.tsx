"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Evergreen Dental",
    category: "Healthcare",
    description: "Modern patient-focused dental website.",
    image: "/modern-dental-clinic-website-professional.jpg",
  },
  {
    id: 2,
    title: "Summit Realty",
    category: "Real Estate",
    description: "Luxury real estate platform with advanced search.",
    image: "/luxury-real-estate-website-property-listings.jpg",
  },
  {
    id: 3,
    title: "Craft & Barrel",
    category: "Restaurant",
    description: "Elegant online presence for an upscale gastropub.",
    image: "/upscale-restaurant-website-elegant-dark-theme.jpg",
  },
]

export default function PortfolioPreview() {
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
    <section ref={sectionRef} id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 sm:mb-16 ${isVisible ? "animate-stagger-1" : "opacity-0"}`}>
          <span className="text-sm font-medium text-gold uppercase tracking-wider">Our Work</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses.
          </p>
        </div>

        {/* Portfolio Grid - Preview (3 projects) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 ${isVisible ? `animate-stagger-${index + 2}` : "opacity-0"}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={85}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-xs font-medium text-gold uppercase tracking-wider">{project.category}</span>
                <h3 className="mt-2 text-base sm:text-lg font-medium text-foreground group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-navy hover:bg-navy-light text-primary-foreground px-8 hover:scale-105 transition-transform duration-300"
          >
            <Link href="/portfolio">View Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
