"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/our-work' },
  { name: 'Our Process', href: '/our-process' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for glassmorphism and size transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header 
      className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-500",
        mobileMenuOpen ? "bg-background opacity-100 py-4" : (
          scrolled 
            ? "py-4 bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-black/20" 
            : "py-6 bg-transparent"
        )
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="relative group transition-transform duration-300 hover:scale-105 active:scale-95">
            <span className="sr-only">Jaidee & Ko</span>
            <img 
              src="/img/jaideeko-png.webp" 
              alt="Jaidee & Ko" 
              className={cn("transition-all duration-500", scrolled ? "h-7" : "h-8")} 
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={cn(
                  "relative px-5 py-2 text-[13px] font-light uppercase tracking-[0.15em] transition-colors group",
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                )}
              >
                {item.name}
                <span 
                  className={cn(
                    "absolute bottom-0 left-5 right-5 h-0.5 bg-primary transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} 
                />
              </Link>
            )
          })}
        </div>
        
        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3 text-[12px] font-black uppercase tracking-widest text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
          >
            <span className="relative z-10">Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="relative z-[110] -m-2.5 p-2.5 text-foreground transition-transform active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1.5 w-6 items-end">
              <motion.span 
                animate={mobileMenuOpen ? { rotate: 45, y: 8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                className="h-0.5 bg-foreground rounded-full"
              />
              <motion.span 
                animate={mobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, width: "70%" }}
                className="h-0.5 bg-foreground rounded-full"
              />
              <motion.span 
                animate={mobileMenuOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "40%" }}
                className="h-0.5 bg-foreground rounded-full"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] lg:hidden"
          >
            <div className="absolute inset-0 bg-background" />
            
            <div className="relative flex flex-col h-full px-8 pt-32 pb-12">
              <div className="flex flex-col gap-6">
                {navigation.map((item, i) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "text-4xl sm:text-5xl font-black tracking-tighter transition-colors flex items-center justify-between group",
                          isActive ? "text-primary" : "text-foreground hover:text-primary"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                        <ArrowRight 
                          className={cn(
                            "w-8 h-8 transition-all",
                            isActive 
                              ? "opacity-100 translate-x-0" 
                              : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                          )} 
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-auto pt-12 border-t border-border/50">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full rounded-2xl bg-primary py-6 text-xl font-black uppercase tracking-widest text-primary-foreground shadow-2xl shadow-primary/20"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Let's Talk
                  </Link>
                  
                  <div className="mt-12 flex justify-center gap-8">
                    <a href="https://www.linkedin.com/company/jaidee-ko" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">LinkedIn</a>
                    <a href="https://www.instagram.com/jaideeandko/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">Instagram</a>
                    <a href="https://tiktok.com/@jaideeandko" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">TikTok</a>
                    <a href="https://www.youtube.com/@jaideeandko?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">YouTube</a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
