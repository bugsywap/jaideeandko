"use client";

import React from "react";

const vimeoIds = [
  "1020466051",
  "1026056505",
  "1021485785",
  "1021486218",
  "1026056187",
  "1026056303",
  "1021485735",
  "1026056396"
];

// 3 sets (24 items) is enough for a smooth infinite scroll without over-lagging
const duplicatedIds = [...vimeoIds, ...vimeoIds, ...vimeoIds];

export function VideoCarousel() {
  return (
    <section className="py-24 bg-background overflow-hidden border-b border-border">
      <div className="container mx-auto px-6 max-w-7xl mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Visual Storytelling in <span className="text-primary italic">Motion</span>
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          A glimpse into the diverse range of content we create for brands, NGOs, and founders across Asia.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="relative w-full flex items-center overflow-hidden py-10 pt-0">
          {/* White Fade Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Infinite Carousel Track */}
          <div 
            className="flex gap-6 w-max animate-infinite-scroll" 
            style={{ animationDuration: '60s', animationDirection: 'reverse' }}
          >
            {duplicatedIds.map((vimeoId, idx) => (
              <div key={idx} className="relative w-72 md:w-80 aspect-[9/16] rounded-2xl overflow-hidden shrink-0 shadow-2xl border border-border bg-black ring-1 ring-white/10">
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&autopause=0`}
                  className="absolute inset-0 w-full h-full scale-[1.01]"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title={`Vimeo Video ${idx}`}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
