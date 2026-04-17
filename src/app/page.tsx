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
import { CallToAction } from "@/components/sections/CallToAction"
import { BlogCarousel } from "@/components/sections/BlogCarousel"
import { ExitIntentPopup } from "@/components/ui/ExitPopup"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export const metadata = {
  title: "Jaidee & Ko | Premium Corporate Video & Social Content in Singapore",
  description: "For B2B companies, NGOs, and founders. We turn complex ideas into clear, trusted narratives that drive visibility and opportunity.",
  openGraph: {
    images: [
      {
        url: "/logo-withbg.png",
        width: 1200,
        height: 630,
        alt: "Jaidee & Ko - Premium Corporate Video & Social Content",
      },
    ],
  },
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
      <CallToAction 
        title={<>Ready to command <span className="text-primary italic">attention</span>?</>}
        description="Let's build a video strategy that accelerates growth for your company."
      />
      
      <ExitIntentPopup />
    </>
  )
}

