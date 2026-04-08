import { QuickContact } from "@/components/sections/QuickContact"
import { Badge } from "@/components/ui/badge"
import { BlogGrid } from "@/components/sections/BlogGrid"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { getPosts } from "@/lib/hygraph"

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-border/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none -z-10" />
        <ScrollReveal className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8 relative z-10">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-sm">
              Insights & Strategy
            </Badge>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1] pb-2">
              Content that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40 inline-block animate-pulse">converts.</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/70 max-w-3xl font-medium">
              Actionable advice, trends, and strategies for brands looking to leverage video in their marketing pipeline.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-16 lg:pt-24">
        {posts.length > 0 ? (
          <BlogGrid posts={posts} />
        ) : (
          <ScrollReveal className="py-32 border border-border/50 rounded-3xl bg-surface/10 backdrop-blur-sm text-center">
            <h2 className="text-2xl font-black text-foreground/40 uppercase tracking-[0.3em]">
              Articles will be posted soon
            </h2>
            <p className="text-foreground/30 mt-4 font-medium italic">
              We're currently refining our latest strategic deep-dives. Stay tuned.
            </p>
          </ScrollReveal>
        )}
      </div>

      <section className="mt-16 lg:mt-32 relative">
        <div className="absolute inset-0 bg-primary/5 transform -z-10 origin-bottom-left" />
        <ScrollReveal className="container mx-auto px-6 max-w-7xl pt-16 pb-8">
          <div className="mb-12 text-center">
             <h2 className="text-3xl font-bold text-foreground mb-4">Want insights delivered?</h2>
             <p className="text-lg text-foreground/70 max-w-xl mx-auto">Drop us a message and we'll let you know when our first strategic deep-dive goes live.</p>
          </div>
          <QuickContact />
        </ScrollReveal>
      </section>
    </div>
  )
}
