import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

export function LeadMagnetBanner() {
  return (
    <section className="bg-foreground py-16 sm:py-24 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/10 text-primary-foreground text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Free Download</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              5 Videos Every B2B Brand Needs
            </h2>
            <p className="mt-4 text-lg leading-8 text-foreground/70">
              Stop guessing what works. Discover the definitive video assets that drive trust, increase conversions, and shorten B2B sales cycles in Southeast Asia.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 sm:p-10 shadow-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Where should we send the guide?</h3>
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="lm-name" className="sr-only">Name</label>
                <input
                  type="text"
                  name="name"
                  id="lm-name"
                  className="block w-full rounded-md border-0 py-3 px-4 text-foreground bg-background shadow-sm ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lm-email" className="sr-only">Work Email</label>
                <input
                  type="email"
                  name="email"
                  id="lm-email"
                  className="block w-full rounded-md border-0 py-3 px-4 text-foreground bg-background shadow-sm ring-1 ring-inset ring-border placeholder:text-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="Work Email"
                  required
                />
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex w-full justify-center items-center gap-2 rounded-md bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all"
              >
                Send Me The Guide
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-xs text-foreground/70 text-center mt-2">
                By downloading, you agree to our privacy policy. No spam.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
