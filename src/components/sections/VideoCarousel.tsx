"use client";

import React from "react";

const placeholderVideos = [
  "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-video-32627-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-taking-photos-from-different-angles-of-a-model-34421-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-video-call-on-a-rooftop-43015-large.mp4"
];

const duplicatedVideos = [...placeholderVideos, ...placeholderVideos, ...placeholderVideos, ...placeholderVideos];

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

      <div className="relative w-full flex items-center overflow-hidden py-10">
        {/* White Fade Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* Infinite Carousel Track */}
        <div 
          className="flex gap-6 w-max animate-infinite-scroll" 
          style={{ animationDuration: '60s', animationDirection: 'reverse' }}
        >
          {duplicatedVideos.map((videoSrc, idx) => (
            <div key={idx} className="relative w-72 md:w-80 aspect-[9/16] rounded-2xl overflow-hidden shrink-0 shadow-2xl border border-border bg-surface ring-1 ring-white/10">
               <video 
                 className="w-full h-full object-cover" 
                 autoPlay loop muted playsInline
               >
                 <source src={videoSrc} type="video/mp4" />
               </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
