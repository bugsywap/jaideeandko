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
      <ServicesSnapshot />
      <SocialProof />
      <CaseStudyCarousel />
      <PortfolioGrid />
      <TestimonialsSection />
      <LeadMagnetBanner />
      
      <ExitIntentPopup />
    </>
  )
}

