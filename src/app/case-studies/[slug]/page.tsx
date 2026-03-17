import { notFound } from "next/navigation"
import { caseStudies } from "@/data/case-studies"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowLeft, ShieldCheck, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { QuickContact } from "@/components/sections/QuickContact"

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    notFound()
  }

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
              {study.category} • {study.year}
            </Badge>
            <p className="text-foreground/50 text-xs font-black uppercase tracking-[0.2em]">
              {study.client}
            </p>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
              {study.title}
            </h1>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {study.gallery.map((item, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-2xl bg-black border border-border/50 shadow-lg group ${
                  item.type === 'social' ? 'aspect-[9/16]' : 'aspect-video'
                }`}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${item.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1`}
                  className="absolute inset-0 w-full h-full scale-[1.01]"
                  allow="autoplay; fullscreen; picture-in-picture"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-black/60 backdrop-blur-md border-white/20 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">
                    {item.type === 'social' ? 'Social Content' : 'Corporate Film'}
                  </Badge>
                </div>
              </div>
            ))}
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
