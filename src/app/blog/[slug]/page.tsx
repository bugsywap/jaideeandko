import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react"

import { Metadata } from "next"
import { getPostBySlug, getPosts } from "@/lib/hygraph"

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  return {
    title: `${post?.title || 'Insight'} | Jaidee & Ko`,
    description: post?.excerpt || "Expert insights on B2B video marketing and social content strategy.",
  }
}

export async function generateStaticParams() {
  const posts = await getPosts();
  if (!posts || posts.length === 0) {
    return [{ slug: 'coming-soon' }];
  }
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  // Fallback for HTML
  const contentHtml = post.content?.html || '';

  return (
    <article className="bg-background min-h-screen pb-24 overflow-hidden">
      {/* Article Hero */}
      <div className="relative pt-32 lg:pt-48 pb-16 lg:pb-24 border-b border-border/50 bg-surface">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col gap-8 lg:gap-10">
            <Link 
              href="/blog" 
              className="inline-flex w-fit items-center gap-3 text-foreground/40 hover:text-primary transition-all text-xs font-black uppercase tracking-[0.2em] group bg-background/50 hover:bg-background px-4 py-2 rounded-full border border-border/50"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Insights
            </Link>
            
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 items-start">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-4 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] shadow-sm">
                  {post.category || 'Insights'}
                </Badge>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground leading-[1.05] tracking-tighter">
                  {post.title}
                </h1>
              </div>
              
              <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-border/50">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs overflow-hidden border-2 border-background shadow-md">
                    {post.author?.picture?.url ? (
                      <img src={post.author.picture.url} alt={post.authorName || 'Author'} className="w-full h-full object-cover" />
                    ) : 'JK'}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-1">Written by</span>
                    <span className="text-sm font-bold text-foreground">{post.authorName || post.author?.name || 'Jaidee & Ko Team'}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-1">Published</span>
                    <span className="text-sm font-bold text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/70" /> {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently'}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-1">Read Time</span>
                    <span className="text-sm font-bold text-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary/70" /> {post.readTime || '5 min read'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-6 max-w-6xl -mt-12 lg:-mt-20 relative z-10 mb-20 lg:mb-32">
        <div className="relative aspect-video rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl bg-muted group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <img 
            src={post.image || post.coverImage?.url || '/img/blog-placeholder.jpg'} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
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

        <div className="flex justify-center w-full">
          <div 
            className="prose dark:prose-invert max-w-[70ch] w-full
            prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-foreground
            prose-h2:text-3xl sm:prose-h2:text-5xl prose-h2:mt-24 prose-h2:mb-10 prose-h2:leading-[1.1]
            prose-h3:text-2xl sm:prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-6 prose-h3:leading-[1.2]
            prose-p:text-foreground/70 prose-p:leading-[1.9] prose-p:mb-10 prose-p:text-lg sm:prose-p:text-[21px] prose-p:font-medium prose-p:tracking-[-0.01em]
            prose-strong:text-foreground prose-strong:font-black
            prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:text-primary/70 prose-a:transition-colors prose-a:font-bold
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-surface/50 prose-blockquote:px-8 sm:prose-blockquote:px-10 prose-blockquote:py-8 sm:prose-blockquote:py-10 prose-blockquote:rounded-r-3xl prose-blockquote:not-italic prose-blockquote:text-2xl sm:prose-blockquote:text-3xl prose-blockquote:font-black prose-blockquote:text-foreground prose-blockquote:my-16 prose-blockquote:shadow-lg prose-blockquote:tracking-tight prose-blockquote:leading-[1.4]
            prose-li:text-foreground/70 prose-li:mb-4 prose-li:text-lg sm:prose-li:text-[21px] prose-li:marker:text-primary prose-li:marker:font-black prose-li:font-medium
            prose-ol:mb-12 prose-ul:mb-12 prose-ul:list-disc prose-ol:list-decimal
            prose-img:rounded-[2rem] prose-img:border prose-img:border-border/50 prose-img:shadow-2xl prose-img:my-16 prose-img:w-full
            prose-hr:border-border/40 prose-hr:my-16"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
        
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
