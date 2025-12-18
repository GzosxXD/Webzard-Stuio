import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-extralight tracking-tight text-foreground mb-8">Terms of Service</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">Last updated: December 2024</p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Webzard Studios provides web design and development services. The specific deliverables, timeline, and
              pricing will be agreed upon before project commencement.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We operate on a milestone-based payment structure: 30% advance payment to initiate the project, 80% after
              demo review and approval, and 100% upon final delivery. All payments are processed securely via PayPal.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Revisions</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The number of revision rounds included depends on your selected pricing plan. Additional revisions beyond
              the included rounds may incur extra charges.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Upon full payment, you will own all rights to the final deliverables created specifically for your
              project. We retain the right to showcase the work in our portfolio unless otherwise agreed.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Webzard Studios shall not be liable for any indirect, incidental, or consequential damages arising from
              the use of our services or deliverables.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these terms, contact us at webzardo@gmail.com or +91 9304077781.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
