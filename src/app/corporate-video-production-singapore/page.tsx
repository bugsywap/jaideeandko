"use client"

import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot"
import { TestimonialsSection } from "@/components/sections/Testimonials"
import { QuickContact } from "@/components/sections/QuickContact"
import { TrustTicker } from "@/components/sections/TrustTicker"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export default function SEO_CorporateVideoSingapore() {
  return (
    <>
      <div className="bg-background pt-24 pb-12 sm:pt-32 sm:pb-16">
        <ScrollReveal className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              Strategic <span className="text-primary italic">Corporate Video Production</span> in Singapore.
            </h1>
            <p className="text-lg leading-8 text-foreground/70">
              You don't just need a video; you need a strategic asset. From C-suite interviews to company culture showcases, we craft corporate videos designed to build social proof and articulate your exact value proposition to stakeholders across Asia.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <TrustTicker />
      </ScrollReveal>
      
      <ScrollReveal>
        <ServicesSnapshot />
      </ScrollReveal>
      
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <QuickContact />
        </div>
      </ScrollReveal>
    </>
  )
}
