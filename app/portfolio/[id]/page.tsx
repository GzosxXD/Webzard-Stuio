import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"

const projects = [
  {
    id: 1,
    title: "Evergreen Dental",
    category: "Healthcare",
    image: "/modern-dental-clinic-website-clean-design.jpg",
    business:
      "Family dental practice serving the local community for over 15 years with a team of 5 dentists and 12 staff members. They specialize in general dentistry, cosmetic procedures, and pediatric care.",
    challenge:
      "Their outdated website wasn't mobile-friendly, lacked online appointment booking functionality, had poor search engine visibility, and failed to showcase their modern facilities and advanced technology. This caused them to lose potential patients to competitors with stronger digital presence.",
    solution:
      "We designed a clean, trustworthy website with integrated appointment scheduling system, patient testimonials, detailed service breakdowns with before/after galleries, insurance information, team profiles, and educational blog. Added schema markup for better local SEO and implemented speed optimization for faster loading.",
    outcome:
      "40% increase in online appointment bookings within the first month. Improved Google Maps visibility leading to 60% more phone inquiries. Patient satisfaction scores improved as patients appreciated the convenience of online booking and comprehensive information availability.",
    results: [
      "40% increase in online bookings",
      "60% more phone inquiries",
      "Improved local SEO visibility",
      "Patient satisfaction up",
    ],
    traffic: {
      before: "2,400",
      after: "3,360",
      increase: "+40%",
    },
  },
  {
    id: 2,
    title: "Summit Realty",
    category: "Real Estate",
    image: "/luxury-real-estate-property-listings-website.jpg",
    business:
      "Boutique real estate agency specializing in high-end residential properties in premium neighborhoods, with a focus on personalized service and luxury market expertise. Founded 8 years ago with a team of 6 experienced agents.",
    challenge:
      "Their existing website couldn't showcase properties effectively with poor image quality, no filtering system, slow loading times, and terrible mobile experience. Leads were generic and agents spent too much time qualifying unqualified prospects.",
    solution:
      "Built a fast, image-optimized platform with advanced property filters (price, bedrooms, amenities, neighborhood), virtual tour integration, interactive map view, mortgage calculator, neighborhood statistics, agent profiles with specializations, and a sophisticated lead capture system with automated follow-ups.",
    outcome:
      "Property inquiry rate doubled from 15 to 30 per week. Average time on site increased by 3 minutes indicating better engagement. Agents reported 50% higher quality leads who were more informed and serious about purchasing. Virtual tour views increased property showing requests by 25%.",
    results: [
      "Property inquiries doubled",
      "3-minute increase in session time",
      "50% higher quality leads",
      "25% more showing requests",
    ],
    traffic: {
      before: "4,800",
      after: "6,240",
      increase: "+30%",
    },
  },
  {
    id: 3,
    title: "Craft & Barrel",
    category: "Restaurant",
    image: "/elegant-restaurant-website-dark-theme-menu.jpg",
    business:
      "Upscale gastropub known for craft cocktails, seasonal menus, and locally-sourced ingredients. Located in a vibrant downtown area, they host private events and offer a unique dining experience blending casual atmosphere with fine dining quality.",
    challenge:
      "No online presence beyond basic social media posts. Customers couldn't view current menus, make reservations, or learn about private event options. Phone lines were constantly busy during peak hours, leading to missed reservations and frustrated customers.",
    solution:
      "Created an atmospheric website reflecting their brand with high-quality food photography, integrated OpenTable reservation system, interactive menu with dietary filters and ingredient sourcing information, events calendar for live music and special dinners, private event inquiry form, and cocktail recipe blog.",
    outcome:
      "Online reservations now account for 60% of all bookings, reducing phone pressure. Private event inquiries increased by 75% with 40% booking rate. Menu discovery improved as customers arrive more informed about offerings. Social media engagement doubled as website linked to Instagram galleries.",
    results: [
      "60% of bookings online",
      "75% more event inquiries",
      "40% event booking rate",
      "Social engagement doubled",
    ],
    traffic: {
      before: "1,800",
      after: "2,520",
      increase: "+40%",
    },
  },
  {
    id: 4,
    title: "FitCore Studio",
    category: "Fitness",
    image: "/modern-fitness-gym-studio-website-energetic.jpg",
    business:
      "Boutique fitness studio offering HIIT, yoga, spin, and personal training sessions in a community-focused environment. With 3 locations and 15 instructors, they pride themselves on personalized attention and results-driven programs.",
    challenge:
      "Managing class bookings via phone and paper was inefficient and error-prone. Members wanted an easy way to view schedules, book classes, track attendance, and manage their memberships. Staff spent excessive time on administrative tasks instead of member engagement.",
    solution:
      "Developed a responsive website with real-time class schedules synced with their booking system, member login portal for booking history and package management, automated email confirmations and reminders, instructor profiles with specializations, workout program library, nutrition resources, and progress tracking dashboard.",
    outcome:
      "Reduced front desk workload by 50%, allowing staff to focus on member experience. Class fill rates improved by 30% as members could book 24/7. Cancellation no-shows decreased by 40% due to automated reminders. Member retention improved by 15% due to better engagement tools.",
    results: [
      "50% reduction in admin work",
      "30% higher class fill rates",
      "40% fewer no-shows",
      "15% better retention",
    ],
    traffic: {
      before: "3,200",
      after: "4,480",
      increase: "+40%",
    },
  },
  {
    id: 5,
    title: "Monarch Law Group",
    category: "Legal",
    image: "/professional-law-firm-website-elegant-navy.jpg",
    business:
      "Mid-sized law firm with 8 attorneys specializing in family law, estate planning, and business law. Established 20 years ago with a reputation for personalized service and successful case outcomes.",
    challenge:
      "Their website looked dated with 2010-era design and didn't reflect the firm's professionalism. Potential clients were hesitant to reach out due to lack of trust signals. No clear information about attorney expertise, case results, or client experiences. Generic contact form didn't inspire confidence for confidential matters.",
    solution:
      "Redesigned with a sophisticated, trust-building layout featuring detailed attorney profiles with credentials and specializations, practice area pages with case studies and FAQs, client testimonials with video stories, legal resources library, secure encrypted contact form for confidential inquiries, and blog with legal insights demonstrating expertise.",
    outcome:
      "Consultation requests increased by 35% within first quarter. The firm reported clients mentioning the website's professionalism during intake calls. Online credibility improved with better Google rankings for target practice areas. Average case value increased as website attracted more qualified, serious clients.",
    results: [
      "35% more consultations",
      "Professional brand perception",
      "Higher case values",
      "Better qualified clients",
    ],
    traffic: {
      before: "3,600",
      after: "4,680",
      increase: "+30%",
    },
  },
  {
    id: 6,
    title: "Bloom Boutique",
    category: "E-commerce",
    image: "/beautiful-flower-shop-ecommerce-website-pink.jpg",
    business:
      "Family-owned flower shop serving the local area for 25 years, specializing in weddings, corporate events, and everyday arrangements. Known for fresh, locally-sourced flowers and personalized service.",
    challenge:
      "No online ordering capability meant losing sales to competitors with delivery options. Phone orders were time-consuming to manage and prone to errors. Couldn't capture impulse buyers or serve customers outside business hours. Wedding consultations required multiple phone calls and emails.",
    solution:
      "Built a visually stunning e-commerce site with product categories (occasions, flower types, price ranges), custom arrangement builder with real-time pricing, delivery scheduling with time slots, subscription service for weekly deliveries, wedding portfolio with booking form, secure checkout with multiple payment options, and integration with their existing POS system.",
    outcome:
      "Online orders now represent 45% of total revenue ($180K annually). Expanded delivery radius by 15 miles due to automated order management. Wedding consultations increased by 60% with 50% booking rate. Customer base grew 35% reaching new demographics who prefer online shopping.",
    results: [
      "45% of revenue online",
      "$180K annual online sales",
      "35% customer base growth",
      "60% more wedding leads",
    ],
    traffic: {
      before: "2,800",
      after: "3,920",
      increase: "+40%",
    },
  },
]

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number(params.id))

  if (!project) {
    notFound()
  }

  return (
    <>
      <div className="pt-20 pb-16 sm:pb-24 lg:pb-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Hero Image */}
          <div className="mb-12 sm:mb-16 rounded-2xl overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto object-cover aspect-video"
            />
          </div>

          {/* Project Header */}
          <div className="mb-12 sm:mb-16">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">{project.category}</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-foreground text-balance">
              {project.title}
            </h1>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-16">
            {/* The Business */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">The Business</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{project.business}</p>
            </div>

            {/* The Challenge */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">The Challenge</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>

            {/* Our Solution */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Our Solution</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            {/* The Results */}
            <div className="p-8 bg-card rounded-2xl border border-border">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">The Results</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Traffic Impact */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">Traffic Impact</h2>
            <div className="grid grid-cols-3 gap-6 p-8 bg-secondary/30 rounded-2xl border border-border">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Monthly Traffic Before</p>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">{project.traffic.before}</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-gold mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-lg sm:text-xl font-semibold text-gold">{project.traffic.increase}</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Monthly Traffic After</p>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">{project.traffic.after}</p>
              </div>
            </div>
          </div>

          {/* Results Highlights */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">Key Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="p-6 bg-secondary/30 rounded-2xl border border-border text-center">
                  <p className="text-sm text-muted-foreground">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-8 bg-secondary/30 rounded-2xl border border-border">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Ready to transform your business?</h3>
              <p className="text-sm text-muted-foreground mt-1">Let's create your success story.</p>
            </div>
            <Button asChild className="bg-navy hover:bg-navy-light text-primary-foreground px-8">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <Button asChild variant="outline">
              <Link href="/portfolio">Back to Portfolio</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
