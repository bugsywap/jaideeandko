"use client"

import { useState } from "react"
import Link from "next/link"
import { Play, Mail, ArrowRight } from "lucide-react"

// Mock Data based on the audit
const portfolioItems = [
  {
    id: 1,
    title: "Gala 2025",
    client: "Young Founders School",
    category: "ngo",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=800",
    slug: "/our-work/yfs"
  },
  {
    id: 2,
    title: "Be You, Lead the New",
    client: "Accenture Philippines",
    category: "corporate",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    slug: "/our-work/accentureph"
  },
  {
    id: 3,
    title: "Failure to Launch",
    client: "Enterprise SG",
    category: "founder",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    slug: "/our-work/enterprisesg"
  },
  {
    id: 4,
    title: "Welcome to GSS Vegas 2024",
    client: "Meltwater",
    category: "event",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    slug: "/our-work/meltwater"
  },
  {
    id: 5,
    title: "Founder's Story",
    client: "3 Degrees",
    category: "social",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    slug: "/our-work/3degrees"
  },
  {
    id: 6,
    title: "Commitment to Sustainable Future",
    client: "UOB Asset Management",
    category: "corporate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    slug: "/our-work/uobam"
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
              onClick={() => setFilter(cat.id)}
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

            return (
              <article key={item.id} className="relative flex flex-col items-start justify-between group break-inside-avoid">
                <div className="relative w-full overflow-hidden rounded-2xl bg-surface">
                  <div className={`${aspectRatioClass} w-full`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="max-w-xl mt-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-foreground/70 font-medium uppercase tracking-wider">{item.client}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-2 text-xl font-bold leading-6 text-foreground group-hover:text-foreground/70 transition-colors">
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
