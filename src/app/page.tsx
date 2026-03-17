import { Hero } from "@/components/sections/Hero"
import { TrustTicker } from "@/components/sections/TrustTicker"
import { VideoCarousel } from "@/components/sections/VideoCarousel"
import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot"
import { SocialProof } from "@/components/sections/SocialProof"
import { CaseStudyCarousel } from "@/components/sections/CaseStudyCarousel"
import { QuickContact } from "@/components/sections/QuickContact"
import { PortfolioGrid } from "@/components/sections/PortfolioGrid"
import { TestimonialsSection } from "@/components/sections/Testimonials"
import { LeadMagnetBanner } from "@/components/sections/LeadMagnetBanner"
import { ExitIntentPopup } from "@/components/ui/ExitPopup"

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-y border-border/50">
        <TrustTicker />
      </div>
      <VideoCarousel />
      <ServicesSnapshot />
      <SocialProof />
      <CaseStudyCarousel />
      
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <QuickContact />
        </div>
      </section>

      <PortfolioGrid />
      <TestimonialsSection />
      <LeadMagnetBanner />
      
      <ExitIntentPopup />
    </>
  )
}

