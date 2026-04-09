"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { Play, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { caseStudies } from "@/data/case-studies"

const clientLogoMap: Record<string, string> = {
  "AIA": "/img/AIA.png",
  "Young Founders School": "/img/sch1.png",
  "3 Degrees": "/img/3-deg.png",
  "Green Chapter": "/img/GClogo_No Background.png",
  "Enterprise Singapore": "/img/es_1ceXgYdj.png",
  "Accenture": "/img/accenture-2.png",
  "UOB Asset Management": "/img/uob_e.png",
  "Meltwater": "/img/meltwa.png",
  "Wealth GPS": "/img/Wealth GPS.png",
  "Productivity Joy": "/img/productivity.png",
  "Land Transport Authority": "/img/land-transport-authority.png",
  "Kaleoscopic Communications": "/img/anext_bank1.png",
  "NIE": "/img/NIE.png",
  "Ministry of Manpower": "/img/mom.png",
  "Workforce Singapore": "/img/wsg.png",
  "Mentem": "/img/mentum NSW.png",
}
export function CaseStudyCarousel() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="py-24 bg-surface/30 border-b border-border/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">
              Our Track Record
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Case Studies in <span className="text-primary italic">Action</span>
            </h2>
            <p className="mt-4 text-base text-foreground/70">
              Discover how we've helped leading organisations tell their stories through high-impact visual content.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-border/50 hover:border-primary hover:text-primary transition-all disabled:opacity-30"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-border/50 hover:border-primary hover:text-primary transition-all disabled:opacity-30"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative">
          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 cursor-grab active:cursor-grabbing"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.slug}
                className="min-w-[300px] md:min-w-[450px] snap-start"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-border/50 shadow-lg group/card">
                    {/* Thumbnail / Video */}
                    <AnimatePresence mode="wait">
                      {activeVideo === study.vimeoId ? (
                        <motion.div 
                          key="video"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 z-20"
                        >
                          <iframe
                            src={`https://player.vimeo.com/video/${study.vimeoId}?autoplay=1&byline=0&title=0&portrait=0`}
                            className="w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                          />
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="thumb"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 z-10 cursor-pointer"
                          onClick={() => setActiveVideo(study.vimeoId)}
                        >
                          <img 
                            src={`https://vumbnail.com/${study.vimeoId}.jpg?width=1280`} 
                            alt={study.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/20 transition-colors" />
                          
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white scale-90 group-hover/card:scale-100 transition-transform duration-300">
                              <Play className="w-5 h-5 fill-current ml-1" />
                            </div>
                          </div>

                          {/* Category Tag */}
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary/90 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border-none">
                              {study.category}
                            </Badge>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col gap-3 px-2">
                    <div>
                      {clientLogoMap[study.client] ? (
                        <div className="flex items-center justify-start h-6 md:h-7 mb-2">
                          <img 
                            src={clientLogoMap[study.client]} 
                            alt={`${study.client} logo`}
                            className="h-full w-auto object-contain object-left"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <p className="text-foreground/50 text-[10px] font-black uppercase tracking-tighter mb-1">
                          {study.client}
                        </p>
                      )}
                      <h3 className="text-foreground text-lg font-bold tracking-tight line-clamp-1">
                        {study.title}
                      </h3>
                    </div>

                    <p className="text-foreground/70 text-sm line-clamp-2 leading-relaxed">
                      {study.description}
                    </p>
                    
                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-primary text-xs font-bold gap-1.5 hover:gap-2 transition-all uppercase tracking-wider group/link"
                    >
                      Read more 
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Spacer for end of carousel */}
            <div className="min-w-[100px] shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
