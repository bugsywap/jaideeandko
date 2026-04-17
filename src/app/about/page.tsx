"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Heart, Sparkles, Target, Users, ArrowRight, Play, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CallToAction } from "@/components/sections/CallToAction"
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
      <section className="py-24 bg-background border-t border-border/50 overflow-hidden relative">
        {/* Ambient Glow */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16 lg:mb-20">
          <ScrollReveal>
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6">
              Meet the Heart
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
              The Man <span className="text-primary italic">Behind it All</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Founder Profile - Left Bento Card */}
            <div className="lg:col-span-5 w-full">
              <ScrollReveal className="h-full">
                <div className="h-full flex flex-col p-8 sm:p-10 rounded-[2.5rem] bg-surface border border-border shadow-2xl relative overflow-hidden group">
                  {/* Glowing Accent */}
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full transform translate-x-1/2 -translate-y-1/3 transition-all duration-700 group-hover:bg-primary/20" />
                  
                  <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-8 relative z-10 flex-grow">
                    
                    {/* Dynamic Avatar Ring */}
                    <div className="relative w-48 h-48 sm:w-40 sm:h-40 lg:w-56 lg:h-56 shrink-0">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-transparent animate-spin-slow opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute inset-1.5 rounded-full overflow-hidden border-2 border-background bg-muted">
                        <img
                          src="/img/1.png"
                          alt="Gary Koay - Founder & Creative Director"
                          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <h3 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">Gary Koay</h3>
                      <p className="text-sm font-black text-primary uppercase tracking-[0.2em]">Founder | Creative Director</p>
                      <p className="text-foreground/70 leading-relaxed font-medium mt-2">
                        A visual storyteller obsessed with transforming brand philosophies into sincere, cinematic narratives that actually move people.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
                    <div className="text-center sm:text-left">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-2">Unrealistic Desire</p>
                      <p className="text-lg font-bold text-foreground italic flex items-center justify-center sm:justify-start gap-2">
                        "To communicate with animals"
                      </p>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/gkoay/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                      aria-label="Connect with Gary on LinkedIn"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Video Showcase - Right Bento Card */}
            <div className="lg:col-span-7 w-full h-full relative">
              <ScrollReveal delay={0.2} className="h-full">
                
                <div className="h-full rounded-[2.5rem] bg-surface flex flex-col shadow-2xl border border-border group overflow-hidden relative z-20">
                  {/* Decorative Glow */}
                  <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-1000 group-hover:bg-primary/20" />
                  
                  {/* Card Header Content */}
                  <div className="p-8 sm:p-10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-10 shrink-0">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-2 w-2 rounded-full bg-primary relative">
                          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                        </span>
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary">Director's Cut</span>
                      </div>
                      <h4 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">Director&rsquo;s Showreel 2018</h4>
                      <p className="text-foreground/60 font-medium text-base sm:text-lg max-w-lg">
                        A glimpse into Gary&rsquo;s personal ethos, work ethic, and clients served. The Ko, in Jaidee & Ko.
                      </p>
                    </div>
                  </div>
                  
                  {/* Video Player */}
                  <div className="w-full relative z-10 flex-grow px-4 pb-4 sm:px-8 sm:pb-8 flex flex-col">
                    <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black shadow-inner border border-white/5 group-hover:shadow-[0_0_30px_-10px_rgba(117,185,162,0.3)] transition-all duration-700 aspect-video md:aspect-auto">
                      <iframe 
                        src="https://player.vimeo.com/video/1017530489?title=0&byline=0&portrait=0&color=75b9a2" 
                        className="absolute inset-0 w-full h-full" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen 
                      />
                    </div>
                  </div>
                </div>

              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Passion Projects Section */}
      <section className="py-24 lg:py-32 bg-background relative border-t border-border/50 overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
            <ScrollReveal>
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6">
                Beyond the Brief
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight mb-6">
                Passion <span className="text-primary italic">Projects</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Creative explorations and personal endeavors that fuel our inspiration, hone our craft, and push the boundaries of visual storytelling.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              "1131379087",
              "1131379400",
              "1131381969",
              "1131377804"
            ].map((id, index) => (
              <ScrollReveal key={id} delay={0.1 * index} className="h-full">
                <div className="group relative h-full">
                  {/* Hover Glow */}
                  <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
                  
                  {/* Video Container */}
                  <div className="relative w-full rounded-[2.5rem] bg-black shadow-2xl border border-border/50 group-hover:border-primary/30 transition-colors duration-500 overflow-hidden aspect-video">
                    <iframe 
                      src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&color=75b9a2`}
                      title={`Passion Project Video ${index + 1}`}
                      className="absolute top-0 left-0 w-full h-full" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture" 
                      allowFullScreen 
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction 
        title={<>Let's grow <span className="text-primary italic">together.</span></>}
        description="We love meeting new visionaries. Let's explore how our team can integrate with yours."
      />
    </div>
  )
}
