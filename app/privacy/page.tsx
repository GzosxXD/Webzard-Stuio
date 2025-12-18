import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-extralight tracking-tight text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">Last updated: December 2024</p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you contact us through our website, we collect information you provide directly, including your name,
              email address, phone number, and any other information you choose to share in your message.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to respond to your inquiries, provide our web development services,
              communicate about project updates, and improve our services.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. This does not
              include trusted third parties who assist us in operating our business, provided they agree to keep this
              information confidential.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement reasonable security measures to protect your personal information. However, no method of
              transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at webzardo@gmail.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
