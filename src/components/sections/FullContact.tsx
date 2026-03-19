"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function FullContact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    
    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      company: formData.get("company"),
      email: formData.get("email"),
      industry: formData.get("industry"),
      message: formData.get("message"),
      _subject: `New Contact Form Submission: ${formData.get("first-name")} ${formData.get("last-name")}`,
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
    <div className="bg-background">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">Let's talk about your brand</h2>
        <p className="mt-2 text-lg leading-8 text-foreground/70 text-center">
          We typically respond within 1 business day. No pushy sales calls.
        </p>
        
        <form onSubmit={handleSubmit} className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-foreground">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground bg-surface shadow-sm ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-foreground">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground bg-surface shadow-sm ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-foreground">
                Company Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground bg-surface shadow-sm ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground bg-surface shadow-sm ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            {/* FIXED UX BUG: Use correct Industry Placeholder and Type */}
            <div className="sm:col-span-2">
              <label htmlFor="industry" className="block text-sm font-semibold leading-6 text-foreground">
                Industry
              </label>
              <div className="mt-2.5">
                <select
                  id="industry"
                  name="industry"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2.5 text-foreground bg-surface shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select your industry</option>
                  <option value="b2b-saas">B2B / Tech / SaaS</option>
                  <option value="ngo">NGO / Social Impact</option>
                  <option value="government">Government / Public Sector</option>
                  <option value="finance">Finance / Banking</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground bg-surface shadow-sm ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="Tell us about the project you have in mind..."
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
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
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
