"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Play, ArrowRight, Filter, LayoutGrid, MonitorPlay, Smartphone } from "lucide-react"

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
  { id: "corporate", name: "Corporate", icon: MonitorPlay },
  { id: "social", name: "Social Content", icon: Smartphone },
]

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
                  <motion.div
                    layoutId="active-filter"
                    className="absolute inset-0 bg-primary z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => {
            const isSocial = item.category === "social"
            const aspectRatio = isSocial ? "aspect-[9/16]" : "aspect-[16/9]"

            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col"
              >
                <div className={cn(
                  "relative w-full overflow-hidden rounded-[2rem] bg-black border border-white/5 shadow-2xl transition-all duration-700",
                  "group-hover:translate-y-[-8px] group-hover:shadow-primary/20",
                  aspectRatio
                )}>
                  {item.vimeoId ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${item.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&autopause=0`}
                      className="absolute inset-0 w-full h-full scale-[1.05] transition-transform duration-1000 group-hover:scale-110"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      loading="lazy"
                    />
                  ) : (
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                  )}

                  {/* Glassmorphism Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Subtle Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_120%,rgba(117,185,162,0.15),transparent_70%)]" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.client}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Play Button Indicator */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="py-32 text-center text-foreground/40 italic font-medium tracking-wide">
          No projects found in this category. Check back soon for more work.
        </div>
      )}
    </div>
  )
}
