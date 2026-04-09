"use client"

import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    author: {
      name: "Zubair Timol",
      handle: "VP of Culture - Meltwater",
    },
    text: "Jaidee &Ko always look at content from a lifestyle standpoint, and that's the energy we want for our brand. Their approach is non-linear; they take risks, and the end product is much stronger as a result. Their dedication to finding the right stories has made them our go-to partner for filming and content creation in Asia."
  },
  {
    author: {
      name: "Kelvin Tjia",
      handle: "Founder - 3 Degrees App",
    },
    text: "Since partnering with Jaidee & Ko, our content has truly come to life... This approach has not only boosted engagement but also significantly expanded our client base at 3 Degrees, making a real difference in our visibility and reach."
  },
  {
    author: {
      name: "Anonymous",
      handle: "Marketing Director - B2B SaaS",
    },
    text: "Our LinkedIn views increased 4x within 3 months. They distilled complex stories into powerful content and managed the entire process flawlessly from start to finish."
  },
  {
    author: {
      name: "Event Coordinator",
      handle: "Social Impact NGO",
    },
    text: "The team captured the exact essence of our gala. We've seen a 30% increase in donor engagement just by sharing the highlight reel they produced."
  }
]

export function TestimonialsSection({ className }: { className?: string }) {
  return (
    <section className={cn(
      "bg-background text-foreground relative border-t border-border overflow-hidden",
      "py-24 sm:py-32",
      className
    )}>
      {/* Decorative Background Element */}
      <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform -z-10 origin-bottom-left" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <Quote className="w-12 h-12 text-primary opacity-50 mb-2" />
          <h2 className="max-w-[720px] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Trusted by industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">leaders.</span>
          </h2>
          <p className="text-lg md:text-xl max-w-[600px] leading-relaxed text-foreground/70 mt-4">
            Hear from our partners on how we've elevated their brand presence and driven engagement.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 pt-6 pb-12 [--gap:2rem] [gap:var(--gap)] flex-row [--duration:80s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {/* Triple-buffered marquee for seamless infinite scrolling */}
              {[...Array(3)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Fade Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 sm:w-32 bg-gradient-to-r from-background/90 to-transparent md:block z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 sm:w-32 bg-gradient-to-l from-background/90 to-transparent md:block z-10" />
        </div>
      </div>
    </section>
  )
}
