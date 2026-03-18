import { blogPosts } from "@/data/blog-posts"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="bg-background min-h-screen pt-32 pb-24">
      {/* Article Hero */}
      <div className="container mx-auto px-6 max-w-4xl mb-16 lg:mb-24">
        <div className="flex flex-col gap-8">
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>
          
          <div className="flex flex-col gap-6">
            <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-4 py-1.5 text-[10px] font-black uppercase tracking-widest">
              {post.category}
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
                  JK
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 leading-none mb-1">Written by</span>
                  <span className="text-sm font-bold text-foreground leading-none">{post.author}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8 text-foreground/40">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Published</span>
                  <span className="text-sm font-bold text-foreground leading-none flex items-center gap-1.5 align-middle">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Time</span>
                  <span className="text-sm font-bold text-foreground leading-none flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-6 max-w-6xl mb-16 lg:mb-24">
        <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 max-w-4xl relative">
        {/* Floating Share Bar (Desktop) */}
        <div className="hidden lg:block absolute -left-24 top-0 sticky top-40 h-fit">
          <div className="flex flex-col gap-4">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div 
          className="prose prose-invert prose-lg max-w-none 
          prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground
          prose-h1:text-5xl sm:prose-h1:text-7xl prose-h1:mb-12
          prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:font-black
          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:font-bold
          prose-p:text-foreground/80 prose-p:leading-[1.8] prose-p:mb-10 prose-p:text-xl
          prose-strong:text-primary prose-strong:font-black
          prose-li:text-foreground/80 prose-li:mb-4 prose-li:text-lg
          prose-ol:mb-12 prose-ul:mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Final CTA */}
        <div className="mt-20 p-12 lg:p-16 bg-surface border border-border/50 rounded-[3rem] text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h3 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">Ready to boost your conversion?</h3>
            <p className="text-lg text-foreground/60 max-w-xl">
              Let's chat about how we can implement these insights into your next video campaign.
            </p>
            <Button size="lg" className="rounded-full bg-primary font-black uppercase tracking-widest text-xs px-10 h-14 group/cta" asChild>
              <Link href="/contact">
                Talk to the Team
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180 transition-transform group-hover/cta:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
