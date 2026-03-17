"use client";

import { useRef } from "react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // High-height container to drive the animation sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress for a more "premium" interaction
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 1. GIF Transformations: Center -> Right
  // Initial (0): Centered, Big
  const gifScale = useTransform(smoothProgress, [0, 0.4], [1.5, 1]);
  const gifOpacity = useTransform(smoothProgress, [0, 0.1], [0.8, 1]);

  // To center the GIF on the screen from the right column of a 2-col grid:
  // The element is in a 50% width column. Its center is naturally at 75%.
  // To move its center to 50%, we need to move it left by 25% of the TOTAL container.
  // Since the element itself is 50% of the container, "-50%" relative to itself is exactly what we need.
  const desktopGifTranslateX = useTransform(smoothProgress, [0, 0.6], ["-50%", "0%"]);
  
  // 2. Text Transformations: Fades and slides from left
  const textOpacity = useTransform(smoothProgress, [0.5, 0.8], [0, 1]);
  const textX = useTransform(smoothProgress, [0.5, 0.8], [-100, 0]);
  
  // 4. Buttons: Pop up at the very end
  const buttonsScale = useTransform(smoothProgress, [0.85, 1], [0, 1]);
  const buttonsOpacity = useTransform(smoothProgress, [0.85, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-background">
      {/* Sticky Content: Keeps everything in view until animation finishes */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2 relative h-full">
            
            {/* Text Content Layer */}
            <motion.div 
              style={{ opacity: textOpacity, x: textX }}
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
              
              {/* Buttons Pop-up */}
              <motion.div 
                style={{ scale: buttonsScale, opacity: buttonsOpacity }}
                className="flex flex-row gap-4 mt-8"
              >
                <Button size="lg" className="h-16 px-10 gap-3 text-primary bg-transparent border-primary hover:bg-primary/10 font-bold transition-all duration-300 rounded-full" variant="outline" asChild>
                  <Link href="#how-it-works">
                    See How It Works <PhoneCall className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" className="h-16 px-10 gap-3 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-xl shadow-primary/30 transition-all duration-300 transform hover:scale-105 rounded-full" asChild>
                  <Link href="/contact">
                    Let's Go <MoveRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Right Side - GIF Hero (Starts Centered & Big) */}
            <motion.div 
              style={{ 
                x: desktopGifTranslateX,
                scale: gifScale,
                opacity: gifOpacity
              }}
              className="relative w-full h-[600px] lg:h-[750px] flex items-center justify-center z-10"
            >
              {/* No Borders, Just the GIF */}
              <img 
                src="/img/gif1.gif" 
                alt="Jaidee & Ko Hero" 
                className="w-full h-full object-contain pointer-events-none"
              />
              
              {/* Subtle background glow that appears as text reveals */}
              <motion.div 
                style={{ opacity: textOpacity }}
                className="absolute inset-0 bg-primary/5 blur-[120px] -z-10 rounded-full scale-125"
              />
            </motion.div>
            
          </div>
        </div>

        {/* Initial Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="w-[1.5px] h-16 bg-gradient-to-b from-primary to-transparent" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-black animate-pulse">Scroll to Start</p>
        </motion.div>
      </div>
    </div>
  );
}




