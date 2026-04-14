"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Download, Loader2, CheckCircle2, Sparkles } from "lucide-react"
import { GOOGLE_SCRIPT_URL, FORM_SUBMIT_EMAIL, CC_EMAIL } from "@/lib/constants"
import { Resource } from "@/data/resources"

interface ResourceDownloadModalProps {
  resource: Resource | null
  isOpen: boolean
  onClose: () => void
}

export function ResourceDownloadModal({ resource, isOpen, onClose }: ResourceDownloadModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  // Reset status when modal opens
  useEffect(() => {
    if (isOpen) setStatus("idle")
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string

    const data = {
      email,
      resourceTitle: resource?.title || "Unknown Resource",
      resourceId: resource?.id || "unknown",
      _subject: `Resource Download: ${resource?.title} (${email})`,
      _cc: CC_EMAIL,
      _template: "table"
    }

    // 1. Push to Google Sheets (Resource Sheet) - Non-blocking simple request
    try {
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          formType: "resource",
          email,
          resourceTitle: resource?.title,
        })
      }).catch(err => console.error("Sheet Sync Error:", err))
    } catch (err) {
      console.error("Critical sheet error:", err)
    }

    try {
      // 2. Primary push to FormSubmit - This determines the success state
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setStatus("success")
        
        // Trigger automatic resource download
        if (resource && resource.downloadUrl !== "#") {
          const a = document.createElement('a');
          a.href = resource.downloadUrl;
          a.download = resource.downloadUrl.split('/').pop() || "resource";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }

        setTimeout(() => {
          onClose()
        }, 4000)
      } else {
        setStatus("idle")
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("idle")
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && resource && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-2xl" 
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-surface border border-border/50 rounded-[3rem] shadow-[0_32px_128px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-8 top-8 p-2 rounded-full bg-muted/50 text-foreground/40 hover:text-foreground hover:bg-muted transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-10 sm:p-14">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative px-0">
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"
                      />
                      <CheckCircle2 className="w-12 h-12 text-primary relative z-10" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-black tracking-tighter mb-2">Guide Sent!</h3>
                      <p className="text-foreground/60 font-medium">Your download has started automatically.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-8">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Immediate Access</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-[1.15]">
                      Download <span className="text-primary italic block sm:inline">{resource.title}</span>
                    </h2>
                    
                    <p className="text-foreground/60 text-lg font-medium mb-12 leading-relaxed max-w-[90%]">
                      The full guide will be sent to your inbox and download instantly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="res-email" className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Work Email Address</label>
                        <div className="relative group">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/20 group-focus-within:text-primary transition-colors" />
                          <input
                            type="email"
                            name="email"
                            id="res-email"
                            className="block w-full rounded-2xl border-border bg-background px-16 py-6 text-foreground placeholder-foreground/20 focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all text-base font-semibold"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={status !== "idle"}
                          className="group relative w-full overflow-hidden rounded-2xl bg-primary px-5 py-6 text-sm font-black uppercase tracking-[0.3em] text-primary-foreground shadow-[0_25px_50px_rgba(117,185,162,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          <div className="relative z-10 flex items-center justify-center gap-3">
                            {status === "submitting" ? (
                              <>
                                <span>Processing...</span>
                                <Loader2 className="w-4 h-4 animate-spin" />
                              </>
                            ) : (
                              <>
                                <span>Get Access Now</span>
                                <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                              </>
                            )}
                          </div>
                          {/* Premium Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        </button>
                      </div>

                      <div className="flex items-center justify-center gap-8 opacity-30 pt-4">
                        <span className="text-[9px] font-black uppercase tracking-widest">No Spam</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Free Resource</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Instant</span>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
