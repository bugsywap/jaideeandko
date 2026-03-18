"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, ArrowRight, ShieldCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function SocialProof() {
  const [isPlaying, setIsPlaying] = useState(false)
  const vimeoId = "1017530489"

  return (
    <section className="py-20 lg:py-24 bg-background overflow-hidden relative border-b border-border/50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Video Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Visual Frame Decorator */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-surface border border-border/50 shadow-2xl z-10">
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.div 
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 cursor-pointer group/thumb"
                    onClick={() => setIsPlaying(true)}
                  >
                    <img 
                      src={`https://vumbnail.com/${vimeoId}.jpg?width=1280`} 
                      alt="Social Proof Video" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/40 transition-colors" />
                    
                    {/* Premium Play Button (Smaller) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover/thumb:opacity-80 animate-pulse" />
                        <div className="relative w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl border border-white/20">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Floating Info Tag */}
                    <div className="absolute bottom-4 left-6 flex justify-between items-center text-white/90">
                      <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-medium uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-primary" /> Verified Social Proof
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-10"
                  >
                    <iframe
                      src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&byline=0&title=0&portrait=0`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Side: Copy Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">
                Strategic Impact
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
                Build Your <span className="text-primary italic">Social Proof</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              <p className="text-base leading-relaxed text-foreground/70">
                Organizations often find it challenging to communicate their corporate narratives in a relatable manner, leading to a disconnect with their audience and missed opportunities for advocacy and sales.
              </p>
              
              <div className="p-5 rounded-xl bg-surface border border-primary/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  We help develop your brand in a social way through approachable visual storytelling. We don't just want them to know you exist, we want them to buy into your story.
                </p>
              </div>

              <p className="text-xl font-bold tracking-tight text-foreground">
                Now, that's a <span className="text-primary italic">Story Worth Telling!</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-6"
            >
              <Button size="lg" className="h-14 px-8 gap-3 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/20 transition-all rounded-full" asChild>
                <Link href="/about">
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <div className="hidden sm:flex items-center gap-2 text-foreground/50">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden flex items-center justify-center text-[10px] font-bold">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-tighter italic">Trusted by 50+ Brands</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
