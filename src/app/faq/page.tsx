"use client"

import { useState } from "react"
import { CallToAction } from "@/components/sections/CallToAction"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqCategories = [
  {
    category: "Working With Us",
    faqs: [
      {
        question: "What types of clients do you work with?",
        answer: (
          <div className="space-y-4">
            <p>We work with businesses of all sizes - from funded startups and growing SMEs to established enterprises and large organisations. Our clients span B2B, NGOs, non-profits, government agencies, and beyond.</p>
            <p>What matters more than category is intent. Our best work happens with clients who have a story worth telling and the conviction to tell it well. If you're impact-driven - if what you do genuinely means something to the people you serve - we'll do our best work for you.</p>
          </div>
        )
      },
      {
        question: "How do I know if we're a good fit?",
        answer: (
           <div className="space-y-4">
             <p>We work best with clients who have a defined goal, a realistic budget, and openness to creative collaboration. If your brief is still forming, reach out - we can help shape it together.</p>
             <p>We are likely not the right fit if: the project has no meaningful lead time, the budget is under S$1,500, or the creative direction is fully locked before any discovery has taken place.</p>
             <div className="italic text-primary border-l-2 border-primary/50 pl-4 py-1 font-semibold text-[1.1rem]">A good brief is a shared one. We invest in yours.</div>
           </div>
        )
      },
      {
        question: "How far in advance should I reach out?",
        answer: "Lead time depends on scope. A focused social content shoot can be planned in two to three weeks. A multi-video corporate series typically needs four to eight weeks of preparation. The earlier you reach out, the more strategic value we can build into the engagement."
      },
      {
        question: "Do you travel outside Singapore for shoots?",
        answer: "Yes, upon request. We're based in Singapore but travel regionally and internationally for the right project. Travel logistics and associated costs are scoped transparently into the project quote."
      },
      {
        question: "Can we be involved in the creative process?",
        answer: "Collaboration is built into how we work. Your knowledge of your audience, culture, and constraints is irreplaceable - we can't replicate that through research alone. What we ask in return is trust in the creative and strategic framework we establish together. The best results come from clients who are engaged, not controlling."
      },
      {
        question: "Do you do pro bono work?",
        answer: "Selectively. We occasionally feature organisations we believe have a story worth telling - these are produced from Jaidee & Ko's creative perspective and shared with our audience. You're welcome to use and distribute the content freely. Fully pro bono engagements - where we work entirely to your brief - are considered case by case based on cause alignment and current capacity."
      }
    ]
  },
  {
    category: "Pricing & Payments",
    faqs: [
      {
        question: "What do your services cost?",
        answer: (
          <div className="space-y-4">
            <p>Most projects are quoted individually based on scope, crew, and deliverables. For repeatable formats - event coverage, property walkthroughs, and similar - we offer fixed rate cards that are priced clearly and move faster.</p>
            <p>For series work, the first instalment costs more to establish the creative framework. Subsequent pieces are arranged at a reduced rate.</p>
            <div className="italic text-primary border-l-2 border-primary/50 pl-4 py-1 font-semibold text-[1.1rem]">Minimum engagement: S$1,500</div>
          </div>
        )
      },
      {
        question: "What is your payment structure?",
        answer: (
          <p>Our standard structure is <strong className="text-foreground">50% upon project confirmation</strong> and <strong className="text-foreground">50% upon final delivery</strong>. For longer or milestone-based engagements, alternative schedules can be agreed during onboarding. Production does not commence until the initial payment is received.</p>
        )
      },
      {
        question: "Do you offer retainers or ongoing partnerships?",
        answer: "Yes. For clients with consistent content needs, we structure ongoing partnerships around volume and cadence. Retainer engagements typically deliver stronger output and better value than one-off projects - we become an extension of your team rather than a vendor you brief from scratch each time."
      }
    ]
  },
  {
    category: "Production & Delivery",
    faqs: [
      {
        question: "How long does a typical project take?",
        answer: "Timelines are set per project. A social content package may turn around in two to three weeks from shoot to delivery. A fully produced corporate video with strategy and scripting typically runs four to six weeks. A clear production schedule is established at the outset - no moving targets."
      },
      {
        question: "How many revision rounds are included?",
        answer: (
          <p><strong className="text-foreground">Two rounds of revisions</strong> are included as standard across all projects. Additional rounds can be arranged at an agreed rate. In our experience, two rounds are sufficient when the brief and concept are well-established before production begins - which is why we invest heavily in discovery and strategy upfront.</p>
        )
      },
      {
        question: "What formats will my final assets be delivered in?",
        answer: "Assets are delivered in formats optimised for your intended channels - broadcast specs, social platform ratios (16:9, 9:16, 1:1), or web delivery. Required formats are confirmed during onboarding so there's no re-exporting at handover."
      },
      {
        question: "What's the difference between fully curated and social-style video?",
        answer: (
          <div className="space-y-4">
            <p><strong className="text-foreground">Fully curated video</strong> is crafted for precision - polished, scripted, designed for high-stakes marketing or brand positioning.</p>
            <p><strong className="text-foreground">Social-style video</strong> is intentionally more immediate and raw, built for authenticity on platforms where audiences have learned to distrust over-production.</p>
            <p>Both serve a strategic purpose. We advise on which approach fits your goal - not which one costs more.</p>
          </div>
        )
      },
      {
        question: "What equipment do you use?",
        answer: "We use professional, industry-standard cameras, lighting, and audio equipment scaled to the needs of each project. For a consultation shoot we bring a lean, unobtrusive kit. For a flagship production we bring the full crew. The right tool for the right job - not the most impressive kit for the sake of it."
      }
    ]
  },
  {
    category: "Rights & Working Methods",
    faqs: [
      {
        question: "Who owns the footage and final assets after delivery?",
        answer: (
          <div className="space-y-4">
             <p>Ownership is defined per contract. In most engagements, the client holds full rights to the final delivered assets. Raw footage and project files may be retained by Jaidee & Ko unless a full raw transfer is agreed and scoped into the project. We discuss this clearly during onboarding - there is no ambiguity at handover.</p>
             <div className="italic text-primary border-l-2 border-primary/50 pl-4 py-1 font-semibold text-[1.1rem]">Ownership terms are always confirmed in writing before production begins.</div>
          </div>
        )
      },
      {
        question: "Do you use AI in your work?",
        answer: (
          <div className="space-y-4">
            <p>Yes - deliberately and transparently. We use AI tools across strategy, scripting, research, and elements of post-production. These tools accelerate the thinking work, not replace it. Every creative decision is made and reviewed by our team.</p>
            <p>We don't use AI to cut corners. We use it to spend more of our human time on what actually matters: the quality of the idea and the integrity of the execution.</p>
          </div>
        )
      }
    ]
  }
]

function FaqItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="border-b border-border/60 py-8 last:border-0 group cursor-pointer" 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-start gap-6">
        <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 leading-snug pt-1 ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary/80'}`}>
          {question}
        </h3>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'border-primary/30 bg-primary/10' : 'border-border group-hover:border-primary/50 group-hover:bg-primary/5'}`}
        >
          {isOpen ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-foreground/60 group-hover:text-primary" />}
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "anticipate" }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2 text-[1.1rem] text-foreground/70 leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform -z-10 origin-bottom-left" />
        <ScrollReveal className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center">
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-8">
            Knowledge Base
          </Badge>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase leading-[1.05]">
            Frequently Asked <br />
            <span className="text-primary italic">Questions</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl leading-relaxed text-foreground/70 font-medium max-w-2xl">
            Everything you need to know about working with us, pricing, production, and rights.
          </p>
        </ScrollReveal>
      </section>

      {/* FAQ Categories Section */}
      <section className="bg-background py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col gap-24 lg:gap-32">
            {faqCategories.map((cat, idx) => (
              <ScrollReveal key={idx} delay={0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  
                  {/* Category Title (Sticky over scroll) */}
                  <div className="lg:col-span-4 lg:sticky top-32">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Category {idx + 1}</span>
                    <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-foreground leading-none">
                      {cat.category}
                    </h2>
                  </div>
                  
                  {/* Accordion List */}
                  <div className="lg:col-span-8">
                    <div className="bg-surface/50 rounded-[2.5rem] p-8 md:p-12 border border-border/60 shadow-lg">
                      {cat.faqs.map((faq, i) => (
                        <FaqItem key={i} question={faq.question} answer={faq.answer} />
                      ))}
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contact CTA */}
      <CallToAction 
        title={<>Still have <span className="text-primary italic">questions</span>?</>}
        description="If you couldn't find your answer here, our inbox is always open."
      />
    </div>
  )
}

