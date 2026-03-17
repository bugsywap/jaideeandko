import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <div className="w-full py-20 lg:py-40 bg-background pt-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          
          {/* Text Content */}
          <div className="flex gap-4 flex-col z-10">
            <div>
              <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1 text-sm font-semibold tracking-wider uppercase">Jaidee & Ko</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-8xl max-w-lg tracking-tighter text-left font-bold text-foreground leading-[1.05]">
                Corporate Video & <span className="text-primary">Social Content</span>
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-foreground/70 max-w-md text-left">
                For B2B companies, NGOs, and founders in Singapore and Southeast Asia. We turn complex narratives into approachable visual storytelling.
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-8">
              <Button size="lg" className="h-14 px-8 gap-2 text-primary bg-transparent border-primary hover:bg-primary/10 font-bold transition-all duration-300" variant="outline" asChild>
                <Link href="#how-it-works">
                  See How It Works <PhoneCall className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" className="h-14 px-8 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/20 transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="/contact">
                  Let's Go <MoveRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Side - GIF Hero Image */}
          <div className="relative w-full h-[500px] lg:h-[600px] group">
            {/* Animated Backdrop Effect */}
            <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-3xl group-hover:bg-primary/30 transition-all duration-700 opacity-50"></div>
            
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-surface/50 backdrop-blur-sm p-4">
              <img 
                src="/img/gif1.gif" 
                alt="Jaidee & Ko Hero" 
                className="w-full h-full object-cover rounded-2xl shadow-inner brightness-110 contrast-110"
              />
              
              {/* Subtle glassmorphism overlay on bottom */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/30 backdrop-blur-md rounded-2xl border border-white/10 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-white font-medium">Crafting Stories in Singapore</p>
                    <p className="text-white/60 text-sm italic">Premium Production for Premium Brands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

