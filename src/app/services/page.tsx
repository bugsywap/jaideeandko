"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Video, Share2, Users, CalendarDays, PenTool, Code2, BookOpen, Mic, Radio, MessageSquare, Briefcase, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { CallToAction } from "@/components/sections/CallToAction"

const allServices = [
  {
    id: "corporate",
    title: "Corporate & Brand Videos",
    description: "High-end visual storytelling that communicates your corporate narrative. We craft videos that build trust, authority, and social proof with your stakeholders, seamlessly communicating your message to your ideal audience.",
    icon: Video,
    image: "/img/corpo-brand.jpg",
    features: [
      "Company overviews & manifesto videos",
      "Product & service explainers",
      "Client testimonial & case study films"
    ]
  },
  {
    id: "social",
    title: "Social Media Content",
    description: "Short-form, engaging, and highly shareable content explicitly crafted to take advantage of algorithms on LinkedIn, Instagram, and TikTok to maximize your organic reach.",
    icon: Share2,
    image: "/img/soc-med.jpg",
    features: [
      "Short-form reels & TikToks",
      "Bite-sized thought leadership clips",
      "Social-first campaign assets"
    ]
  },
  {
    id: "founder",
    title: "Founder Story Videos",
    description: "Humanize your brand with authentic documentary-style profiles that capture your leadership's vision, origin story, and deeply held passion behind the business.",
    icon: Users,
    image: "/img/founder-story.JPG",
    features: [
      "Documentary-style narrative interviews",
      "Behind-the-scenes deep dives",
      "Visionary roadmap & culture videos"
    ]
  },
  {
    id: "event",
    title: "Event Coverage",
    description: "Dynamic highlight reels and keynotes that extend the lifespan and impact of your physical events, turning a one-day gathering into long-term marketing collateral.",
    icon: CalendarDays,
    image: "/img/event-coverage.jpg",
    features: [
      "High-energy event highlight reels",
      "Multi-cam keynote & speaker recordings",
      "On-site attendee testimonials"
    ]
  },
  {
    id: "seo",
    title: "Written Editorial & Blog Content",
    description: "Dominating search engines takes more than algorithms-it takes powerful writing. We provide targeted, heavily researched, and elegantly crafted blog articles designed specifically to hit your audience's intent.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=1200",
    features: [
      "High-conversion SEO keyword architecture",
      "Evergreen pillar content production",
      "Industry-specific thought leadership posts"
    ]
  },
  {
    id: "web",
    title: "Website Development",
    description: "Your digital storefront needs to convert. We build custom, ultra-fast, and deeply engaging web platforms designed for seamless user experiences and pure brand elevation.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Bespoke UI/UX design focused on conversions",
      "Next.js headless modern architecture",
      "Continuous optimization & technical SEO"
    ]
  },
  {
    id: "podcast",
    title: "Podcast Production",
    description: "Establish ultimate brand authority with a premium visual podcast. From scripting to audio engineering, we provide a full-scale studio experience producing episodes that hook your listeners.",
    icon: Mic,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Concept creation & episode scripting",
      "High-fidelity multi-track audio engineering",
      "Syndicated visual podcast formatting"
    ]
  },
  {
    id: "brand",
    title: "Digitization of Brand Guidelines",
    description: "Transform your static, outdated brand manuals into a dynamic, AI-powered online depository ensuring brand consistency across all vendors and internal teams.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Custom AI image & prompt generator setups",
      "Cloud-based dynamic asset management",
      "Interactive digital rulebooks & usage manuals"
    ]
  },
  {
    id: "live",
    title: "Live Streaming",
    description: "Seamlessly bridge the gap between physical and digital. We deploy professional multi-camera broadcasting tech to flawlessly stream your town halls, conferences, and intimate hybrid events.",
    icon: Radio,
    image: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Multi-camera live switching & production",
      "Hybrid-event platform integration",
      "On-site redundant tech setups"
    ]
  },
  {
    id: "consulting",
    title: "Communication Consultations",
    description: "Expert public relations and strategic consulting to help executive teams shape their narrative, handle press seamlessly, and gracefully navigate their public messaging frameworks.",
    icon: MessageSquare,
    image: "/img/communication-consultation.png",
    features: [
      "Crisis management playbook creation",
      "Executive media training & mock interviews",
      "Strategic PR narrative development"
    ]
  },
  {
    id: "cco",
    title: "Fractional CCO Services",
    description: "Gain executive-level creative leadership on a reliable retainer. We map your overarching brand strategy and oversee all creative engines without the exorbitant cost of full-time overhead.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Overarching content strategy & roadmapping",
      "Creative team & vendor management",
      "Quarterly KPI oversight & optimization"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-border text-center flex flex-col items-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(117, 185, 162, 0.08) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal>
            <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] mb-6">
              Our Capabilities
            </Badge>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.05] uppercase">
              End-to-End <span className="text-primary italic">Creative.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-foreground/70 font-medium max-w-3xl mx-auto">
              We provide a full suite of strategic narrative and visual storytelling services designed to elevate your brand presence and radically maximize impact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-surface relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col gap-32">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal 
                   key={service.id} 
                  className={`flex flex-col gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image Block */}
                  <div className="w-full lg:w-1/2 scroll-mt-40 lg:scroll-mt-[25vh]" id={service.id}>
                    <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-border/50 bg-black">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                      
                      <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Text Block */}
                  <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors uppercase tracking-widest text-[10px] font-black pointer-events-none">
                        Service {String(index + 1).padStart(2, '0')}
                      </Badge>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-6 uppercase leading-tight">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-foreground/70 leading-relaxed font-medium mb-10">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-10 bg-background/50 rounded-3xl p-8 border border-border">
                      <h4 className="text-sm font-black uppercase tracking-widest text-foreground pb-2 border-b border-border/50">Core Deliverables</h4>
                      <ul className="space-y-4 pt-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground font-semibold">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary hover:text-foreground transition-colors group self-start"
                    >
                      Inquire about this service
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction 
        title={<>Need a tailored <span className="text-primary italic">solution</span>?</>}
        description="Whether you need a massive brand overhaul or ongoing social clips, we've got you covered."
      />
    </div>
  )
}
