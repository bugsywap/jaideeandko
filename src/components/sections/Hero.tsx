"use client";

import { useRef, useEffect, useState } from "react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  
  // Container height drives the animation sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // Reduced stiffness for smoother manual "scrub" feel
    damping: 30,
    restDelta: 0.001
  });

  // Force strict pause on mount and during updates
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.playbackRate = 0;
      videoRef.current.currentTime = 0;
    }
  }, []);

  // High-Precision Sync Loop
  // requestAnimationFrame is the gold standard for buttery-smooth visual scrubbing
  useEffect(() => {
    let rafId: number;
    const syncVideo = () => {
      if (videoRef.current && isVideoReady && videoRef.current.duration) {
        // Enforce paused state to prevent "playing on its own"
        if (!videoRef.current.paused) videoRef.current.pause();
        
        const progress = smoothProgress.get();
        // Direct map: progress (0-1) -> video time (0-duration)
        const targetTime = progress * videoRef.current.duration;
        
        // Precise time-scrubbing
        videoRef.current.currentTime = targetTime;
      }
      rafId = requestAnimationFrame(syncVideo);
    };

    rafId = requestAnimationFrame(syncVideo);
    return () => cancelAnimationFrame(rafId);
  }, [isVideoReady, smoothProgress]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-background">
      {/* Sticky Content */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2 relative h-full">
            
            {/* Text Content Layer */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-6 flex-col z-20"
            >
              <div>
                <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">Jaidee & Ko</Badge>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-xl tracking-tighter text-left font-bold text-foreground leading-[1.1]">
                  Corporate Video & <span className="text-primary italic">Social Content</span>
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-foreground/70 max-w-md text-left">
                  For B2B companies, NGOs, and founders in Singapore and Southeast Asia. We turn complex narratives into approachable visual storytelling.
                </p>
              </div>
              
              <div className="flex flex-row gap-4 mt-8">
                <Button size="lg" className="h-16 px-10 gap-3 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-xl shadow-primary/30 transition-all duration-300 transform hover:scale-105 rounded-full" asChild>
                  <Link href="/contact">
                    Let's Go <MoveRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" className="h-16 px-10 gap-3 text-primary bg-transparent border-primary hover:bg-primary/10 font-bold transition-all duration-300 rounded-full" variant="outline" asChild>
                  <a href="https://calendar.app.google/nmJKmi3iousxouhX6" target="_blank" rel="noopener noreferrer">
                    See How It Works <PhoneCall className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
            
            {/* Right Side - Visual Hero (Pure Natural Flow) */}
            <div className="relative w-full h-[600px] lg:h-[750px] flex items-center justify-center z-10">
              <div className="relative w-full h-full">
                {!isVideoReady && (
                  <img 
                    src="/img/gif1.gif" 
                    alt="Hero Static"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                )}
                
                <video
                  ref={videoRef}
                  src="/img/hero-scroll.mp4"
                  className={`w-full h-full object-contain pointer-events-none transition-opacity duration-500 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
                  muted
                  playsInline
                  preload="auto"
                  autoPlay={false}
                  onLoadedData={() => {
                    setIsVideoReady(true);
                    if (videoRef.current) {
                      videoRef.current.pause();
                      videoRef.current.playbackRate = 0;
                      videoRef.current.currentTime = 0;
                    }
                  }}
                  onError={() => setIsVideoReady(false)}
                />
              </div>
              
              <div 
                className="absolute inset-0 bg-primary/5 blur-[120px] -z-10 rounded-full scale-125"
              />
            </div>
            
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary/50 font-black">Scroll to Play Animation</p>
          <div className="w-[1.5px] h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}




