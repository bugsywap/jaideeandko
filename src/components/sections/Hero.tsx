"use client";

import { useRef, useEffect, useState } from "react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

const vimeoIds = [
  "1020466051",
  "1026056505",
  "1021485785",
  "1021486218",
  "1026056187",
];

export function Hero() {
  return (
    <div className="relative bg-background overflow-hidden pt-40 pb-16 md:pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 relative h-full">

          {/* Text Content Layer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex gap-6 flex-col z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="-mb-2"
            >
              <img 
                src="/img/jaidee-badge.png" 
                alt="Jaidee & Ko Badge" 
                className="w-16 md:w-20 h-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500" 
              />
            </motion.div>
            <div className="flex gap-4 flex-col">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl tracking-tighter text-left font-black text-foreground leading-[1.0]"
              >
                <span className="block">Strategic Communications &</span>
                <span className="text-primary italic block">Video Development</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg leading-relaxed tracking-tight text-foreground/70 max-w-md text-left mt-2"
              >
                For B2B companies, NGOs, and founders. We turn complex ideas into clear, trusted narratives that drive visibility and opportunity.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-row gap-4 mt-6"
            >
              <Button size="lg" className="h-14 px-8 gap-3 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-xl shadow-primary/30 transition-all duration-300 transform hover:scale-105 rounded-full" asChild>
                <Link href="/contact">
                  Let's Go <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" className="h-14 px-8 gap-3 text-primary bg-transparent border-primary hover:bg-primary/10 font-bold transition-all duration-300 rounded-full" variant="outline" asChild>
                <a href="https://calendar.app.google/nmJKmi3iousxouhX6" target="_blank" rel="noopener noreferrer">
                  Book Strategy Session <PhoneCall className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Hero (Strict 2-Column Horizontal Carousel) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative w-full h-[400px] lg:h-[500px] flex items-center overflow-hidden z-10"
          >
            <div className="relative w-full h-full flex items-center overflow-hidden mask-fade-x">
              {/* Infinite Carousel Track */}
              <div
                className="flex gap-4 w-max animate-infinite-scroll"
                style={{ animationDuration: '30s' }}
              >
                {[...vimeoIds, ...vimeoIds].map((id, idx) => (
                  <div key={idx} className="relative w-40 md:w-56 lg:w-64 aspect-[9/16] rounded-3xl overflow-hidden shrink-0 shadow-xl border border-border bg-white/5 backdrop-blur-md ring-1 ring-white/10 group">
                    <iframe
                      src={`https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&autopause=0`}
                      className="absolute inset-0 w-full h-full scale-[1.05]"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10 rounded-full scale-110" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}




