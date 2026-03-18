import { QuickContact } from "@/components/sections/QuickContact"
import { Badge } from "@/components/ui/badge"
import { BlogGrid } from "@/components/sections/BlogGrid"

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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <BlogGrid />
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
