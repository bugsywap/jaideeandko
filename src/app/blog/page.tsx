import { QuickContact } from "@/components/sections/QuickContact"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Video Marketing Blog | Jaidee & Ko",
  description: "Insights, trends, and strategies for B2B video marketing in Southeast Asia.",
}

export default function BlogPage() {
  return (
    <div className="bg-background pt-32 pb-16 overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-7xl mb-16 lg:mb-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6 sm:mt-12 relative z-10">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1 text-sm">
            Insights & Strategy
          </Badge>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
            Content that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">converts.</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/70 mt-4 max-w-2xl">
            Actionable advice, trends, and strategies for brands looking to leverage video in their marketing pipeline.
          </p>
        </div>
      </div>

      <div className="relative border-b border-border/50 pb-24">
        <div className="absolute inset-0 bg-surface/50 -skew-y-2 transform -z-10 origin-top-right" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Temporary stub for static build */}
          <div className="bg-background border border-border rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-sm">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8l-4 4v14a2 2 0 0 0 2 2z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12h4"/><path d="M10 16h4"/></svg>
            </div>
             <h3 className="text-2xl font-bold text-foreground mb-2">New articles coming soon.</h3>
             <p className="text-foreground/70 text-lg">We are currently curating our best insights. Check back shortly!</p>
          </div>
        </div>
      </div>

      <section className="mt-16 lg:mt-32 relative">
        <div className="absolute inset-0 bg-primary/5 transform -z-10 origin-bottom-left" />
        <div className="container mx-auto px-6 max-w-7xl pt-16 pb-8">
          <div className="mb-12 text-center">
             <h2 className="text-3xl font-bold text-foreground mb-4">Want insights delivered?</h2>
             <p className="text-lg text-foreground/70 max-w-xl mx-auto">Drop us a message and we'll let you know when our first strategic deep-dive goes live.</p>
          </div>
          <QuickContact />
        </div>
      </section>
    </div>
  )
}
