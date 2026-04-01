"use client"

import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot"
import { PortfolioGrid } from "@/components/sections/PortfolioGrid"
import { QuickContact } from "@/components/sections/QuickContact"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export default function SEO_SocialMediaAgency() {
  return (
    <>
      <div className="bg-background pt-24 pb-12 sm:pt-32 sm:pb-16">
        <ScrollReveal className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              Strategic <span className="text-primary italic">Social Media Video</span> Agency
            </h1>
            <p className="text-lg leading-8 text-foreground/70">
              Attention is the new currency. We don't just film; we engineer short-form content designed to stop the scroll, educate your audience, and drive outbound leads directly to your B2B sales funnel.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <PortfolioGrid />
      </ScrollReveal>
      
      <ScrollReveal>
        <ServicesSnapshot />
      </ScrollReveal>

      <ScrollReveal className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <QuickContact />
        </div>
      </ScrollReveal>
    </>
  )
}
