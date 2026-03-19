"use client"

import { useState, useMemo, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Play, Pause, ArrowRight, Filter, LayoutGrid, MonitorPlay, Smartphone, Calendar, Heart } from "lucide-react"
import { VimeoPlayer, type VimeoPlayerRef } from "@/components/ui/VimeoPlayer"

interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  category: string;
  vimeoId?: string;
  image?: string;
  slug: string;
}

const portfolioItems: PortfolioItem[] = [
  // --- SOCIAL VIDEOS (9:16) ---
  {
    id: 1,
    title: "Social Impact I",
    client: "3 Degrees",
    category: "social",
    vimeoId: "1020466051",
    slug: "/our-work/social-1"
  },
  {
    id: 2,
    title: "Founder Perspectives",
    client: "Innovate SG",
    category: "social",
    vimeoId: "1026056505",
    slug: "/our-work/social-2"
  },
  {
    id: 3,
    title: "Vertical Storytelling",
    client: "TechAsia",
    category: "social",
    vimeoId: "1021485785",
    slug: "/our-work/social-3"
  },
  {
    id: 4,
    title: "Brand Engagement",
    client: "Global Finance",
    category: "social",
    vimeoId: "1021486218",
    slug: "/our-work/social-4"
  },
  {
    id: 5,
    title: "Creative Reel",
    client: "Creative Hub",
    category: "social",
    vimeoId: "1026056187",
    slug: "/our-work/social-5"
  },
  {
    id: 6,
    title: "NGO Spotlight",
    client: "NGO Connect",
    category: "social",
    vimeoId: "1026056303",
    slug: "/our-work/social-6"
  },
  {
    id: 7,
    title: "Momentum",
    client: "Venture Partners",
    category: "social",
    vimeoId: "1021485735",
    slug: "/our-work/social-7"
  },
  {
    id: 8,
    title: "Visual Narrative",
    client: "Story Haus",
    category: "social",
    vimeoId: "1026056396",
    slug: "/our-work/social-8"
  },

  // --- CORPORATE VIDEOS (16:9) ---
  {
    id: 9,
    title: "Corporate Vision 2025",
    client: "Enterprise SG",
    category: "corporate",
    vimeoId: "1131310388",
    slug: "/our-work/corp-1"
  },
  {
    id: 10,
    title: "Strategic Partnerships",
    client: "Accenture",
    category: "corporate",
    vimeoId: "1131319086",
    slug: "/our-work/corp-2"
  },
  {
    id: 11,
    title: "Innovation Summit",
    client: "Tech Summit",
    category: "corporate",
    vimeoId: "1021466679",
    slug: "/our-work/corp-3"
  },
  {
    id: 12,
    title: "Global Leadership",
    client: "Meltwater",
    category: "corporate",
    vimeoId: "1021463357",
    slug: "/our-work/corp-4"
  },
  {
    id: 13,
    title: "Founder Journey",
    client: "3 Degrees",
    category: "corporate",
    vimeoId: "1021494730",
    slug: "/our-work/corp-5"
  },
  {
    id: 14,
    title: "Sustainable Future",
    client: "UOB Asset Management",
    category: "corporate",
    vimeoId: "738471780",
    slug: "/our-work/corp-6"
  },
  {
    id: 15,
    title: "Community Impact",
    client: "Young Founders",
    category: "corporate",
    vimeoId: "1021450871",
    slug: "/our-work/corp-7"
  },
  {
    id: 16,
    title: "Digital Transformation",
    client: "Standard Chartered",
    category: "corporate",
    vimeoId: "1131316789",
    slug: "/our-work/corp-8"
  },
  {
    id: 17,
    title: "Excellence in Motion",
    client: "Singtel",
    category: "corporate",
    vimeoId: "1131316295",
    slug: "/our-work/corp-9"
  },
  {
    id: 18,
    title: "Future of Finance",
    client: "DBS Bank",
    category: "corporate",
    vimeoId: "1021465916",
    slug: "/our-work/corp-10"
  },
  {
    id: 19,
    title: "Impact Storytelling",
    client: "WWF Singapore",
    category: "corporate",
    vimeoId: "1021483669",
    slug: "/our-work/corp-11"
  },
  {
    id: 20,
    title: "Corporate Resilience",
    client: "Sembcorp",
    category: "corporate",
    vimeoId: "1021466316",
    slug: "/our-work/corp-12"
  },
  {
    id: 21,
    title: "Beyond the Screen",
    client: "Mediacorp",
    category: "corporate",
    vimeoId: "1021466066",
    slug: "/our-work/corp-13"
  },
  {
    id: 22,
    title: "Global Reach",
    client: "Singapore Airlines",
    category: "corporate",
    vimeoId: "1021467300",
    slug: "/our-work/corp-14"
  },
  {
    id: 23,
    title: "Innovation Hub",
    client: "JTC Corporation",
    category: "corporate",
    vimeoId: "1131318031",
    slug: "/our-work/corp-15"
  }
]

