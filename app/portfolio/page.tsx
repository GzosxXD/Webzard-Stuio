"use client"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

const projects = [
  {
    id: 1,
    title: "TechFlow AI Platform",
    category: "Software/SaaS",
    description:
      "AI-powered SaaS platform transformation with advanced machine learning integrations, real-time data processing, and intelligent automation. Built with scalable architecture to handle enterprise-level workloads and seamless third-party API integrations.",
    image: "/modern-ai-saas-dashboard-interface-clean-design.jpg",
  },
  {
    id: 2,
    title: "Luxe Fashion Boutique",
    category: "E-commerce",
    description:
      "High-conversion e-commerce platform redesign for luxury fashion brand. Features personalized product recommendations, virtual try-on technology, seamless checkout experience, and integrated loyalty program driving significant revenue growth.",
    image: "/elegant-fashion-ecommerce-website-luxury-design.jpg",
  },
  {
    id: 3,
    title: "FitZone Gym & Fitness Studio",
    category: "Fitness & Wellness",
    description:
      "Complete website optimization and rebuild for fitness studio featuring online class booking, member portal, real-time schedule updates, trainer profiles, and mobile-first design. Performance optimization resulted in dramatic speed improvements and tripled online bookings.",
    image: "/modern-fitness-gym-website-energetic-design.jpg",
  },
  {
    id: 4,
    title: "Smile Care Dental Clinic",
    category: "Healthcare",
    description:
      "Professional dental practice website with comprehensive optimization focused on speed and user experience. Features online appointment scheduling, patient education resources, treatment information, insurance details, and HIPAA-compliant forms. Site performance dramatically improved to under 2-second load times.",
    image: "/professional-dental-clinic-website-clean-medical-d.jpg",
  },
  {
    id: 5,
    title: "Creative Minds Agency",
    category: "Digital Services",
    description:
      "Full-service digital agency platform showcasing portfolio work, service offerings, and client testimonials. Built with transparent pricing structure, project management integration, and client portal for seamless collaboration. Now their recommended development partner.",
    image: "/modern-creative-digital-agency-website-portfolio.jpg",
  },
  {
    id: 6,
    title: "QuickFix Plumbing Services",
    category: "Home Services",
    description:
      "Complete website build and SEO optimization for local plumbing business. Features emergency contact system, service area mapping, before/after project galleries, customer reviews, and mobile-optimized design. Massive improvements in local search visibility and lead generation.",
    image: "/professional-plumbing-services-website-mobile-frie.jpg",
  },
  {
    id: 7,
    title: "MedTech Solutions",
    category: "Healthcare Tech",
    description:
      "HIPAA-compliant healthcare technology platform with advanced security features, patient data management, and regulatory compliance built-in. Expert implementation of healthcare regulations with attention to detail and robust architecture for enterprise healthcare systems.",
    image: "/healthcare-technology-platform-medical-interface-s.jpg",
  },
  {
    id: 8,
    title: "Spice Route Restaurant",
    category: "Restaurant & Hospitality",
    description:
      "Complete restaurant website rebuild and optimization featuring online ordering system, menu showcase with dietary filters, table reservations, catering inquiries, and mobile-first design. Lightning-fast performance and seamless ordering experience resulted in 150% increase in online orders.",
    image: "/elegant-restaurant-website-food-photography-dark-t.jpg",
  },
  {
    id: 9,
    title: "FinanceFlow Platform",
    category: "Financial Tech",
    description:
      "Secure fintech platform with advanced AI features for financial analysis and reporting. Fast development turnaround with production-ready code, comprehensive testing, and zero-downtime launch. Built with security-first architecture and responsive support infrastructure.",
    image: "/modern-fintech-platform-dashboard-financial-interf.jpg",
  },
  {
    id: 10,
    title: "Enterprise Cloud Solutions",
    category: "Enterprise SaaS",
    description:
      "B2B SaaS platform for enterprise clients with comprehensive documentation, clean architecture, and seamless team handoff. Impressed engineering teams with code quality and became the internal development partner for future projects. Scalable infrastructure for enterprise workloads.",
    image: "/professional-b2b-saas-platform-enterprise-dashboar.jpg",
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
