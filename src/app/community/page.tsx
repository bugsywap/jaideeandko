"use client"

import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import Link from "next/link"
import { ArrowLeft, Users, CalendarDays, Mic, Network } from "lucide-react"

export default function CommunityComingSoonPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-primary/10 blur-[150px] -z-10 rounded-full animate-pulse" />
      <div className="absolute -bottom-32 -right-64 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

      <div className="container mx-auto px-6 max-w-4xl pt-32 pb-32">
        <div className="flex flex-col items-center text-center">
          
          <ScrollReveal>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="w-24 h-24 mb-10 rounded-full bg-surface border border-border/50 flex items-center justify-center shadow-2xl relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse opacity-20" />
              <Users className="w-10 h-10 text-primary" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Badge variant="outline" className="border-primary/50 text-opacity-100 text-primary bg-primary/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] mb-6">
              Launching Soon
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.0] mb-8">
              The Jaidee <span className="text-primary italic">Community.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/60 max-w-2xl mx-auto font-medium mb-16">
              We are building an exclusive, invite-only network of communication leaders, founders, and creative executives. Expect physical meetups, digital roundtables, and high-level networking.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="p-6 rounded-[2rem] bg-surface/30 border border-border/50 flex flex-col items-center gap-4 text-center">
                <Network className="w-6 h-6 text-foreground/50" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Networking</h3>
              </div>
              <div className="p-6 rounded-[2rem] bg-surface/30 border border-border/50 flex flex-col items-center gap-4 text-center">
                <CalendarDays className="w-6 h-6 text-foreground/50" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Live Events</h3>
              </div>
              <div className="p-6 rounded-[2rem] bg-surface/30 border border-border/50 flex flex-col items-center gap-4 text-center">
                <Mic className="w-6 h-6 text-foreground/50" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Roundtables</h3>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  )
}
