import { Metadata } from "next"
import { notFound } from "next/navigation"
import { caseStudies } from "@/data/case-studies"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowLeft, ShieldCheck, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { QuickContact } from "@/components/sections/QuickContact"
import { VimeoPlayer } from "@/components/ui/VimeoPlayer"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  
  return {
    title: `${study?.client || 'Project'}: ${study?.title || 'Case Study'} | Jaidee & Ko`,
    description: study?.description || "Success story and visual showcase of our premium production work.",
  }
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

const clientDetails: Record<string, { label: string, image: string }> = {
  "AIA": { label: "Global Insurance Provider", image: "/img/AIA.png" },
  "Young Founders School": { label: "Non-Profit", image: "/img/sch1.png" },
  "3 Degrees": { label: "Social Tech Platform", image: "/img/3-deg.png" },
  "Green Chapter": { label: "Corporate Client", image: "/img/GClogo_No Background.png" },
  "Enterprise Singapore": { label: "Government Agency", image: "/img/es_1ceXgYdj.png" },
  "Accenture": { label: "Global Consulting", image: "/img/accenture-2.png" },
  "UOB Asset Management": { label: "Financial Institution", image: "/img/uob_e.png" },
  "Meltwater": { label: "Global SaaS Company", image: "/img/meltwa.png" },
  "Wealth GPS": { label: "Financial Advisory", image: "/img/Wealth GPS.png" },
  "Productivity Joy": { label: "Consulting Agency", image: "/img/productivity.png" },
  "Land Transport Authority": { label: "Government Agency", image: "/img/land-transport-authority.png" },
  "Kaleoscopic Communications": { label: "Digital Bank", image: "/img/anext_bank1.png" },
  "NIE": { label: "Educational Institute", image: "/img/NIE.png" },
  "Ministry of Manpower": { label: "Government Agency", image: "/img/mom.png" },
  "Workforce Singapore": { label: "Government Agency", image: "/img/wsg.png" },
  "Mentem": { label: "B2B Agency", image: "/img/mentum NSW.png" }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    notFound()
  }

  const details = clientDetails[study.client]

  return (
    <div className="bg-background pt-32 pb-16 overflow-hidden">
      {/* Dynamic Header / Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 lg:mb-24">
        <Link 
          href="/#case-studies" 
          className="inline-flex items-center text-foreground/50 hover:text-primary transition-colors text-sm font-bold mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to all Case Studies
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Badge variant="outline" className="w-fit border-primary/30 text-primary bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              {details?.label || study.category}
            </Badge>
            <div className="flex items-start justify-between gap-6 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-foreground/50 text-xs font-black uppercase tracking-[0.2em]">
                  {study.client}
                </p>
                <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.1] line-clamp-3">
                  {study.title}
                </h1>
              </div>
              
              {details?.image && (
                <div className="shrink-0 flex items-center">
                  <img 
                    src={details.image} 
                    alt={`${study.client} logo`}
                    className="h-12 sm:h-16 lg:h-20 w-auto max-w-[140px] object-contain object-right" 
                  />
                </div>
              )}
            </div>
            <p className="text-lg leading-relaxed text-foreground/70 max-w-xl">
              {study.description}
            </p>
            
            <div className="flex items-center gap-4 mt-4">
               <div className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Multi-stakeholder Approval
               </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black border border-border shadow-2xl z-10 group">
              <iframe
                src={`https://player.vimeo.com/video/${study.vimeoId}?autoplay=0&byline=0&title=0&portrait=0`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-surface/30 py-24 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Project <span className="text-primary italic">Gallery</span>
            </h2>
            <p className="text-foreground/60 max-w-xl">
              A curated collection of visual assets produced for this campaign, showcasing the diversity of storytelling approaches.
            </p>
          </div>

          {/* Gallery Items */}
          <div className="flex flex-col gap-12">
            {/* Corporate Grid (3 Columns) */}
            {study.gallery.filter(item => item.type === 'corporate').length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {study.gallery
                  .filter(item => item.type === 'corporate')
                  .map((item, idx) => (
                    <div key={`corp-${idx}`} className="flex flex-col gap-4 group">
                      <div className="relative overflow-hidden rounded-2xl bg-black border border-border/50 shadow-lg aspect-video isolate w-full">
                        <VimeoPlayer
                          vimeoId={item.vimeoId}
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                      <div className="px-1">
                        <h4 className="text-foreground font-bold tracking-tight mb-1">{item.title}</h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* Social Grid (4 Columns) */}
            {study.gallery.filter(item => item.type === 'social').length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {study.gallery
                  .filter(item => item.type === 'social')
                  .map((item, idx) => (
                    <div key={`social-${idx}`} className="flex flex-col gap-4 group">
                      <div className="relative overflow-hidden rounded-2xl bg-black border border-border/50 shadow-lg aspect-[9/16] isolate w-full">
                        <VimeoPlayer
                          vimeoId={item.vimeoId}
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                      <div className="px-1">
                        <h4 className="text-foreground font-bold tracking-tight mb-1">{item.title}</h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-40">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-8">
              Work with us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight mb-8">
              Ready to create your <span className="text-primary italic">Story?</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Whether it's a corporate brand film or a social media campaign, we're here to help you capture expertise and build authority.
            </p>
            
            <div className="max-w-xl mx-auto">
                <QuickContact />
            </div>
        </div>
      </section>
    </div>
  )
}
