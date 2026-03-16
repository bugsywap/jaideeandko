import { QuickContact } from "@/components/sections/QuickContact"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Frequently Asked Questions | Jaidee & Ko",
  description: "Find answers about pricing, turnaround times, and our video production process in Singapore.",
}

const faqs = [
  {
    question: "What is your typical turnaround time?",
    answer: "For a standard corporate or founder story video, our end-to-end process (from strategy to final delivery) typically takes 4–6 weeks. Fast-track social media content batches can be delivered in as little as 2 weeks after filming."
  },
  {
    question: "Do you only work with clients in Singapore?",
    answer: "While we are headquartered in Singapore, we frequently partner with regional teams across Southeast Asia. We've shot campaigns in the Philippines, Indonesia, and Thailand for our multinational clients."
  },
  {
    question: "How does pricing work?",
    answer: "We offer custom packages starting from SGD 3,500 for standalone projects. For ongoing social media content retainers, we build bespoke pricing models based on your required volume and distribution needs."
  },
  {
    question: "Do you help with social media distribution?",
    answer: "Yes. As part of our extended services, we can provide thumbnail designs, optimized copy, hook variations, and a posting calendar to ensure your video assets actually get seen."
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
