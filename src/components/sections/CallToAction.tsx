import { ReactNode } from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface CallToActionProps {
  title: ReactNode
  description: ReactNode
}

export function CallToAction({ title, description }: CallToActionProps) {
  return (
    <ScrollReveal className="bg-surface/30 border-t border-border/50 py-32">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic text-foreground">
          {title}
        </h2>
        <div className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto font-medium">
          {description}
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/contact" className="px-10 py-5 bg-primary text-primary-foreground rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-primary/30 text-xs">
            Contact Us
          </Link>
          <a href="https://calendar.app.google/nmJKmi3iousxouhX6" target="_blank" rel="noopener noreferrer" className="px-10 py-5 border-2 border-primary text-primary rounded-full font-black uppercase tracking-widest hover:bg-primary/5 transition-all text-xs">
            Book a call
          </a>
        </div>
      </div>
    </ScrollReveal>
  )
}
