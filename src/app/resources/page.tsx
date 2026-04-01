import { LeadMagnetBanner } from "@/components/sections/LeadMagnetBanner"

export const metadata = {
  title: "Video Marketing Resources | Jaidee & Ko",
  description: "Free guides, checklists, and templates to optimize your B2B video marketing efforts.",
}

export default function ResourcesPage() {
  return (
    <>
      <div className="bg-surface py-24 sm:py-32 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Free Resources
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/70 max-w-2xl mx-auto">
            Frameworks and checklists we use to build high-converting video campaigns.
          </p>
        </div>
      </div>

      <div className="py-24">
        <LeadMagnetBanner />
      </div>
    </>
  )
}
