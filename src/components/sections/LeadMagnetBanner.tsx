"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Mail, Sparkles, Loader2 } from "lucide-react"

export function LeadMagnetBanner() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string

    const data = {
      name: name,
      email: email,
      _subject: `New Lead - Guide Download: ${name}`,
      _cc: "gkoay@jaideeandko.com",
      _template: "table"
    }

    try {
      // 1. Silent invisible push to Google Sheets 
      fetch("https://script.google.com/macros/s/AKfycbwkfXZlqYaO5I_ATWpcbi7edBN0bfSHAlHEbhI3tbEbsw8DMc8Yvrb9NRg6NBM7ImZ0qA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          formType: "home",
          name: name,
          email: email,
        })
      }).catch(err => console.error("Sheet Sync Error:", err))

      // 2. Primary push to FormSubmit to deliver the Email Lead notification to team
      const response = await fetch("https://formsubmit.co/ajax/admin@getnifty.xyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setStatus("success")
        ;(e.target as HTMLFormElement).reset()
        
        // Trigger automatic resource download
        const a = document.createElement('a');
        a.href = "/5_Videos_Every_B2B_Needs_Roadmap.pdf";
        a.download = "5_Videos_Every_B2B_Needs_Roadmap.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setTimeout(() => setStatus("idle"), 5000)
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
    <section className="bg-background py-24 sm:py-32 overflow-hidden relative border-y border-border/50">
      {/* Signature Animated Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(117, 185, 162, 0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(117, 185, 162, 0.05) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content - Persuasive Copy */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exclusive Resource</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1] mb-8">
              5 Videos Every <span className="text-primary italic">B2B Brand</span> Needs
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/70 font-medium leading-relaxed mb-10">
              Stop guessing what works. Discover the definitive video assets that drive trust, increase conversions, and shorten B2B sales cycles in Southeast Asia.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">Free PDF Guide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">No Sales Calls</span>
              </div>
            </div>
          </div>

          {/* Right Content - Premium Glassmorphism Form */}
          <div className="w-full max-w-md shrink-0 relative group">
            {/* Soft Glow Under Form */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            
            <div className="bg-surface/40 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 border border-border/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
              <div className="flex flex-col items-center mb-8 text-center uppercase tracking-widest text-xs font-black text-foreground/40">
                <Mail className="w-5 h-5 text-primary mb-3" />
                Where should we send the guide?
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="lm-name" className="text-[10px] font-black uppercase tracking-widest text-foreground/50 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="lm-name"
                    className="block w-full rounded-2xl border-border/50 bg-background/50 px-5 py-4 text-foreground placeholder-foreground/30 focus:border-primary focus:ring-primary/20 transition-all text-sm font-medium"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="lm-email" className="text-[10px] font-black uppercase tracking-widest text-foreground/50 ml-1">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    id="lm-email"
                    className="block w-full rounded-2xl border-border/50 bg-background/50 px-5 py-4 text-foreground placeholder-foreground/30 focus:border-primary focus:ring-primary/20 transition-all text-sm font-medium"
                    placeholder="johndoe@email.com"
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="group relative w-full overflow-hidden rounded-2xl bg-primary px-5 py-5 text-sm font-black uppercase tracking-widest text-primary-foreground shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {status === "submitting" ? (
                        <>
                          Sending... 
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </>
                      ) : status === "success" ? (
                        "Guide Sent!"
                      ) : (
                        <>
                          Get The Guide Now
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </div>
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </div>

                <p className="text-[10px] text-foreground/40 text-center font-bold uppercase tracking-tighter mt-6">
                  {status === "success" ? "Check your inbox (including spam folder)!" : "Secure download. No spam. Privacy guaranteed."}
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
