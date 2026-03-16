import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const placeholderVideos = [
  "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-video-32627-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-taking-photos-from-different-angles-of-a-model-34421-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-video-call-on-a-rooftop-43015-large.mp4"
];

// Duplicate enough times so scrolling length easily covers screen space
const duplicatedVideos = [...placeholderVideos, ...placeholderVideos, ...placeholderVideos, ...placeholderVideos];

export function Hero() {
  return (
    <div className="w-full py-20 lg:py-40 bg-background pt-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          
          {/* Text Content */}
          <div className="flex gap-4 flex-col z-10">
            <div>
              <Badge variant="outline" className="border-primary text-primary bg-primary/10">Jaidee & Ko</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-bold text-foreground leading-[1.1]">
                Corporate Video & Social Content
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-foreground/70 max-w-md text-left">
                For B2B companies, NGOs, and founders in Singapore and Southeast Asia. We turn complex narratives into approachable visual storytelling.
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <Button size="lg" className="gap-2 text-primary bg-transparent border-primary hover:bg-primary/10 font-bold" variant="outline" asChild>
                <Link href="#how-it-works">
                  See How It Works <PhoneCall className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-bold" asChild>
                <Link href="/contact">
                  Let's Go <MoveRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Side - Carousel */}
          <div className="relative w-full h-[500px] flex items-center overflow-hidden rounded-2xl">
            {/* White Fade Overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            {/* Infinite Carousel Track */}
            <div 
              className="flex gap-4 w-max animate-infinite-scroll" 
              style={{ animationDuration: '60s', animationDirection: 'reverse' }}
            >
              {duplicatedVideos.map((videoSrc, idx) => (
                <div key={idx} className="relative w-64 aspect-[9/16] rounded-2xl overflow-hidden shrink-0 shadow-lg border border-border bg-surface">
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
          
        </div>
      </div>
    </div>
  );
}
