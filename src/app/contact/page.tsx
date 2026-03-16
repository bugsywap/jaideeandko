import { FullContact } from "@/components/sections/FullContact"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us | Jaidee & Ko",
  description: "Book your free strategy call today. We take on a limited number of projects per quarter to ensure premium quality.",
}

export default function ContactPage() {
  return (
    <div className="bg-background pt-32 pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform -z-10 origin-bottom-left" />
      
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24 lg:mb-32">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1 text-sm mb-6 inline-flex">
            Get in touch
          </Badge>
          <h1 className="text-5xl font-bold tracking-tighter text-foreground sm:text-7xl mb-6">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Conversation.</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/70 max-w-2xl mx-auto">
            Whether you need a full corporate documentary or a month of social media content, let's explore how we can elevate your brand.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-5 relative z-10">
          
          {/* Contact Information Side */}
          <div className="lg:col-span-2 space-y-8 flex flex-col justify-center">
            
            <div className="flex gap-x-6 p-6 rounded-2xl bg-surface border border-border transition-colors hover:border-primary/50 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                <MapPin className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-7 text-foreground">HQ</h3>
                <p className="mt-2 text-foreground/70 leading-relaxed">Singapore<br />Southeast Asia</p>
              </div>
            </div>
            
            <div className="flex gap-x-6 p-6 rounded-2xl bg-surface border border-border transition-colors hover:border-primary/50 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-7 text-foreground">Email</h3>
                <p className="mt-2 text-foreground/70 leading-relaxed">
                  <a href="mailto:hello@jaideeandko.com" className="hover:text-primary transition-colors">hello@jaideeandko.com</a>
                </p>
              </div>
            </div>
            
            <div className="flex gap-x-6 p-6 rounded-2xl bg-surface border border-border transition-colors hover:border-primary/50 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                <Clock className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-7 text-foreground">Availability</h3>
                <p className="mt-2 text-foreground/70 leading-relaxed">
                  Currently accepting <strong className="text-primary font-bold">2</strong> new clients for Q1 2026.
                </p>
              </div>
            </div>
            
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-border shadow-2xl relative">
               <div className="absolute top-0 right-0 py-2 px-4 bg-primary text-primary-foreground text-sm font-bold rounded-bl-xl rounded-tr-3xl">
                FAST RESPONSE
              </div>
              <FullContact />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
