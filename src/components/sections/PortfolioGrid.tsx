"use client"

import { useState } from "react"
import Link from "next/link"
import { Play, Mail, ArrowRight } from "lucide-react"

interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  category: string;
  vimeoId?: string;
  image?: string;
  slug: string;
}

// Mock Data based on the audit
const portfolioItems: PortfolioItem[] = [
  // --- SOCIAL VIDEOS (9:16) ---
  {
    id: 1,
    title: "Social Impact I",
    client: "Jaidee & Ko",
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
  { id: "all", name: "All Work" },
  { id: "corporate", name: "Corporate Video" },
  { id: "social", name: "Social Video" },
  { id: "event", name: "Event Coverage" },
  { id: "founder", name: "Founder Story" },
  { id: "ngo", name: "NGO / Charity" },
]

export function PortfolioGrid() {
  const [filter, setFilter] = useState("all")
  const [activeId, setActiveId] = useState<number | null>(null)

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter)

  return (
    <div className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured Work</h2>
          <p className="mt-2 text-lg leading-8 text-foreground/70">
            Stories that drive engagement and business results.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id)
                setActiveId(null) // Reset video when changing filters
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-foreground hover:bg-border"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item) => {
            const isSocial = item.category === "social"
            const aspectRatioClass = isSocial ? "aspect-[9/16]" : "aspect-[16/9]"
            const isActive = activeId === item.id

            return (
              <article key={item.id} className="relative flex flex-col items-start justify-between group break-inside-avoid cursor-pointer">
                <div 
                  className="relative w-full overflow-hidden rounded-2xl bg-black border border-border/50 shadow-lg group"
                  onClick={() => setActiveId(isActive ? null : item.id)}
                >
                  <div className={`${aspectRatioClass} w-full relative`}>
                    {item.vimeoId && isActive ? (
                      <iframe
                        src={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&byline=0&title=0&portrait=0&autopause=0`}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        loading="lazy"
                        title={item.title}
                      ></iframe>
                    ) : (
                      <>
                        <img
                          src={item.vimeoId ? `https://vumbnail.com/${item.vimeoId}.jpg?width=1280` : item.image}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-primary/90 backdrop-blur-sm p-4 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                            <Play className="h-8 w-8 text-white fill-white" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="max-w-xl mt-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-foreground/70 font-medium uppercase tracking-wider">{item.client}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-2 text-xl font-bold leading-6 text-foreground group-hover:text-primary transition-colors">
                      <Link href={item.slug}>
                        <span className="absolute inset-0" />
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        
        {/* Post-Portfolio Conversion - Glowing Theme Banner */}
        <div className="mt-24 sm:mt-32 w-full">
          <div className="relative rounded-3xl overflow-hidden py-16 px-6 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 border border-border/50 shadow-sm bg-surface">
            {/* Soft Green Glow Background */}
            <div className="absolute inset-0 z-0">
               <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at center, rgba(117, 185, 162, 0.25) 0%, transparent 70%)`,
                    opacity: 1,
                  }}
                />
            </div>

            {/* Left Content */}
            <div className="relative z-10 text-center lg:text-left max-w-xl">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight">
                Want results like this?
              </h3>
              <p className="text-lg md:text-xl text-foreground/70 font-medium">
                Let's discuss how we can create a similar impact for your organisation.
              </p>
            </div>

            {/* Right Content (Glassmorphism Form - Smaller) */}
            <div className="relative z-10 w-full max-w-sm shrink-0">
              <div className="bg-background/80 backdrop-blur-md border border-border p-2 sm:p-2.5 rounded-2xl shadow-xl flex flex-col sm:flex-row gap-2">
                
                {/* Input Container */}
                <div className="flex-1 bg-surface rounded-xl p-2 sm:p-3 flex flex-col justify-center border border-border/50">
                  <label className="flex items-center gap-1.5 text-foreground/70 text-[10px] font-bold mb-1 px-1 uppercase tracking-wider">
                    <Mail className="w-3 h-3 text-primary" /> Work Email
                  </label>
                  <input 
                    type="email" 
                    placeholder="hello@company.com"
                    className="w-full bg-transparent text-foreground placeholder-foreground/40 px-1 py-0.5 outline-none text-sm font-medium"
                  />
                </div>
                
                {/* Button */}
                <Link
                  href="/contact"
                  className="rounded-xl bg-primary text-primary-foreground px-5 py-3 flex flex-col items-center justify-center gap-1 hover:bg-primary/90 transition-colors shrink-0 min-w-[100px]"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">Book Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
