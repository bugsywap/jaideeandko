"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight, Clock, User } from "lucide-react"
import { BlogPost } from "@/lib/hygraph"

interface BlogGridProps {
  posts: Array<any>;
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col gap-16 lg:gap-24">
      {/* Featured Post if on first page and there are posts */}
      {currentPage === 1 && currentPosts.length > 0 && (
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center rounded-[3rem] overflow-hidden bg-surface border border-border/50 hover:border-primary/30 transition-all duration-700 shadow-xl hover:shadow-2xl p-6 lg:p-10"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <Link href={`/blog/${currentPosts[0].slug}`} className="relative h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden group/img block shadow-lg">
            <img 
              src={currentPosts[0].image} 
              alt={currentPosts[0].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover/img:bg-transparent" />
            <div className="absolute top-6 left-6 z-10">
              <Badge className="bg-primary text-primary-foreground backdrop-blur-md px-4 py-1.5 text-xs font-black uppercase tracking-widest border-none shadow-xl">
                Featured
              </Badge>
            </div>
          </Link>

          <div className="flex flex-col py-8 lg:py-0 lg:pr-10 relative z-10">
            <div className="flex items-center gap-6 text-foreground/50 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <span className="flex items-center gap-2"><User className="w-3.5 h-3.5 text-primary" /> {currentPosts[0].authorName || currentPosts[0].author?.name || 'Jaidee & Ko'}</span>
              <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-primary" /> {currentPosts[0].readTime || '5 min read'}</span>
            </div>
            
            <h3 className="text-3xl lg:text-5xl font-black text-foreground mb-6 leading-[1.1] tracking-tight group-hover:text-primary transition-colors duration-500">
              <Link href={`/blog/${currentPosts[0].slug}`}>
                {currentPosts[0].title}
              </Link>
            </h3>
            
            <p className="text-foreground/70 text-lg lg:text-xl leading-relaxed mb-10 line-clamp-4 font-medium">
              {currentPosts[0].excerpt}
            </p>
            
            <Link 
              href={`/blog/${currentPosts[0].slug}`}
              className="inline-flex items-center justify-center w-fit gap-3 bg-foreground text-background hover:bg-primary px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 group/btn shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-primary/30"
            >
              Read Article
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </motion.article>
      )}

      {/* Grid for remaining posts */}
      {(currentPosts.length > (currentPage === 1 ? 1 : 0)) && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {currentPosts.slice(currentPage === 1 ? 1 : 0).map((post, idx) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group flex flex-col bg-surface rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-2 relative"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              
              <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden z-10 m-3 rounded-[2rem]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20" />
                <div className="absolute top-5 left-5">
                  <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-md px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] border-none shadow-sm">
                    {post.category || 'Insights'}
                  </Badge>
                </div>
              </Link>
              
              <div className="flex-1 p-8 pt-4 flex flex-col relative z-10">
                <div className="flex items-center gap-4 text-foreground/40 text-[9px] font-black uppercase tracking-[0.2em] mb-4">
                  <span className="flex items-center gap-1.5"><User className="w-3 h-3 text-primary/70" /> {post.authorName || post.author?.name || 'Jaidee & Ko Team'}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-primary/70" /> {post.readTime || '5 min read'}</span>
                </div>
                
                <h3 className="text-2xl font-black text-foreground mb-4 leading-tight tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-3">
                  <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-foreground/60 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-border/30">
                  <span className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px] group/read transition-all">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* Elegant Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 py-12">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-border/50 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border/50 disabled:hover:text-foreground transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          
          <div className="flex items-center gap-3 bg-surface border border-border/30 rounded-full p-2 shadow-sm">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={cn(
                  "w-10 h-10 rounded-full font-black text-xs transition-all duration-300 flex items-center justify-center",
                  currentPage === number 
                    ? "bg-primary text-white shadow-md shadow-primary/20 scale-110" 
                    : "hover:bg-primary/10 text-foreground/50 hover:text-primary"
                )}
              >
                {number}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-border/50 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border/50 disabled:hover:text-foreground transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}
