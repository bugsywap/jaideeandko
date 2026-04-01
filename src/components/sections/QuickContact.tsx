"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function QuickContact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      interest: formData.get("interest"),
      _subject: `New Lead from Website (Quick Contact): ${formData.get("name")}`,
      _cc: "gkoay@jaideeandko.com",
      _template: "table"
    }

    try {
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
    <div className="bg-surface rounded-2xl p-8 border border-border sm:p-10 max-w-2xl mx-auto shadow-sm">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Need Video Strategy?</h3>
        <p className="mt-2 text-sm text-foreground/70">
          We typically respond within 1 business day. No pushy sales calls.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="qc-name" className="sr-only">Name</label>
            <input
              type="text"
              name="name"
              id="qc-name"
              required
              className="block w-full rounded-md border-0 py-2.5 px-3.5 text-foreground bg-background shadow-xs ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="qc-email" className="sr-only">Email</label>
            <input
              type="email"
              name="email"
              id="qc-email"
              required
              className="block w-full rounded-md border-0 py-2.5 px-3.5 text-foreground bg-background shadow-xs ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
              placeholder="Your Email"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="qc-interest" className="block text-sm font-medium leading-6 text-foreground mb-1">
            What type of video are you looking to create?
          </label>
          <select
            id="qc-interest"
            name="interest"
            required
            className="block w-full rounded-md border-0 py-3 px-3.5 text-foreground bg-background shadow-xs ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all appearance-none"
            defaultValue=""
          >
            <option value="" disabled>Select an option...</option>
            <option value="corporate">Corporate Brand Video</option>
            <option value="social">Social Media Content (Short-form)</option>
            <option value="founder">Founder Story / Documentary</option>
            <option value="event">Event Coverage</option>
            <option value="other">Not Sure / Other</option>
          </select>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={status !== "idle"}
            className="group flex w-full justify-center items-center gap-2 rounded-md bg-primary px-3.5 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              "Sending..."
            ) : status === "success" ? (
              "Message Sent!"
            ) : (
              <>
                Book My Free Consultation
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
