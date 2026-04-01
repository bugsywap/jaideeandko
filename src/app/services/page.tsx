"use client"

import * as React from "react"
import { QuickContact } from "@/components/sections/QuickContact"
import { Pricing } from "@/components/ui/pricing-cards"
import { Badge } from "@/components/ui/badge"
import { Video, Share2, Users, CalendarDays, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

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
    <div className="bg-background min-h-[80vh] flex items-center justify-center pt-32 pb-16 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(117, 185, 162, 0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <ScrollReveal className="flex flex-col items-center text-center max-w-2xl mx-auto gap-8 transition-all">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em]">
            System Update
          </Badge>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-foreground leading-[1.1]">
              Services Under <span className="text-primary italic">Maintenance.</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/70 font-medium">
              We're currently refining our service packages to better serve your visual storytelling needs. We'll be back shortly with a more powerful offering.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
            <Link 
              href="/" 
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20"
            >
              Back to Home
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/contact" 
              className="px-8 py-4 text-sm font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors border-2 border-border hover:border-primary rounded-full"
            >
              Contact Us
            </Link>
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 mt-12">
            Estimated Uptime: Q2 2026
          </p>
        </ScrollReveal>
      </div>
    </div>
  )
}
