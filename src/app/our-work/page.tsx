import { PortfolioGrid } from "@/components/sections/PortfolioGrid"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Our Work | Jaidee & Ko Video Production",
  description: "Explore our portfolio of corporate videos, documentaries, and social content for leading organisations across Southeast Asia.",
}

export default function PortfolioPage() {
  return (
    <div className="bg-background pt-32 pb-16 overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-7xl mb-16 lg:mb-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6 sm:mt-12 relative z-10">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1 text-sm">
            Portfolio
          </Badge>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
            Work that drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">results.</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/70 mt-4 max-w-2xl">
            Explore how we've helped leading organisations amplify their voice and connect with their audience through high-end visual storytelling.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Decorative background for the grid */}
        <div className="absolute inset-0 bg-surface/50 -skew-y-2 transform -z-10 origin-top-right border-y border-border/50" />
        <div className="pt-12 pb-24">
          <PortfolioGrid />
        </div>
      </div>
    </div>
  )
}
