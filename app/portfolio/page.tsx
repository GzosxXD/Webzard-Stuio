"use client"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

const projects = [
  {
    id: 1,
    title: "Evergreen Dental",
    category: "Healthcare",
    description:
      "A comprehensive digital transformation for a family dental practice. Features patient appointment scheduling, insurance verification, treatment information, and educational resources to improve patient engagement and streamline operations.",
    image: "/modern-dental-clinic-website-clean-design.jpg",
  },
  {
    id: 2,
    title: "Summit Realty",
    category: "Real Estate",
    description:
      "Luxury real estate platform featuring advanced property search with filters, virtual tours, agent profiles, mortgage calculators, and neighborhood guides. Integrated lead capture system with automated follow-ups for higher conversion rates.",
    image: "/luxury-real-estate-property-listings-website.jpg",
  },
  {
    id: 3,
    title: "Craft & Barrel",
    category: "Restaurant",
    description:
      "An atmospheric online presence for an upscale gastropub featuring seasonal menus with dietary filters, online reservation system, private event booking, craft cocktail gallery, and chef profiles to showcase culinary expertise.",
    image: "/elegant-restaurant-website-dark-theme-menu.jpg",
  },
  {
    id: 4,
    title: "FitCore Studio",
    category: "Fitness",
    description:
      "Dynamic fitness studio platform with real-time class schedules, member portal, automated booking confirmations, trainer bios, workout programs, nutrition guides, and progress tracking to enhance member experience and reduce administrative overhead.",
    image: "/modern-fitness-gym-studio-website-energetic.jpg",
  },
  {
    id: 5,
    title: "Monarch Law Group",
    category: "Legal",
    description:
      "Professional law firm website with sophisticated design, detailed attorney profiles, practice area expertise, case results, client testimonials, secure contact forms for confidential inquiries, and legal resources library to build trust and credibility.",
    image: "/professional-law-firm-website-elegant-navy.jpg",
  },
  {
    id: 6,
    title: "Bloom Boutique",
    category: "E-commerce",
    description:
      "Beautiful e-commerce platform for a flower shop with product categories, custom arrangement builder, delivery scheduling, occasion-based recommendations, subscription services, and POS integration for seamless order management.",
    image: "/beautiful-flower-shop-ecommerce-website-pink.jpg",
  },
]

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-20 pb-16 sm:pb-24 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">Our Work</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-foreground text-balance">
              Featured Projects
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results for real businesses across diverse industries.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-medium text-gold uppercase tracking-wider">{project.category}</span>
                  <h3 className="mt-3 text-lg sm:text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
