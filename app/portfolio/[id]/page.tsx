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
  {
    id: 7,
    title: "TechFlow AI Platform",
    category: "Software/SaaS",
    image: "/modern-ai-saas-dashboard-interface.jpg",
    business:
      "Fast-growing SaaS startup providing AI-powered workflow automation for enterprise clients. Founded 2 years ago, serving over 500 businesses with a team of 12 engineers and product specialists focused on cutting-edge machine learning solutions.",
    challenge:
      "Their platform needed advanced AI integration capabilities that their in-house team couldn't implement within aggressive timeline. Required clean, maintainable code that could scale with rapid user growth and complex third-party API integrations.",
    solution:
      "Implemented comprehensive AI integration layer with machine learning pipelines, real-time data processing, intelligent automation workflows, and seamless API connectivity. Delivered modular, well-documented code ahead of schedule with thorough testing and deployment support.",
    outcome:
      "User engagement increased by 45% within first month of launch. Platform stability improved with zero critical issues post-deployment. Client praised clear communication throughout development and code quality that impressed their engineering team. Features released 2 weeks ahead of schedule.",
    results: [
      "45% increase in engagement",
      "Zero critical issues",
      "Delivered ahead of schedule",
      "Scalable architecture",
    ],
    traffic: {
      before: "12,400",
      after: "17,980",
      increase: "+45%",
    },
    testimonial: {
      name: "Alex Chen",
      role: "Founder, SaaS Startup",
      quote:
        "The AI integration has been transformative for our platform. Clean code, clear communication, and delivered ahead of schedule. Couldn't ask for a better developer.",
    },
  },
  {
    id: 8,
    title: "Luxe Fashion Boutique",
    category: "E-commerce",
    image: "/elegant-luxury-fashion-ecommerce-website.jpg",
    business:
      "Premium e-commerce brand specializing in luxury fashion and accessories. Established 5 years ago with curated collections and personalized shopping experience. Revenue of $2M annually with focus on high-end market segment and exceptional customer service.",
    challenge:
      "Existing website had poor conversion rates despite high traffic. Checkout abandonment was 78%, mobile experience was suboptimal, product discovery was difficult, and site didn't reflect the luxury brand positioning. Needed complete redesign focused on conversions and user psychology.",
    solution:
      "Complete redesign with conversion-focused architecture including personalized product recommendations using behavioral data, streamlined checkout process, high-quality imagery optimization, mobile-first responsive design, abandoned cart recovery system, and integrated loyalty rewards program. Implemented A/B testing framework for continuous optimization.",
    outcome:
      "Revenue increased by 60% in first quarter post-launch. Conversion rate improved from 1.2% to 3.8%. Average order value increased by 35%. Mobile sales grew from 30% to 55% of total revenue. Customer praised understanding of business goals and user psychology throughout the project.",
    results: ["60% revenue increase Q1", "3.8% conversion rate", "35% higher order value", "55% mobile sales"],
    traffic: {
      before: "24,800",
      after: "33,480",
      increase: "+35%",
    },
    testimonial: {
      name: "Maria Rodriguez",
      role: "CEO, E-commerce Brand",
      quote:
        "Conversion rate increased significantly after the redesign. Working directly with a skilled developer who truly understands business goals and user psychology. Highly recommended.",
    },
  },
  {
    id: 9,
    title: "FitZone Gym & Fitness Studio",
    category: "Fitness & Wellness",
    image: "/modern-fitness-gym-website-energetic.jpg",
    business:
      "Popular local fitness studio with 3 locations offering group classes, personal training, and wellness programs. Serving 800+ members with 15 certified instructors. Known for community atmosphere and results-driven programs with strong local reputation.",
    challenge:
      "Website was painfully slow (8+ second load time), outdated design didn't appeal to their target demographic, no online booking system leading to missed opportunities, and poor mobile experience. Online booking inquiries were stagnant despite growing local interest in fitness.",
    solution:
      "Complete website rebuild with performance optimization as top priority. Implemented aggressive image optimization, code splitting, lazy loading, CDN integration, integrated real-time class booking system, mobile-first responsive design, member portal with progress tracking, and social proof elements with transformation stories. Optimized for Core Web Vitals.",
    outcome:
      "Page speed improved by 85% (8s to 1.2s load time). Online bookings increased from 15/month to 45/month (tripled). Mobile traffic increased by 120% due to better experience. Member retention improved by 18% thanks to better engagement tools. Client reports phone inquiries also increased due to professional appearance.",
    results: ["85% speed improvement", "Bookings tripled", "120% more mobile traffic", "18% better retention"],
    traffic: {
      before: "3,200",
      after: "7,040",
      increase: "+120%",
    },
    testimonial: {
      name: "Rajesh Kumar Singh",
      role: "Owner, FitZone Gym & Fitness Studio",
      quote:
        "Our website was slow and outdated. After Webzard optimized it, page speed increased dramatically and we started getting 3x more online bookings. The performance improvements are incredible!",
    },
  },
  {
    id: 10,
    title: "Smile Care Dental Clinic",
    category: "Healthcare",
    image: "/professional-dental-clinic-website-clean.jpg",
    business:
      "Family dental practice serving the community for 12 years with 3 dentists and modern facilities. Specializing in cosmetic dentistry, family care, and emergency services. Building reputation on patient comfort and advanced dental technology with 2,500+ active patients.",
    challenge:
      "Website was extremely slow (7-second load time) causing high bounce rates. No online appointment booking meant staff spent hours on phone scheduling. Mobile experience was broken. Outdated design didn't reflect their modern practice and advanced technology. Losing patients to competitors with better digital presence.",
    solution:
      "Comprehensive website optimization and redesign focused on performance and user experience. Implemented server-side rendering, image optimization, minification, caching strategies, integrated appointment scheduling system, patient forms, treatment information with video explainers, insurance verification tool, mobile-first design, and local SEO optimization. Achieved under 2-second load time.",
    outcome:
      "Page load time reduced by 75% (7s to 1.7s). Patient appointment requests doubled from 30/month to 60/month. Bounce rate decreased from 68% to 32%. Phone call volume decreased by 40% as more patients used online booking. New patient acquisition increased by 28% with improved Google rankings.",
    results: ["75% faster load time", "2x appointment requests", "68% to 32% bounce rate", "28% more new patients"],
    traffic: {
      before: "4,200",
      after: "9,240",
      increase: "+120%",
    },
    testimonial: {
      name: "Dr. Priya Sharma",
      role: "Principal Dentist, Smile Care Dental Clinic",
      quote:
        "The optimization work they did was outstanding. Our website now loads in under 2 seconds, and patient appointment requests have doubled. They understood exactly what a medical practice needs.",
    },
  },
  {
    id: 11,
    title: "Creative Minds Agency",
    category: "Digital Services",
    image: "/modern-creative-digital-agency-portfolio-website.jpg",
    business:
      "Boutique digital marketing agency offering branding, web design, and marketing services to small and medium businesses. Team of 8 creative professionals with diverse portfolio across industries. Known for personalized service and creative solutions.",
    challenge:
      "Needed reliable development partner for client projects as their in-house developer left. Required transparent pricing, consistent quality, and ability to white-label services. Previous freelancers had inconsistent quality and communication issues causing project delays and client dissatisfaction.",
    solution:
      "Established ongoing partnership model with clear pricing structure, service level agreements, project management integration, white-label solutions, comprehensive documentation, regular communication cadence, code review processes, and dedicated support channel. Delivered multiple client projects with consistent high quality.",
    outcome:
      "Became their primary recommended development partner for all web projects. No project delays in 6 months of partnership. Client satisfaction scores improved by 32%. Agency able to take on 40% more projects due to reliable development capacity. Revenue increased by $180K annually from expanded service offerings.",
    results: [
      "Top development partner",
      "Zero project delays",
      "32% better client satisfaction",
      "40% project capacity increase",
    ],
    traffic: {
      before: "8,400",
      after: "10,920",
      increase: "+30%",
    },
    testimonial: {
      name: "Sarah Thompson",
      role: "Owner, Digital Agency",
      quote:
        "Best development partner we've worked with. Transparent pricing, no surprises, and exceptional code quality. Now a core part of our offering.",
    },
  },
  {
    id: 12,
    title: "QuickFix Plumbing Services",
    category: "Home Services",
    image: "/placeholder.svg?height=600&width=1200",
    business:
      "Local plumbing service company serving residential and commercial clients for 8 years. Family-owned business with 4 licensed plumbers offering emergency services, repairs, and installations. Strong reputation for quality work and customer service.",
    challenge:
      "No website at all—relying entirely on word-of-mouth and expensive paid advertising. Competitors with websites were capturing online searches. Couldn't showcase work portfolio or customer reviews. Missing calls during job sites. Needed affordable web presence to compete and generate organic leads.",
    solution:
      "Built mobile-first website optimized for local search with emergency contact system, click-to-call buttons, service area mapping with geographic targeting, project gallery with before/after photos, customer review integration, service descriptions with transparent pricing, Google Business Profile optimization, and local SEO implementation. Focused on lead generation and mobile experience.",
    outcome:
      "Organic website traffic grew from 0 to 2,200 monthly visitors in 6 months. Generates 180% more leads monthly (from 12 to 34). Ranks on first page Google for 15 local plumbing keywords. Phone inquiries increased by 220% overall. Reduced paid advertising spending by 60% while increasing total leads. ROI recouped within 2 months.",
    results: ["180% more monthly leads", "First page Google rankings", "220% more inquiries", "60% less ad spending"],
    traffic: {
      before: "0",
      after: "2,200",
      increase: "+∞",
    },
    testimonial: {
      name: "Arjun Patel",
      role: "Owner, QuickFix Plumbing Services",
      quote:
        "I never thought a website could make such a difference. They optimized everything - now customers find me on Google, my site loads fast on mobile, and I get calls every day. Best investment for my business!",
    },
  },
  {
    id: 13,
    title: "MedTech Solutions",
    category: "Healthcare Tech",
    image: "/placeholder.svg?height=600&width=1200",
    business:
      "Healthcare technology company providing patient management and telehealth solutions to medical practices. Serving 50+ clinics with 100,000+ patient records. Focus on HIPAA compliance, security, and improving patient care outcomes through technology.",
    challenge:
      "Building HIPAA-compliant platform with strict security and regulatory requirements. Needed expert understanding of healthcare regulations, data encryption, secure authentication, audit logging, and compliance documentation. Previous developer lacked healthcare expertise causing compliance issues and delays.",
    solution:
      "Implemented comprehensive HIPAA-compliant architecture with end-to-end encryption, secure authentication with MFA, role-based access control, comprehensive audit logging, encrypted data storage, secure API design, compliance documentation, penetration testing, and ongoing security monitoring. Delivered within timeline with all regulatory requirements met.",
    outcome:
      "Achieved full HIPAA compliance on schedule. Passed security audit with zero critical findings. Platform launched serving all 50 clinics without security incidents. Client praised deep understanding of healthcare regulations and attention to detail. System handles 100,000+ patient records securely. Ongoing support maintains compliance with evolving regulations.",
    results: ["Full HIPAA compliance", "Zero security incidents", "Passed security audit", "100K+ records secured"],
    traffic: {
      before: "6,800",
      after: "8,840",
      increase: "+30%",
    },
    testimonial: {
      name: "Robert Johnson",
      role: "Director, Healthcare Tech",
      quote:
        "Security and compliance were handled expertly. The attention to detail is outstanding, and they understand healthcare regulations inside and out.",
    },
  },
  {
    id: 14,
    title: "Spice Route Restaurant",
    category: "Restaurant & Hospitality",
    image: "/placeholder.svg?height=600&width=1200",
    business:
      "Popular Indian restaurant known for authentic cuisine, spice blends, and family recipes. Established 10 years ago with loyal customer base. Offers dine-in, takeout, and catering services. Located in busy commercial district with high foot traffic and growing delivery demand.",
    challenge:
      "Old website was extremely slow (9-second load time) and not mobile-friendly. Online ordering system was clunky with high abandonment rate. Menu was difficult to navigate. Website didn't showcase food quality or restaurant atmosphere. Missing significant revenue from online orders as customers went to competitors with better ordering experience.",
    solution:
      "Complete rebuild with performance-first approach and integrated online ordering system. Implemented image optimization for food photography, progressive web app features, menu with dietary filters and allergen information, streamlined ordering flow with real-time order tracking, mobile-first responsive design, reservation system, catering inquiry form, and customer review showcase. Achieved 90% performance score and 1-second load time.",
    outcome:
      "Online orders increased by 150% in first 3 months (from 80/month to 200/month). Website speed improved by 90% (9s to 0.9s). Mobile orders grew from 40% to 72% of total online orders. Cart abandonment decreased from 65% to 22%. Average order value increased by 28% due to better menu discovery. Monthly online revenue increased by $12,000. ROI achieved in 6 weeks.",
    results: [
      "150% more online orders",
      "90% speed improvement",
      "72% orders from mobile",
      "$12K more monthly revenue",
    ],
    traffic: {
      before: "1,600",
      after: "4,000",
      increase: "+150%",
    },
    testimonial: {
      name: "Vikram Mehta",
      role: "Owner, Spice Route Restaurant",
      quote:
        "Our old website was killing our online orders. Webzard completely rebuilt and optimized it - now it's lightning fast, mobile-friendly, and orders have increased by 150%. The ROI has been phenomenal!",
    },
  },
  {
    id: 15,
    title: "FinanceFlow Platform",
    category: "Financial Tech",
    image: "/placeholder.svg?height=600&width=1200",
    business:
      "Fintech startup providing financial analysis and reporting tools for small business owners. Founded 18 months ago with $2M seed funding. Serving 300+ businesses with automated bookkeeping, cash flow forecasting, and financial insights powered by AI.",
    challenge:
      "Needed to rapidly implement AI-powered financial features to meet investor milestones and competitive pressure. Required fast turnaround without compromising quality, security, or scalability. Previous development partner couldn't meet aggressive timeline causing funding concerns.",
    solution:
      "Implemented AI-powered financial analysis features including automated transaction categorization, predictive cash flow forecasting, anomaly detection, intelligent reporting, and natural language insights. Delivered production-ready code with comprehensive testing, security best practices, thorough documentation, and deployment support. Completed 3-week ahead of deadline.",
    outcome:
      "Launched AI features with zero downtime or critical bugs. User engagement increased significantly with 78% of users actively using new AI insights. Investor milestone achieved ahead of schedule securing Series A funding. Client praised responsive communication and support. Platform stability maintained with 99.9% uptime. Fast turnaround impressed board members.",
    results: ["Zero downtime launch", "78% AI feature adoption", "Secured Series A funding", "99.9% uptime maintained"],
    traffic: {
      before: "8,600",
      after: "11,180",
      increase: "+30%",
    },
    testimonial: {
      name: "Jessica Lee",
      role: "Founder, Fintech Startup",
      quote:
        "Fast turnaround without compromising quality. The AI features work flawlessly in production. Always responsive when we need support.",
    },
  },
  {
    id: 16,
    title: "Enterprise Cloud Solutions",
    category: "Enterprise SaaS",
    image: "/placeholder.svg?height=600&width=1200",
    business:
      "Established B2B SaaS company providing cloud infrastructure management tools for enterprise clients. 7 years old with 200+ enterprise customers including Fortune 500 companies. Engineering team of 25 with focus on reliability, security, and enterprise-grade features.",
    challenge:
      "Needed external development expertise for new product line while maintaining high code quality standards their engineering team expected. Required seamless handoff, excellent documentation, and code that their team could maintain long-term. Previous contractors delivered poor quality code causing technical debt.",
    solution:
      "Implemented new product features with enterprise-grade architecture, comprehensive inline documentation, detailed system design docs, clean code following their existing patterns, extensive unit and integration testing, code review process with their team, architectural decision records, deployment guides, and knowledge transfer sessions. Collaborated closely with their engineering team throughout.",
    outcome:
      "Engineering team impressed with code quality and architecture decisions. Smooth handoff with zero technical debt. Documentation exceeded their internal standards. Product launched successfully serving enterprise clients. Client adopted as internal development partner for future projects. Received praise from VP of Engineering in company-wide meeting. Became template for how they evaluate future external partners.",
    results: ["Zero technical debt", "Exceeded doc standards", "Internal dev partner", "Engineering team praised"],
    traffic: {
      before: "18,400",
      after: "23,920",
      increase: "+30%",
    },
    testimonial: {
      name: "Michael Brown",
      role: "VP Product, B2B SaaS",
      quote:
        "Clear documentation and smooth handoff. Our engineers were impressed with the code quality and architecture. Set a new standard for partnerships.",
    },
  },
]

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === Number(id))

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

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">What Our Client Says</h2>
              <div className="p-8 bg-card rounded-2xl border border-border">
                <p className="text-base text-muted-foreground leading-relaxed">{project.testimonial.quote}</p>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-lg sm:text-xl font-semibold text-foreground">{project.testimonial.name}</span>
                  <span className="ml-2 text-sm text-muted-foreground">{project.testimonial.role}</span>
                </div>
              </div>
            </div>
          )}

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
