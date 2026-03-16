import * as React from "react"
import { QuickContact } from "@/components/sections/QuickContact"
import { Pricing } from "@/components/ui/pricing-cards"
import { Badge } from "@/components/ui/badge"
import { Video, Share2, Users, CalendarDays, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Video Production Services | Jaidee & Ko Singapore",
  description: "Corporate video, social media content, event coverage, and founder stories crafted to drive B2B engagement and social proof.",
}

const services = [
  {
    id: "corporate",
    title: "Corporate & Brand Videos",
    description: "High-end visual storytelling that communicates your corporate narrative. We craft videos that build trust, authority, and social proof with your stakeholders.",
    icon: Video,
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
    features: [
      "Company overviews & manifesto videos",
      "Product & service explainers",
      "Client testimonial & case study films"
    ]
  },
  {
    id: "social",
    title: "Social Media Content",
    description: "Short-form, engaging, and highly shareable content designed specifically algorithms on LinkedIn, Instagram, and TikTok to maximize organic reach.",
    icon: Share2,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    features: [
      "Short-form reels & TikToks",
      "Bite-sized thought leadership clips",
      "Social-first campaign assets"
    ]
  },
  {
    id: "founder",
    title: "Founder Story Videos",
    description: "Humanize your brand with authentic documentary-style profiles that capture your leadership's vision, origin story, and deeply held passion.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=800",
    features: [
      "Documentary-style interviews",
      "Behind-the-scenes deep dives",
      "Visionary roadmap & culture videos"
    ]
  },
  {
    id: "event",
    title: "Event Coverage",
    description: "Dynamic highlight reels and keynotes that extend the lifespan and impact of your physical events, turning a one-day gathering into long-term marketing collateral.",
    icon: CalendarDays,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    features: [
      "High-energy event highlight reels",
      "Multi-cam keynote recordings",
      "On-site attendee testimonials"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-background pt-32 pb-16 overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-7xl mb-24 lg:mb-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6 sm:mt-12 relative z-10">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1 text-sm">
            Expertise
          </Badge>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
            Visual storytelling built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">impact.</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/70 mt-4 max-w-2xl">
            We partner with B2B brands, NGOs, and founders to create high-performing visual assets that communicate complex ideas simply and beautifully.
          </p>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col gap-24 lg:gap-40">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <React.Fragment key={service.id}>
                <div 
                  id={service.id} 
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 relative group px-6 lg:px-0 z-10">
                    {/* Decorative Background Block */}
                    <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] transform rotate-3 group-hover:rotate-1 transition-all duration-500 z-0"></div>
                    
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-border z-10 bg-surface">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Floating Icon */}
                    <div className="absolute -bottom-6 -right-2 lg:-bottom-8 lg:-right-8 bg-surface p-4 lg:p-6 rounded-2xl border border-border shadow-xl text-primary transition-transform duration-500 group-hover:-translate-y-2 z-20">
                      <service.icon className="w-8 h-8 lg:w-10 lg:h-10 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:px-8 z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-foreground/70">
                      {service.description}
                    </p>
                    
                    <ul className="mt-6 flex flex-col gap-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-foreground/80 font-medium text-lg">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-8 border-t border-border/60">
                      <Link 
                        href={`/our-work?filter=${service.id === 'event' ? 'all' : service.id}`} 
                        className="inline-flex items-center text-primary font-bold text-lg hover:text-primary/80 transition-colors group/link"
                      >
                        View related work 
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {service.id === 'event' && (
                  <div className="mt-8 lg:mt-16 border-t border-border/50 pt-16">
                    <Pricing />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-32 lg:mt-48 pb-8 relative">
        <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform -z-10 origin-bottom-left" />
        <div className="container mx-auto px-6 max-w-7xl pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">Ready to elevate your brand?</h2>
            <p className="mt-2 text-lg leading-8 text-foreground/70 text-center max-w-2xl mx-auto">
              Custom packages starting from SGD 3,500. Let's discuss how our capabilities align with your strategic goals.
            </p>
          </div>
          <QuickContact />
        </div>
      </div>
    </div>
  )
}
