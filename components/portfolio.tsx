"use client"

import { useState } from "react"
import { ArrowUpRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Evergreen Dental",
    category: "Healthcare",
    description: "A modern, patient-focused website for a family dental practice.",
    fullDescription: {
      business: "Family dental practice serving the local community for over 15 years.",
      problem:
        "Their outdated website wasn't mobile-friendly and lacked online appointment booking, causing them to lose potential patients to competitors.",
      solution:
        "We designed a clean, trustworthy website with integrated appointment scheduling, patient testimonials, and service breakdowns. Added schema markup for better local SEO.",
      outcome:
        "40% increase in online appointment bookings within the first month. Improved Google Maps visibility and patient inquiries.",
    },
    image: "/images/professional-dental-clinic-website-with-clean-whit.jpg",
  },
  {
    id: 2,
    title: "Summit Realty",
    category: "Real Estate",
    description: "Luxury real estate platform with advanced property search functionality.",
    fullDescription: {
      business: "Boutique real estate agency specializing in high-end residential properties.",
      problem:
        "Their existing website couldn't showcase properties effectively. No filtering system, slow loading images, and poor mobile experience.",
      solution:
        "Built a fast, image-optimized platform with advanced property filters, virtual tour integration, and a lead capture system for interested buyers.",
      outcome:
        "Property inquiry rate doubled. Average time on site increased by 3 minutes. Agents reported higher quality leads.",
    },
    image: "/images/luxury-real-estate-website-with-property-listings.jpg",
  },
  {
    id: 3,
    title: "Craft & Barrel",
    category: "Restaurant",
    description: "An elegant online presence for an upscale gastropub.",
    fullDescription: {
      business: "Upscale gastropub known for craft cocktails and seasonal menus.",
      problem:
        "No online presence beyond basic social media. Customers couldn't view menus or make reservations online, leading to missed opportunities.",
      solution:
        "Created an atmospheric website reflecting their brand. Integrated online reservation system, menu with dietary filters, and events calendar.",
      outcome:
        "Online reservations now account for 60% of all bookings. Private event inquiries increased significantly.",
    },
    image: "/images/upscale-restaurant-website-modern-elegant.jpg",
  },
  {
    id: 4,
    title: "FitCore Studio",
    category: "Fitness",
    description: "Dynamic fitness studio website with class booking and member portal.",
    fullDescription: {
      business: "Boutique fitness studio offering HIIT, yoga, and personal training sessions.",
      problem:
        "Managing class bookings via phone and paper was inefficient. Members wanted an easy way to view schedules and book classes.",
      solution:
        "Developed a responsive website with real-time class schedules, member login portal, and automated booking confirmations via email.",
      outcome: "Reduced front desk workload by 50%. Class fill rates improved as members could book 24/7.",
    },
    image: "/images/modern-fitness-gym-website-with-class-schedule-and.jpg",
  },
  {
    id: 5,
    title: "Monarch Law Group",
    category: "Legal",
    description: "Professional law firm website conveying trust and expertise.",
    fullDescription: {
      business: "Mid-sized law firm specializing in family law and estate planning.",
      problem:
        "Their website looked dated and didn't reflect the firm's professionalism. Potential clients were hesitant to reach out.",
      solution:
        "Redesigned with a sophisticated, trust-building layout. Added attorney profiles, practice area pages, and a secure contact form for confidential inquiries.",
      outcome:
        "Consultation requests increased by 35%. The firm reported clients mentioning the website's professionalism during intake calls.",
    },
    image: "/images/professional-law-firm-website-elegant-dark-blue-wi.jpg",
  },
  {
    id: 6,
    title: "Bloom Boutique",
    category: "E-commerce",
    description: "Beautiful e-commerce site for a local flower shop with online ordering.",
    fullDescription: {
      business: "Family-owned flower shop serving the local area for weddings, events, and everyday arrangements.",
      problem:
        "No online ordering capability. Losing sales to competitors with delivery options. Phone orders were time-consuming to manage.",
      solution:
        "Built a visually stunning e-commerce site with product categories, delivery scheduling, and secure checkout. Integrated with their existing POS system.",
      outcome:
        "Online orders now represent 45% of total revenue. Expanded delivery radius due to automated order management.",
    },
    image: "/images/flower-shop-ecommerce-website-beautiful.jpg",
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-medium text-gold uppercase tracking-wider">Our Work</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses. Click any project to see the full story.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border text-left"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-xs font-medium text-gold uppercase tracking-wider">{project.category}</span>
                <h3 className="mt-2 text-base sm:text-lg font-medium text-foreground">{project.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-foreground/50 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-card rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </button>
            <img
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-5 sm:p-8">
              <span className="text-xs sm:text-sm font-medium text-gold uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-medium text-foreground">{selectedProject.title}</h3>

              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-foreground mb-1">The Business</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {selectedProject.fullDescription.business}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-foreground mb-1">The Challenge</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {selectedProject.fullDescription.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-foreground mb-1">Our Solution</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {selectedProject.fullDescription.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-foreground mb-1">The Results</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {selectedProject.fullDescription.outcome}
                  </p>
                </div>
              </div>

              <Button
                className="mt-4 sm:mt-6 bg-navy hover:bg-navy-light text-primary-foreground"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
