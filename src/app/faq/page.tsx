import { QuickContact } from "@/components/sections/QuickContact"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Frequently Asked Questions | Jaidee & Ko",
  description: "Find answers about pricing, turnaround times, and our video production process in Singapore.",
}

const faqs = [
  {
    question: "1. What services do you offer & what are the costs?",
    answer: "Our creative services include: \n\n- Social Video Production\n- Corporate Video Production\n- Branded Content Creation\n- Film Production (including development, pre-production, filming, post-production, and social media management)\n\nPricing is tailored to each project's unique requirements. Our services start from $1.5k and can range up to $200k+ for extensive, high-end solutions.\n\nFor a personalized quote, we recommend getting in touch to discuss your specific needs and goals."
  },
  {
    question: "2. What types of clients do you work with?",
    answer: "We focus on B2B businesses, industry leaders, NGOs, and non-profits, particularly those that often work behind the scenes but deserve to be seen. Our specialty is helping these organizations tell their stories in a way that feels genuine and impactful. We create approachable corporate videos that inspire advocacy and effectively communicate our clients' missions and values."
  },
  {
    question: "3. What equipment do you use for filming?",
    answer: "We utilize high-quality, industry-standard equipment including cameras, lighting, and sound gear."
  },
  {
    question: "4. What’s fully curated video vs ‘social-style’ video?",
    answer: "A fully curated video is typically more polished and designed for high-end marketing, while a social-style video is more raw, honest, and real. We believe social-style content connects more authentically with modern audiences."
  },
  {
    question: "5. Is there a minimum commitment for content development?",
    answer: "To successfully perform organically on socials we offer and encourage a longer working relationship with our partners but also offer per project based pricing too."
  },
  {
    question: "6. Do you do pro bono work?",
    answer: "Yes and no. We’re open to featuring businesses if we believe there’s a story worth telling for our audience. In these cases, the video is created from Jaidee & Ko’s perspective, and you’re welcome to share and use it for your own promotion. Fully pro bono work is considered on a case-by-case basis."
  },
  {
    question: "7. Can we be involved in the creative process?",
    answer: "Yes! We encourage collaboration. While we handle the technical and creative aspects, we value your input and want to ensure the final product reflects your vision and goals."
  },
  {
    question: "8. How can I get a quote for my project?",
    answer: "To receive a quote, please fill out the contact form on our website or book a call with us to discuss your project in detail."
  }
]

export default function FAQPage() {
  return (
    <div className="bg-background pt-32 pb-16 overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-7xl mb-16 lg:mb-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6 sm:mt-12 relative z-10">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1 text-sm">
            Knowledge Base
          </Badge>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Questions.</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/70 mt-4 max-w-2xl">
            Everything you need to know about our process, pricing, and how we deliver high-performing visual assets.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-surface/50 -skew-y-2 transform -z-10 origin-top-right border-y border-border/50" />
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-background border-border overflow-hidden hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground leading-snug">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-16 lg:mt-32 relative">
        <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform -z-10 origin-bottom-left" />
        <div className="container mx-auto px-6 max-w-7xl pt-16 pb-8">
          <div className="mb-12 text-center">
             <h2 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
             <p className="text-lg text-foreground/70 max-w-xl mx-auto">We're here to help. Drop us a message below and our team will get back to you within 24 hours.</p>
          </div>
          <QuickContact />
        </div>
      </section>
    </div>
  )
}
