import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | Webzard Studios",
  description: "Get in touch with Webzard Studios for your web development needs.",
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-20 pb-16 sm:pb-24 lg:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-sm font-medium text-gold uppercase tracking-wider">Get In Touch</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-foreground text-balance">
              Contact Us
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your project? Reach out and let's discuss how we can help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-6 bg-card rounded-2xl border border-border">
                <Mail className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:webzardo@webzardstudios.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  webzardo@webzardstudios.com
                </a>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border">
                <Phone className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                <a href="tel:+919304087781" className="text-muted-foreground hover:text-foreground transition-colors">
                  +91 9304087781
                </a>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border">
                <MapPin className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">Remote-first · Globally located</p>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border">
                <Clock className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Response Time</h3>
                <p className="text-muted-foreground">Within 24 hours</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 sm:p-10 bg-card rounded-2xl border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input id="name" type="text" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input id="subject" type="text" placeholder="How can we help?" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-navy hover:bg-navy-light text-primary-foreground py-6">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
