"use client"

import Link from "next/link"
import { blogPosts } from "@/data/blog-posts"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"

export function BlogCarousel() {
  return (
    <section className="py-24 sm:py-32 bg-background border-t border-border/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Stay Ahead
            </Badge>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-foreground leading-[0.9]">
              Latest from <span className="text-primary italic">the Lab.</span>
            </h2>
          </div>
          <Link href="/blog" className="group flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest pb-2 border-b border-transparent hover:border-primary">
            View all insights
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, idx) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative flex flex-col bg-surface/50 border border-border/50 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-700"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary px-2 py-0 border-none bg-primary/5">
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1.5 text-foreground/40"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-foreground/60 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-foreground/40 hover:text-primary text-[10px] font-black uppercase tracking-widest transition-colors group/link"
                >
                  Read Story
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
