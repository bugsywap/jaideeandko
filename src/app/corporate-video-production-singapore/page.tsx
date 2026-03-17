import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot"
import { TestimonialsSection } from "@/components/sections/Testimonials"
import { QuickContact } from "@/components/sections/QuickContact"
import { TrustTicker } from "@/components/sections/TrustTicker"

export const metadata = {
  title: "Corporate Video Production Company in Singapore | Jaidee & Ko",
  description: "Award-winning corporate video production agency in Singapore. We help B2B brands, NGOs, and founders tell compelling stories that drive actual business results.",
}

export default function SEO_CorporateVideoSingapore() {
  return (
    <>
      <div className="bg-background pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              Corporate Video Production in Singapore Let's make an impact.
            </h1>
            <p className="text-lg leading-8 text-foreground/70">
              You don't just need a video; you need a strategic asset. From C-suite interviews to company culture showcases, we craft corporate videos designed to build social proof and articulate your exact value proposition to stakeholders across Asia.
            </p>
          </div>
        </div>
      </div>

      <TrustTicker />
      <ServicesSnapshot />
      <TestimonialsSection />

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <QuickContact />
        </div>
      </section>
    </>
  )
}
