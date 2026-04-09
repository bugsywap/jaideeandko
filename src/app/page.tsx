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
import { BlogCarousel } from "@/components/sections/BlogCarousel"
import { ExitIntentPopup } from "@/components/ui/ExitPopup"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export const metadata = {
  title: "Premium Corporate Video Production Singapore | Jaidee & Ko",
  description: "Specializing in corporate vision films and social-first content for B2B tech companies, NGOs, and founders. We turn complex narratives into high-impact visual storytelling.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal className="border-y border-border/50">
        <TrustTicker />
      </ScrollReveal>
      <ScrollReveal>
        <ServicesSnapshot />
      </ScrollReveal>
      <ScrollReveal>
        <SocialProof />
      </ScrollReveal>
      <ScrollReveal>
        <CaseStudyCarousel />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <LeadMagnetBanner />
      </ScrollReveal>
      
      <ExitIntentPopup />
    </>
  )
}

