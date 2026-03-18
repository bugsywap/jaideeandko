"use client"

import { useState } from "react"
import Link from "next/link"
import { blogPosts } from "@/data/blog-posts"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight, Clock, User } from "lucide-react"

export function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col gap-16 lg:gap-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {currentPosts.map((post, idx) => (
          <motion.article 
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.8 }}
            className="group flex flex-col bg-surface/30 rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
          >
            <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute top-6 left-6">
                <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest border-none">
                  {post.category}
                </Badge>
              </div>
            </Link>
            
            <div className="flex-1 p-8 flex flex-col">
              <div className="flex items-center gap-4 text-foreground/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {post.author}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-foreground/60 text-sm leading-relaxed mb-8 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-6 border-t border-border/50">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest group/btn"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Elegant Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 py-8">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-3 rounded-full border border-border/50 hover:border-primary hover:text-primary disabled:opacity-20 disabled:hover:border-border/50 disabled:hover:text-foreground transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={cn(
                  "w-12 h-12 rounded-full font-black text-xs transition-all duration-300",
                  currentPage === number 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "bg-surface/50 border border-border/30 hover:border-primary/50 text-foreground/40 hover:text-primary"
                )}
              >
                {number}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-3 rounded-full border border-border/50 hover:border-primary hover:text-primary disabled:opacity-20 disabled:hover:border-border/50 disabled:hover:text-foreground transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}
