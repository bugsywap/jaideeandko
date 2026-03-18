"use client"

import { FullPortfolioGrid } from "@/components/sections/FullPortfolioGrid"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function PortfolioPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Elegant Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] -z-10 rounded-full animate-pulse fill-mode-both" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 relative">
            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5 px-5 py-2 text-xs font-black uppercase tracking-[0.3em]">
              Selected Works
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.9] drop-shadow-sm">
              Work that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 italic">transforms.</span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/60 max-w-2xl font-medium tracking-tight">
              We partner with global brands and small teams to turn complex narratives into approachable visual storytelling. Explore our collection of corporate visions and social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Container */}
      <section className="container mx-auto px-6 max-w-[1600px] pb-32">
        <FullPortfolioGrid />
      </section>
      
      {/* Bottom Conversion Banner */}
      <section className="bg-surface/30 border-t border-border/50 py-32">
        <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic text-foreground">
                Ready to create <span className="text-primary italic">your</span> story?
            </h2>
            <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto font-medium">
                Let's collaborate to bring your vision to life with cinematic precision and strategic impact.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                <a href="/contact" className="px-10 py-5 bg-primary text-primary-foreground rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-primary/30 text-xs">
                    Start a project
                </a>
                <a href="https://calendar.app.google/nmJKmi3iousxouhX6" target="_blank" className="px-10 py-5 border-2 border-primary text-primary rounded-full font-black uppercase tracking-widest hover:bg-primary/5 transition-all text-xs">
                    Book a call
                </a>
            </div>
        </div>
      </section>
    </div>
  )
}
