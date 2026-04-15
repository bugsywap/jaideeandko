"use client"

import { useState, useEffect } from "react"
import { X, Mail, Download } from "lucide-react"
import { GOOGLE_SCRIPT_URL, FORM_SUBMIT_EMAIL, CC_EMAIL } from "@/lib/constants"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true)
        setHasTriggered(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasTriggered])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    
    const data = {
      email,
      _subject: `New Newsletter Signup (+ Checklist): ${email}`,
      _cc: CC_EMAIL,
      _template: "table"
    }

    try {
      // 1. Silent invisible push to Google Sheets
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          formType: "newsletter",
          email,
        })
      }).catch(err => console.error("Sheet Sync Error:", err))

      // 2. Secondary push to FormSubmit
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
        
        // 3. Automatic Download of the Checklist
        const downloadUrl = "/Video Marketing Checklist_Jaideeko Resource.pdf"; 
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "Video_Marketing_Checklist.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => setIsOpen(false), 3000)
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

  if (!isOpen) return null

  return (
    <div className="relative z-50 animate-in fade-in duration-300" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-3xl bg-surface text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-border">
            
             <button
                type="button"
                className="absolute right-6 top-6 rounded-full p-2 text-foreground/40 hover:text-foreground hover:bg-muted transition-all"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

            <div className="px-8 py-10 sm:p-12">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:text-left w-full">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground mb-4 leading-tight" id="modal-title">
                    Get marketing tips + <span className="text-primary italic">a free checklist</span>
                  </h3>
                  <div className="mt-2 text-foreground/70">
                    <p className="text-sm font-medium leading-relaxed">
                      Sign up to our newsletter and get a practical checklist to plan, launch, and improve your marketing, plus ongoing tips and insights.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="mt-10">
                    <div className="flex flex-col gap-4">
                      <div>
                        <label htmlFor="modal-email" className="sr-only">Email address</label>
                        <input
                           type="email"
                           name="email"
                           id="modal-email"
                           className="block w-full rounded-2xl border-border bg-background px-5 py-4 text-foreground placeholder-foreground/30 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm font-semibold"
                           placeholder="Enter your work email"
                           required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status !== "idle"}
                        className="group relative flex w-full justify-center items-center gap-3 overflow-hidden rounded-2xl bg-primary px-5 py-5 text-sm font-black uppercase tracking-widest text-primary-foreground shadow-xl transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-75"
                      >
                         <div className="relative z-10 flex items-center justify-center gap-3">
                          {status === "submitting" ? (
                            "Sending..."
                          ) : status === "success" ? (
                            "Checklist Downloaded!"
                          ) : (
                            <>
                              <Mail className="w-4 h-4" />
                              Get the Checklist
                            </>
                          )}
                        </div>
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </button>
                    </div>
                  </form>
                  <p className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 text-center">
                    Free download + occasional updates. No spam.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 px-6 py-4 sm:flex sm:flex-row-reverse sm:px-10 border-t border-border/50 text-center sm:text-right">
              <button
                type="button"
                className="text-[10px] font-black uppercase tracking-widest text-foreground/30 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                No thanks, I'll pass
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
