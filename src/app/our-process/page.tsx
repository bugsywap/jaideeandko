"use client"

import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { QuickContact } from "@/components/sections/QuickContact"

const stages = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understand before we act",
    description: "We immerse in your world - goals, audience, existing assets, and what success actually looks like. Nothing moves forward without a shared foundation.",
    items: [
      { title: "Brief intake", desc: "Goals, scope, constraints" },
      { title: "Stakeholder alignment", desc: "Decision makers, sign-off flow" },
      { title: "Asset & channel audit", desc: "Existing materials reviewed" },
      { title: "Success metrics", desc: "KPIs defined upfront" },
    ]
  },
  {
    number: "02",
    title: "Strategy & Concept",
    subtitle: "Build the idea before the asset",
    description: "We develop the creative and strategic framework guiding all execution. Angles are decided, narratives shaped, and every output earns its place.",
    items: [
      { title: "Creative direction", desc: "Tone, visual language, approach" },
      { title: "Content strategy", desc: "Platform, format, message hierarchy" },
      { title: "Scripts & storyboards", desc: "Narratives mapped before shoot" },
      { title: "Client sign-off", desc: "Concept approved before build" },
    ]
  },
  {
    number: "03",
    title: "Production",
    subtitle: "Execute with precision",
    description: "Strategy becomes reality. Whether on set, in design, in code, or in copy - we execute with the same standard regardless of medium. Frictionless for your team.",
    items: [
      { title: "Scheduled execution", desc: "Shoots, sprints, design sessions" },
      { title: "Asset creation", desc: "Video, design, copy, or build" },
      { title: "Quality checkpoints", desc: "Standards enforced mid-process" },
      { title: "Client visibility", desc: "No surprises at the final stage" },
    ]
  },
  {
    number: "04",
    title: "Delivery & Review",
    subtitle: "Polish, refine, hand over",
    description: "Work goes through structured review before it reaches a client screen. Revisions are managed within agreed rounds. Every deliverable is documented for handoff.",
    items: [
      { title: "Internal QA", desc: "Review before client sees it" },
      { title: "Structured revisions", desc: "Defined rounds, clear scope" },
      { title: "Format optimisation", desc: "Outputs cut for each channel" },
      { title: "Final sign-off", desc: "Documented approval on record" },
    ]
  },
  {
    number: "05",
    title: "Distribution & Impact",
    subtitle: "Launch is not the finish line",
    description: "Delivery without distribution is a file sitting in a folder. We support the launch, advise on amplification, and track what the work achieves in the real world.",
    items: [
      { title: "Launch strategy", desc: "Timing, sequencing, platforms" },
      { title: "Publishing & scheduling", desc: "Calendars set, content deployed" },
      { title: "Amplification guidance", desc: "Paid, organic, and earned tactics" },
      { title: "Performance reporting", desc: "Outcomes measured against KPIs" },
    ]
  }
]

export default function ProcessPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform -z-10 origin-bottom-left" />
        <ScrollReveal className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center">
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-8">
            Working Methodology
          </Badge>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase leading-[1.05]">
            From Brief <br />
            <span className="text-primary italic">To Impact</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl leading-relaxed text-foreground/70 font-medium max-w-2xl">
            How every project moves - regardless of medium.
          </p>
          <p className="mt-6 text-lg text-foreground/60 max-w-3xl leading-relaxed">
            Every engagement at <span className="font-bold text-foreground">Jaidee & Ko</span> moves through five stages. The stages are consistent whether the project is a brand film, a social campaign, a design system, or a content strategy. What changes is the medium. <span className="italic text-primary font-bold">What doesn't change is the discipline.</span>
          </p>
        </ScrollReveal>
      </section>

      {/* End-to-End Flow Summary */}
      <section className="bg-surface py-24 border-b border-border/50">
        <ScrollReveal className="container mx-auto px-6 max-w-7xl">
          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40 mb-8 text-center md:text-left">
            End-To-End Flow
          </h4>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-4 justify-between items-center bg-background p-6 rounded-[2rem] border border-border/60 shadow-lg">
            {stages.map((stage, idx) => (
              <div key={stage.number} className="flex items-center gap-4 shrink-0 w-full md:w-auto justify-center md:justify-start">
                <span className="text-foreground font-black text-xs lg:text-sm uppercase tracking-widest whitespace-nowrap flex items-center group cursor-default">
                  <span className="text-primary mr-2 transition-colors">{stage.number}</span>
                  <span className="group-hover:text-primary transition-colors">{stage.title}</span>
                </span>
                {idx < stages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-border rotate-90 md:rotate-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Stages Section */}
      <section className="bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col">
            {stages.map((stage, index) => (
              <div key={stage.number} className="py-20 lg:py-32 border-b border-border/50 relative">
                <ScrollReveal>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    
                    {/* Left side: Stage Info sticky */}
                    <div className="lg:col-span-5 lg:sticky top-32">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          Stage {stage.number}
                        </span>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6 leading-none">
                        {stage.title}
                      </h2>
                      
                      <p className="text-xl italic font-medium text-foreground/60 mb-8 pl-4 border-l-2 border-primary/40 leading-snug">
                        {stage.subtitle}
                      </p>
                      
                      <p className="text-lg leading-relaxed text-foreground/70 font-medium">
                        {stage.description}
                      </p>
                    </div>
                    
                    {/* Right side: Sub-items grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-0">
                      {stage.items.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          whileHover={{ y: -5 }}
                          className="bg-surface/50 border border-border/60 p-8 rounded-[2rem] hover:bg-surface hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl group"
                        >
                          <h4 className="text-xl font-black text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-foreground/60 font-medium leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <QuickContact />
    </div>
  )
}

