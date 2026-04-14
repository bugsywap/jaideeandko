"use client"

import { useState, useEffect } from "react"
import { X, Mail } from "lucide-react"
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
    const data = {
      email: formData.get("email"),
      _subject: `New Newsletter Signup: ${formData.get("email")}`,
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
          email: formData.get("email"),
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
        setTimeout(() => setIsOpen(false), 2000)
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
          <div className="relative transform overflow-hidden rounded-2xl bg-surface text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-border">
            
             <button
                type="button"
                className="absolute right-4 top-4 rounded-md text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>

            <div className="px-6 py-8 sm:p-10">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <h3 className="text-2xl font-bold leading-6 text-foreground mb-4" id="modal-title">
                    Before you go…
                  </h3>
                  <div className="mt-2 text-foreground/70">
                    <p>
                      Want occasional tips, ideas, and inspiration for your next project? Join our newsletter.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="mt-8">
                    <div className="flex flex-col gap-4">
                      <div>
                        <label htmlFor="modal-email" className="sr-only">Email address</label>
                        <input
                           type="email"
                           name="email"
                           id="modal-email"
                           className="block w-full rounded-md border-0 py-3 px-4 text-foreground bg-background shadow-sm ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                           placeholder="Enter your email"
                           required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status !== "idle"}
                        className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 sm:w-auto transition-opacity disabled:opacity-75"
                      >
                        {status === "submitting" ? (
                          "Sending..."
                        ) : status === "success" ? (
                          "Sent!"
                        ) : (
                          <>
                            <Mail className="w-4 h-4" />
                            Join the Newsletter
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                  <p className="mt-4 text-xs text-foreground/70 text-center sm:text-left">
                    No spam. Just value. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-border text-center sm:text-right">
              <button
                type="button"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
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