const categories = [
  { id: "all", name: "All Work", icon: LayoutGrid },
  { id: "corporate", name: "Corporate Video", icon: MonitorPlay },
  { id: "social", name: "Social Video", icon: Smartphone },
  { id: "event", name: "Event", icon: Calendar },
  { id: "ngo", name: "NGO", icon: Heart },
]

// --- Portfolio Card Sub-component ---
function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef<VimeoPlayerRef>(null)
  
  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const nextState = !isPlaying
    setIsPlaying(nextState)
    
    if (nextState) {
      playerRef.current?.play()
    } else {
      playerRef.current?.pause()
    }
  }

  const thumbnailUrl = item.image || (item.vimeoId ? `https://vumbnail.com/${item.vimeoId}.jpg` : null)

  return (
    <article className="group relative flex flex-col">
      <div className="relative w-full overflow-hidden rounded-[2rem] bg-surface/10 backdrop-blur-2xl border border-border/10 shadow-lg aspect-[4/5] flex items-center justify-center">
        {thumbnailUrl && (
          <img 
            src={thumbnailUrl} 
            alt="" 
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              isPlaying ? "opacity-0" : "opacity-100"
            )} 
          />
        )}
        {item.vimeoId ? (
          <>
            {/* Play/Pause Overlay */}
            <button 
              onClick={togglePlay}
              className={cn(
                "absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 group/btn bg-black/0 hover:bg-black/10",
                isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
              )}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-transform duration-500 group-hover/btn:scale-110 shadow-2xl">
                {isPlaying ? (
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-6 bg-white rounded-full opacity-90 shadow-sm" />
                    <div className="w-1.5 h-6 bg-white rounded-full opacity-90 shadow-sm" />
                  </div>
                ) : (
                  <Play className="w-8 h-8 text-white fill-white ml-1 opacity-90 drop-shadow-sm" />
                )}
              </div>
            </button>

            {item.category === "social" ? (
              <div className="absolute inset-0 w-full h-full z-10">
                <VimeoPlayer
                  ref={playerRef}
                  vimeoId={item.vimeoId}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[142%]"
                />
              </div>
            ) : (
              <div className="w-full aspect-video relative z-10 shadow-2xl">
                <VimeoPlayer
                  ref={playerRef}
                  vimeoId={item.vimeoId}
                  className="absolute inset-0 w-full h-full rounded-xl"
                />
              </div>
            )}
          </>
        ) : null}

        {/* Base overlay for style consistency */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      <div className="mt-6 px-2">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
            {item.client}
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 font-medium">
            {item.category}
          </span>
        </div>
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h3>
      </div>
    </article>
  )
}

export function FullPortfolioGrid() {
  const [filter, setFilter] = useState("all")

  const filteredItems = useMemo(() =>
    filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter)
    , [filter])

  return (
    <div className="w-full">
      {/* Premium Filter System */}
      <div className="flex flex-col items-center mb-16 gap-8">
        <div className="flex items-center gap-3 text-foreground/40 text-xs font-black uppercase tracking-[0.2em]">
          <Filter className="w-4 h-4" />
          Filter by category
        </div>
        <div className="flex flex-wrap justify-center gap-3 p-2 bg-surface/50 backdrop-blur-xl border border-border/50 rounded-full shadow-2xl">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = filter === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 relative overflow-hidden group",
                  isActive
                    ? "text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {isActive && (
                  <div
                    className="absolute inset-0 bg-primary z-0"
                  />
                )}
                <Icon className={cn("w-4 h-4 relative z-10 transition-colors", isActive ? "text-primary-foreground" : "text-primary group-hover:scale-110")} />
                <span className="relative z-10">{cat.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Modern Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="py-32 text-center text-foreground/40 italic font-medium tracking-wide">
          No projects found in this category. Check back soon for more work.
        </div>
      )}
    </div>
  )
}
