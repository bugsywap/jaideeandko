"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Heart, Sparkles, Target, Users, ArrowRight, Play, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { QuickContact } from "@/components/sections/QuickContact"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export default function AboutPage() {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-8">
              The Heart Behind the Lens
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1] mb-8">
              Stories Worth <span className="text-primary italic">Telling</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              We find purpose in bridging the gap between businesses and the public, building real connections that inspire and inform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-24 bg-surface relative border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-3xl -z-10" />
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border bg-muted relative group">
                  <img
                    src="/img/about-image.png"
                    alt="Gary Koay and the Jaidee & Ko team working on a video production set"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    width={800}
                    height={1000}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Established 2023</p>
                    <h3 className="text-2xl font-bold">Built for Impact</h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-tight mb-6">
                    The Story of <span className="text-primary">Jaidee & Ko</span>
                  </h2>
                  <div className="flex flex-col gap-6 text-lg leading-relaxed text-foreground/70">
                    <p>
                      The name <span className="font-bold text-foreground">Jaidee</span> comes from a Thai word meaning <span className="text-primary italic">"good heart."</span> Inspired by our founder Gary’s journey, it reflects the kindness and sincerity we bring to every frame.
                    </p>
                    <p>
                      <span className="font-bold text-foreground">Ko</span> is a playful twist on Gary’s surname, blending personal passion with professional mastery. Our brand represents the birth of new ideas, balancing heart and intention with creativity and strategy.
                    </p>
                    <p>
                      We don’t just create videos; we craft narrative bridges. Gary’s vision is to help small teams with big dreams become the impact they want to see in the world.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-black text-primary">50+</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-foreground/50">Brands Elevated</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-black text-primary">100%</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-foreground/50">Heart & Soul</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                className="p-10 lg:p-14 rounded-[2.5rem] bg-surface border border-border shadow-xl hover:border-primary/30 transition-all group h-full"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-6">Our Mission</h3>
                <div className="space-y-4">
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    To help businesses and industry leaders communicate with clarity, build trust, and earn attention in a noisy digital world.
                  </p>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    We combine strategic communications with content creation to turn what you do into stories people understand, believe in, and act on.
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                className="p-10 lg:p-14 rounded-[2.5rem] bg-surface border border-border shadow-xl hover:border-primary/30 transition-all group h-full"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-6">Our Vision</h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To redefine how businesses show up in the world, where visibility is built on substance, not noise, and credibility is earned through honest storytelling.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-surface border-t border-border/50 overflow-hidden relative">
        {/* Ambient Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-20">
          <ScrollReveal>
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6">
              Meet the Heart
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
              The Team <span className="text-primary italic">Behind it All</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
            {/* Founder Profile - Left */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <ScrollReveal className="w-full max-w-sm mx-auto lg:mx-0 group">
                <div className="relative aspect-square rounded-full overflow-hidden border-[8px] border-primary/10 group-hover:border-primary/30 transition-all duration-700 mb-8 bg-muted shadow-2xl mx-auto lg:mx-0 w-full max-w-[320px]">
                  <img
                    src="/img/1.png"
                    alt="Gary Koay - Founder | Creative Director at Jaidee & Ko"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                    width={400}
                    height={400}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                <div className="flex flex-col gap-3 relative z-10">
                  <h3 className="text-4xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">Gary Koay</h3>
                  <p className="text-sm font-black text-foreground/50 uppercase tracking-[0.2em]">Founder | Creative Director</p>

                  <div className="mt-5 py-6 border-t border-border/50">
                    <p className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-2">Unrealistic Desire</p>
                    <p className="text-lg font-bold text-foreground/80">To communicate with animals</p>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/gkoay/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 mt-2 mx-auto lg:mx-0"
                    aria-label="Connect with Gary on LinkedIn"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Video Showcase - Right */}
            <div className="lg:col-span-7 w-full relative">
              <ScrollReveal delay={0.2} direction="right">
                
                <div className="relative w-full rounded-[2.5rem] bg-black shadow-2xl border border-border/50 group overflow-visible aspect-video z-20">
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-primary/20 blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
                  
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative z-10 bg-black/90">
                    <iframe 
                      src="https://player.vimeo.com/video/1017530489?title=0&byline=0&portrait=0&color=75b9a2" 
                      className="absolute top-0 left-0 w-full h-full" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture" 
                      allowFullScreen 
                    />
                  </div>
                </div>

                <div className="mt-8 text-center lg:text-left flex flex-col gap-2 relative z-10">
                  <h4 className="text-2xl font-black text-foreground tracking-tight">Showreel 2024</h4>
                  <p className="text-foreground/60 font-medium">A glimpse into the visual impact we create for our partners.</p>
                </div>

              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 lg:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center flex flex-col items-center gap-12">
          <ScrollReveal className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
              Let's Start Your <span className="text-primary italic">Story</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Ready to bridge the gap between your brand and your audience? We're with you every step of the way.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="w-full max-w-xl">
            <QuickContact />
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
