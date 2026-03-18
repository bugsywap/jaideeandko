"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Instagram, Youtube } from "lucide-react"
import { useEffect, useState } from "react"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/jaidee-ko",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jaideeandko/",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@jaideeandko",
    icon: TikTokIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@jaideeandko?sub_confirmation=1",
    icon: Youtube,
  },
]

export function FloatingSocials() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-6 bottom-1/2 translate-y-1/2 z-50 hidden md:block">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-4 p-3 rounded-2xl bg-surface/40 backdrop-blur-xl border border-border/50 shadow-2xl shadow-primary/10"
          >
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl text-foreground/50 hover:text-primary hover:bg-primary/10 transition-all duration-300 group relative"
              >
                <social.icon className="w-5 h-5" />
                <span className="absolute left-full ml-4 px-2 py-1 rounded bg-foreground text-background text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
