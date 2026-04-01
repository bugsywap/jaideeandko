"use client"

import { Badge } from "@/components/ui/badge"
import { Search, PenTool, Video, Share2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const processes = [
  {
    step: "01",
    title: "Discovery & Audit",
    description: "We start by getting to know you, your values, mission, vision, and culture. We run a comprehensive audit of your current visual assets and social presence to identify gaps and opportunities.",
    icon: Search
  },
  {
    step: "02",
    title: "Strategy & Scripting",
    description: "We create a content strategy unique to your brand and industry. We collaborate closely with your stakeholders to fast-track ideas, conceptualize narratives, and draft scripts that capture your unique expertise.",
    icon: PenTool
  },
  {
    step: "03",
    title: "Production",
    description: "Our cinematic crew handles everything from lighting to audio and filming. We ensure a frictionless, professional set environment so your team feels comfortable and authentic on camera.",
    icon: Video
  },
  {
    step: "04",
    title: "Post-Production",
    description: "We edit, color-grade, and sound-design a polished final product tailored to your needs. Optionally, we assist with thumbnail design, hook titles, and posting calendars for maximum social reach.",
    icon: Share2
  }
]

export default function ProcessPage() {
  return (
    <div className="bg-background pt-32 pb-16 overflow-hidden">
      {/* Hero Section */}
      <ScrollReveal className="container mx-auto px-6 max-w-7xl mb-16 lg:mb-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6 sm:mt-12 relative z-10">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1 text-sm">
            Methodology
          </Badge>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
            How we make <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">magic.</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/70 mt-4 max-w-2xl">
            We don't just point a camera and shoot. We build strategic social assets through a refined, frictionless process.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform -z-10 origin-bottom-left" />
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {processes.map((process, idx) => (
              <ScrollReveal key={process.step} delay={idx * 0.1}>
                <Card className="bg-surface border-border overflow-hidden group hover:border-primary transition-colors duration-300 h-full">
                  <CardHeader className="pb-4 relative">
                    <div className="absolute top-0 right-0 p-6 text-6xl font-bold text-foreground/5 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2">
                      {process.step}
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                      <process.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground z-10 relative">
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 leading-relaxed text-lg z-10 relative">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
