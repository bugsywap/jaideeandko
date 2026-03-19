"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Play, Pause, Mail, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
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

// Mock Data based on the audit
const portfolioItems: PortfolioItem[] = [
  // --- SOCIAL VIDEOS (9:16) ---
  {
    id: 1,
    title: "Founder's Story",
    client: "3 Degrees",
    category: "social",
    vimeoId: "1020466051",
    slug: "/our-work/social-1"
  },
  {
    id: 2,
    title: "Tin Pei Ling Visits",
    client: "3 Degrees",
    category: "social",
    vimeoId: "1026056505",
    slug: "/our-work/social-2"
  },
  {
    id: 3,
    title: "GSS All Days Sizzle Reel ",
    client: "Meltwater",
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

  const thumbnailUrl = item.image || (item.vimeoId ? `https://vumbnail.com/${item.vimeoId}_large.jpg` : null)

  return (
    <article className="relative flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 group/card">
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-[2rem] bg-surface-muted border border-border/40 shadow-sm transition-all duration-500",
          "group-hover/card:shadow-2xl group-hover/card:shadow-primary/20 group-hover/card:-translate-y-2 group-hover/card:border-primary/40"
        )}
      >
        <div className="aspect-[9/16] w-full relative bg-surface/10 backdrop-blur-2xl border border-border/10 flex items-center justify-center overflow-hidden">
          {thumbnailUrl && (
            <img 
              src={thumbnailUrl} 
              alt="" 
              className={cn(
                "absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700",
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
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110 shadow-2xl">
                  {isPlaying ? (
                    <div className="flex gap-1">
                      <div className="w-1 h-5 bg-white rounded-full opacity-90" />
                      <div className="w-1 h-5 bg-white rounded-full opacity-90" />
                    </div>
                  ) : (
                    <Play className="w-6 h-6 text-white fill-white ml-0.5 opacity-90 drop-shadow-sm" />
                  )}
                </div>
              </button>

              {/* Vimeo fills the full 9:16 container */}
              <div className="absolute inset-0 w-full h-full z-10">
                <VimeoPlayer
                  ref={playerRef}
                  vimeoId={item.vimeoId}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[142%]"
                />
              </div>
            </>
          ) : null}
          
          {/* Subtle Base Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-0" />
        </div>
      </div>

      <div className="px-2 mt-6 group/title">
        <Link href="/our-work" className="block text-lg font-black leading-tight text-foreground transition-colors group-hover/card:text-primary">
          <div className="flex items-center gap-3">
            {item.title}
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300" />
          </div>
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 font-black">
            {item.client}
          </span>
        </div>
      </div>
    </article>
  )
}

export function PortfolioGrid() {
  const [filter, setFilter] = useState("all")
  const [activeId, setActiveId] = useState<number | null>(null)
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")

    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get("email"),
      _subject: `New Lead from Portfolio Bottom: ${formData.get("email")}`,
      _cc: "gkoay@jaideeandko.com",
      _template: "table"
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/admin@getnifty.xyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setStatus("success")
          ; (e.target as HTMLFormElement).reset()
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("idle")
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("idle")
      alert("Something went wrong. Please try again.")
    }
  }

  const filteredItems = filter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter)

  // Use high-quality thumbnail mapping
  const getThumbnail = (vimeoId: string) => {
    return `https://vumbnail.com/${vimeoId}.jpg?width=1920&quality=high`
  }

  // Re-organize items for a more balanced three-column grid
  // Instead of simple CSS columns, we'll map to specific grid slots if we want precise control
  // For now, let's just make the grid more robust.

  return (
    <div className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Work.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/70 max-w-xl mx-auto">
            Premium storytelling that drives engagement and business results for industry leaders.
          </p>
        </div>

        {/* Robust Grid Layout - Narrower container to make videos smaller */}
        <div className="mx-auto mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 items-start max-w-5xl">
          {portfolioItems.slice(0, 3).map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-16 flex justify-center">
          <Button size="lg" className="h-14 px-10 gap-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-all rounded-full group" asChild>
            <Link href="/our-work">
              Show More Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
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

            {/* Right Content (One-Line Form) */}
            <div className="relative z-10 w-full max-w-lg shrink-0">
              <form
                onSubmit={handleSubmit}
                className="bg-background/80 backdrop-blur-md border border-border p-1.5 rounded-2xl shadow-xl flex items-center gap-2"
              >
                <div className="flex-1 flex items-center gap-3 px-4 py-2">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your work email"
                    className="w-full bg-transparent text-foreground placeholder-foreground/40 outline-none text-base font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="rounded-xl bg-primary text-primary-foreground px-8 py-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shrink-0 font-bold uppercase tracking-widest text-xs disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : status === "success" ? (
                    "Sent!"
                  ) : (
                    <>
                      Book Call
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
              {status === "success" && (
                <p className="absolute top-full mt-2 left-4 text-[10px] text-primary font-bold uppercase tracking-widest">
                  We'll be in touch shortly!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
