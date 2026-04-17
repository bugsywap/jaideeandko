"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { CallToAction } from "@/components/sections/CallToAction"
import { cn } from "@/lib/utils"

const stages = [
  {
    number: "01",
    id: "stage-01",
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
    id: "stage-02",
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
    id: "stage-03",
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
    id: "stage-04",
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
    id: "stage-05",
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
  const [activeStage, setActiveStage] = useState(0)
  const [isFloating, setIsFloating] = useState(false)
  const ghostRef = useRef<HTMLDivElement>(null)
  const stageRefs = useRef<(HTMLDivElement | null)[]>([])

  // State Tracking: Monitor scroll position for the "Floating" state
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFloating(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: "-100px 0px 0px 0px" }
    )

    if (ghostRef.current) {
      observer.observe(ghostRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Active Stage Tracking
  useEffect(() => {
    const stageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stageRefs.current.findIndex(ref => ref === entry.target)
            if (index !== -1) setActiveStage(index)
          }
        })
      },
      { threshold: 0.1, rootMargin: "-20% 0px -30% 0px" }
    )

    stageRefs.current.forEach((ref) => {
      if (ref) stageObserver.observe(ref)
    })

    return () => stageObserver.disconnect()
  }, [])

  const scrollToStage = (index: number) => {
    const target = stageRefs.current[index]
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Article Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform -z-10 origin-bottom-left" />
        <ScrollReveal className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center">
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            Working Methodology
          </Badge>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-foreground uppercase leading-[1] mb-8">
            From Brief <br />
            <span className="text-primary italic">To Impact</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl leading-relaxed text-foreground/70 font-medium max-w-2xl">
            Our systematic framework for predictable creative success.
          </p>
        </ScrollReveal>
      </section>

      {/* Ghost Anchor for original design placement */}
      <div ref={ghostRef} className="container mx-auto px-6 max-w-7xl pt-24">
        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20 mb-8 text-center md:text-left">
          End-To-End Flow
        </h4>
        
        {/* INTERACTIVE COMPONENT 1: Inline Nav (Fades out when floating) */}
        <div className="min-h-[120px] w-full relative">
          <AnimatePresence>
            {!isFloating && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-3 md:gap-1 lg:gap-3 justify-between items-stretch md:items-center bg-transparent md:bg-background md:p-5 md:rounded-[2rem] md:border md:border-border/60 md:shadow-lg"
              >
                {stages.map((stage, idx) => (
                  <button
                    key={stage.number}
                    onClick={() => scrollToStage(idx)}
                    className={cn(
                      "group flex flex-col md:flex-row items-center gap-3 shrink-0 transition-all duration-300 w-full md:w-auto relative",
                      "p-4 md:p-0 rounded-2xl md:rounded-none border border-border/50 md:border-none shadow-sm md:shadow-none hover:shadow-md md:hover:shadow-none",
                      activeStage === idx ? "bg-primary/5 border-primary/30" : "bg-surface md:bg-transparent"
                    )}
                  >
                    <div className="flex items-center gap-4 w-full justify-between md:justify-start">
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-10 h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-[10px] font-black transition-all duration-500 border-2 shrink-0",
                          activeStage === idx 
                            ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] scale-110" 
                            : "bg-background text-foreground/40 border-border group-hover:border-primary/50 group-hover:text-primary"
                        )}>
                          {stage.number}
                        </div>

                        <span className={cn(
                          "text-foreground font-black text-xs md:text-[10px] lg:text-xs uppercase tracking-widest whitespace-nowrap transition-colors text-left",
                          activeStage === idx ? "text-primary" : "group-hover:text-primary"
                        )}>
                          {stage.title}
                        </span>
                      </div>
                      
                      {/* Mobile Action Indicator */}
                      <ArrowRight className={cn(
                        "w-4 h-4 transition-transform md:hidden duration-300",
                        activeStage === idx ? "text-primary" : "text-border opacity-50 group-hover:text-primary -rotate-45 group-hover:rotate-0"
                      )} />
                    </div>

                    {/* Desktop Arrow Right indicator */}
                    {idx < stages.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-border hidden md:block opacity-30 ml-2" />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* INTERACTIVE COMPONENT 2: Floating Nav (Fades in when scrolling down) */}
      <AnimatePresence>
        {isFloating && (
          <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-8 p-6 bg-background/80 backdrop-blur-3xl border border-primary/20 rounded-[2.5rem] shadow-[0_0_60px_rgba(0,0,0,0.15)] py-12 w-fit"
          >
            {stages.map((stage, idx) => (
              <button
                key={stage.number}
                onClick={() => scrollToStage(idx)}
                className="group relative flex flex-col items-center gap-1 w-full"
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-500 border-2",
                  activeStage === idx 
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] scale-110" 
                    : "bg-background text-foreground/40 border-border group-hover:border-primary/50 group-hover:text-primary"
                )}>
                  {stage.number}
                </div>

                {/* Vertical Active Line Indicator */}
                {activeStage === idx && (
                  <motion.div 
                    layoutId="active-nav-dot"
                    className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-1.5 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)]"
                  />
                )}

                {/* Floating Tooltip Label */}
                <div className="absolute left-full ml-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
                  <span className="bg-foreground text-background text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-2xl border border-foreground/10">
                    {stage.title}
                  </span>
                </div>
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Floating Pill (Always Fades in/out) */}
      <AnimatePresence>
        {isFloating && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] xl:hidden"
          >
            <div className="flex bg-background/90 backdrop-blur-2xl p-3 rounded-full border border-primary/20 shadow-2xl gap-2">
              {stages.map((stage, idx) => (
                <button
                  key={stage.number}
                  onClick={() => scrollToStage(idx)}
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-[10px] font-black transition-all",
                    activeStage === idx 
                      ? "bg-primary text-primary-foreground shadow-lg scale-110" 
                      : "text-foreground/40 hover:text-primary"
                  )}
                >
                  {stage.number}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stages Detail Section */}
      <section className="bg-background pt-12 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col">
            {stages.map((stage, index) => (
              <div 
                key={stage.number} 
                ref={(el) => { (stageRefs.current[index] = el) }}
                className="py-16 md:py-24 lg:py-32 border-b border-border/50 relative overflow-hidden shrink-0 scroll-mt-[150px]"
              >
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/4" />
                
                <ScrollReveal>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    
                    {/* Left: Stage Info */}
                    <div className="lg:col-span-5 lg:sticky top-40 z-10 transition-opacity duration-700 hover:opacity-100" style={{ opacity: activeStage === index ? 1 : 0.4 }}>
                      <motion.div>
                        <div className="flex items-center gap-4 mb-8">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 shadow-sm">
                            Phase {stage.number}
                          </span>
                        </div>
                        
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-foreground mb-8 leading-[0.95]">
                          {stage.title}
                        </h2>
                        
                        <p className="text-xl md:text-2xl italic font-medium text-foreground/50 mb-8 pl-6 border-l-4 border-primary/30 leading-snug">
                          {stage.subtitle}
                        </p>
                        
                        <p className="text-lg md:text-xl leading-relaxed text-foreground/70 font-medium max-w-xl mb-12">
                          {stage.description}
                        </p>

                        <div className="flex items-center gap-8">
                           {index < stages.length - 1 && (
                             <button 
                              onClick={() => scrollToStage(index + 1)}
                              className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-primary hover:text-foreground transition-all px-8 py-4 border border-primary/20 rounded-full bg-primary/5 hover:bg-primary/10"
                             >
                               Next Phase <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                             </button>
                           )}
                           <span className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.6em]">
                             {index + 1} // {stages.length}
                           </span>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Right: Sub-items */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 lg:mt-8">
                      {stage.items.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          className="bg-surface/50 border border-border/40 hover:border-primary/30 transition-all duration-500 rounded-[2rem] p-8 md:p-10 flex flex-col group overflow-hidden relative shadow-sm hover:shadow-xl hover:bg-surface"
                        >
                          {/* Giant Background Watermark */}
                          <div className="absolute -right-2 -bottom-6 text-[100px] lg:text-[120px] font-black text-foreground/[0.03] group-hover:text-primary/10 transition-colors leading-none tracking-tighter select-none pointer-events-none">
                            0{idx + 1}
                          </div>

                          <div className="flex flex-col relative z-10 h-full">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-black text-xs text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                               0{idx + 1}
                            </div>
                            <h4 className="text-lg md:text-xl font-black text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-foreground/60 font-medium leading-[1.7] text-sm md:text-base mt-auto">
                              {item.desc}
                            </p>
                          </div>
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

      <CallToAction 
        title={<>Ready to start the <span className="text-primary italic font-black">process</span>?</>}
        description="We make video production seamless and predictable. Let's schedule a Consultation today."
      />
    </div>
  )
}
