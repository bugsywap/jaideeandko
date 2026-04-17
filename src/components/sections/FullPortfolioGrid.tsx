"use client"

import { useState, useMemo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Play, Filter, LayoutGrid, MonitorPlay, Calendar, Heart, ArrowRight, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { caseStudies } from "@/data/case-studies"
import type { CaseStudy } from "@/data/case-studies"

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
  "Kaleoscopic Communications": "/img/V1_White.webp",
  "NIE": "/img/NIE.png",
  "Ministry of Manpower": "/img/mom.png",
  "Workforce Singapore": "/img/wsg.png",
  "Mentem": "/img/mentum NSW.png",
}

const getFilterCategory = (client: string) => {
  const govt = ["Enterprise Singapore", "Land Transport Authority", "NIE", "Ministry of Manpower", "Workforce Singapore"];
  const mission = ["Young Founders School", "3 Degrees", "Green Chapter", "Productivity Joy"];
  if (govt.includes(client)) return "government";
  if (mission.includes(client)) return "mission-driven";
  return "corporates";
}

const categories = [
  { id: "all", name: "All Work", icon: LayoutGrid },
  { id: "corporates", name: "Corporates & Industry", icon: MonitorPlay },
  { id: "government", name: "Government & Public", icon: Calendar },
  { id: "mission-driven", name: "Mission-Driven", icon: Heart },
]

function CaseStudyCard({ study }: { study: CaseStudy }) {
  // Directly linking to the case study page
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group/card flex flex-col gap-4 h-full"
    >
      <Link href={`/case-studies/${study.slug}`} className="block relative aspect-video rounded-2xl overflow-hidden bg-black border border-border/50 shadow-lg cursor-pointer">
        {/* Thumbnail Preview */}
        <img 
          src={`https://vumbnail.com/${study.vimeoId}.jpg?width=1280`} 
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/20 transition-colors" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white scale-90 group-hover/card:scale-100 transition-transform duration-300 shadow-2xl">
            <Play className="w-5 h-5 fill-current ml-1" />
          </div>
        </div>

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/90 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border-none shadow-xl">
            {study.category}
          </Badge>
        </div>
      </Link>

      {/* Card Content */}
      <div className="flex flex-col gap-3 px-2 flex-grow">
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
          <Link href={`/case-studies/${study.slug}`} className="hover:text-primary transition-colors block">
            <h3 className="text-foreground text-lg md:text-xl font-bold tracking-tight line-clamp-2">
              {study.title}
            </h3>
          </Link>
        </div>

        <p className="text-foreground/70 text-sm line-clamp-3 leading-relaxed">
          {study.description}
        </p>
        
        <div className="mt-auto pt-4">
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
  )
}

export function FullPortfolioGrid() {
  const [filter, setFilter] = useState("all")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Generate mapped cases with their internal filter
  const mappedStudies = useMemo(() => {
    return caseStudies.map(study => ({
      ...study,
      internalFilter: getFilterCategory(study.client)
    }))
  }, [])

  const filteredItems = useMemo(() =>
    filter === "all" ? mappedStudies : mappedStudies.filter(item => item.internalFilter === filter)
  , [filter, mappedStudies])

  const handleFilterClick = (id: string) => {
    setFilter(id);
    setIsDropdownOpen(false);
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
      
      {/* Sticky Left Sidebar */}
      <div className="w-full lg:w-64 shrink-0 lg:sticky lg:top-32 flex flex-col gap-4 lg:gap-6 z-20 bg-background/80 backdrop-blur-3xl p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] border border-border/50 shadow-2xl relative">
        <div className="hidden lg:flex items-center gap-3 text-foreground/50 text-[10px] font-black uppercase tracking-[0.2em] mb-2 pb-6 border-b border-border/50">
          <Filter className="w-4 h-4" />
          Filter Collection
        </div>

        {/* Mobile Dropdown Toggle */}
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex lg:hidden items-center justify-between w-full bg-surface border border-border/50 px-5 py-4 rounded-2xl hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-widest text-foreground">
            <Filter className="w-4 h-4 text-primary" />
            {categories.find(c => c.id === filter)?.name || "Filter Collection"}
          </div>
          <ChevronDown className={cn("w-4 h-4 text-foreground/50 transition-transform duration-300", isDropdownOpen && "rotate-180")} />
        </button>
        
        {/* Filter Options */}
        <div className={cn(
          "flex-col gap-2 overflow-hidden transition-all duration-300 lg:!flex lg:gap-3",
          isDropdownOpen ? "flex" : "hidden"
        )}>
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = filter === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative group w-full text-left shrink-0",
                  isActive ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-100 lg:scale-105" : "bg-surface text-foreground/90 border border-border/50 hover:border-primary/50 hover:text-foreground hover:bg-white/5"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5 shrink-0 transition-colors", isActive ? "text-primary-foreground" : "text-primary group-hover:scale-110")} />
                <span className="relative z-10 whitespace-normal leading-tight">{cat.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="flex-1 min-w-0 w-full">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            <motion.div
              key={filter}
              layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12"
            >
              {filteredItems.map(study => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-32 flex flex-col items-center justify-center text-center border border-dashed border-border/50 rounded-[3rem] bg-surface/10"
            >
              <LayoutGrid className="w-12 h-12 text-border mb-6" />
              <p className="text-foreground/50 text-lg font-medium tracking-wide max-w-sm">
                No case studies found for this category. Check back soon for more work.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
    </div>
  )
}
