"use client"

import { Video, Share2, Users, CalendarDays, PenTool, Code2, BookOpen, Mic, Radio, MessageSquare, Briefcase, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    title: "Corporate & Brand Videos",
    description: "High-end visual storytelling that communicates your corporate narrative and builds social proof with stakeholders.",
    icon: Video,
    href: "/services#corporate",
    image: "/img/corpo-brand.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Social Media Content",
    description: "Short-form, highly shareable content explicitly designed for LinkedIn, Instagram, and TikTok algorithms.",
    icon: Share2,
    href: "/services#social",
    image: "/img/soc-med.jpg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Communication Consultations",
    description: "Expert PR and strategic consulting to shape your narrative and public profile.",
    icon: MessageSquare,
    href: "/services#consulting",
    image: "/img/communication-consultation.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Founder Story Videos",
    description: "Authentic documentary-style profiles capturing your true vision.",
    icon: Users,
    href: "/services#founder",
    image: "/img/founder-story.JPG",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Website Development",
    description: "Modern, responsive platforms to serve as your premium digital storefront.",
    icon: Code2,
    href: "/services#web",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "SEO Article & Blog Creation",
    description: "Boost organic visibility with targeted, high-value written content tailored to search intent.",
    icon: PenTool,
    href: "/services#seo",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Podcast Production",
    description: "Full-service visual podcasting from studio setup to post editing.",
    icon: Mic,
    href: "/services#podcast",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Event Coverage",
    description: "Dynamic highlight reels extending your physical events.",
    icon: CalendarDays,
    href: "/services#event",
    image: "/img/event-coverage.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Digitization of Brand Guidelines",
    description: "Transform static manuals into dynamic, AI-powered online depositories ensuring brand consistency.",
    icon: BookOpen,
    href: "/services#brand",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Live Streaming",
    description: "Multi-cam setups connecting your hybrid town halls to a global audience.",
    icon: Radio,
    href: "/services#live",
    image: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&q=80&w=1200",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Fractional CCO Services",
    description: "Gain executive-level creative leadership on retainer, driving your complete brand strategy without the full-time overhead.",
    icon: Briefcase,
    href: "/services#cco",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    className: "md:col-span-1 md:row-span-1",
  },
]

export function ServicesSnapshot() {
  return (
    <div className="w-full py-24 lg:py-32 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col gap-12 lg:gap-16">
          
          <div className="flex gap-4 flex-col items-center sm:items-start max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1.5 uppercase tracking-widest text-[10px] font-black">
                Capabilities
              </Badge>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl tracking-tighter font-black text-foreground uppercase leading-[1.0]"
            >
              Bridge the Gap with <span className="text-primary italic">Strategic Clarity</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl leading-relaxed text-foreground/70 font-medium mt-2 text-left"
            >
              We partner with forward-thinking organisations to fast-track ideas, capture expertise, and turn what you do into <span className="text-foreground font-bold">stories people understand, believe in, and act on.</span>
            </motion.p>
          </div>
          
          {/* Benton Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row-dense gap-4 md:gap-6 auto-rows-[280px]">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                className={`group ${service.className}`}
              >
                <Link href={service.href} className="relative block w-full h-full overflow-hidden rounded-[2.5rem] border border-border/40 bg-black group-hover:border-primary/40 transition-all duration-700 shadow-xl">
                  {/* Background Image & Overlay */}
                  <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-all duration-700 opacity-60 group-hover:opacity-50" 
                      loading="lazy" 
                    />
                    {/* Primary Color Accent Overlay */}
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-all duration-700 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 z-20" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-30 flex flex-col justify-between h-full p-6 lg:p-8">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-primary/30 group-hover:border-primary/40 transition-all duration-700 ease-out">
                      <service.icon className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
                    </div>
                    
                    <div className="flex flex-col mt-auto">
                      <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-white/60 text-xs md:text-sm line-clamp-2 font-medium leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-6 pt-5 border-t border-white/5 group-hover:border-primary/30 transition-all duration-700">
                        <span className="flex items-center gap-2">
                          Explore service <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1.5 transition-transform duration-500 ease-out" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Shimmer */}
                  <div className="absolute inset-0 z-40 pointer-events-none bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
