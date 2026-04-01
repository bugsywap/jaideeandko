import { Video, Share2, Users, CalendarDays, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const services = [
  {
    title: "Corporate & Brand Videos",
    description: "High-end visual storytelling that communicates your corporate narrative and builds social proof with stakeholders.",
    icon: Video,
    href: "/services#corporate",
    className: "bg-surface rounded-2xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col border border-border shadow-sm group hover:border-primary hover:shadow-md transition-all cursor-pointer",
  },
  {
    title: "Social Media Content",
    description: "Short-form, engaging, and highly shareable content designed specifically for LinkedIn, Instagram, and TikTok.",
    icon: Share2,
    href: "/services#social",
    className: "bg-surface rounded-2xl aspect-square p-8 flex justify-between flex-col border border-border shadow-sm group hover:border-primary hover:shadow-md transition-all cursor-pointer",
  },
  {
    title: "Founder Story Videos",
    description: "Humanize your brand with authentic documentary-style profiles that capture your leadership's vision and passion.",
    icon: Users,
    href: "/services#founder",
    className: "bg-surface rounded-2xl aspect-square p-8 flex justify-between flex-col border border-border shadow-sm group hover:border-primary hover:shadow-md transition-all cursor-pointer",
  },
  {
    title: "Event Coverage",
    description: "Dynamic highlight reels and keynotes that extend the lifespan and impact of your physical events.",
    icon: CalendarDays,
    href: "/services#event",
    className: "bg-surface rounded-2xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col border border-border shadow-sm group hover:border-primary hover:shadow-md transition-all cursor-pointer",
  },
]

export function ServicesSnapshot() {
  return (
    <div className="w-full py-20 lg:py-32 bg-background text-foreground">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col gap-10">
          
          <div className="flex gap-4 flex-col items-center sm:items-start">
            <div>
              <Badge variant="outline" className="border-primary text-primary bg-primary/10">Capabilities</Badge>
            </div>
            <div className="flex gap-2 flex-col text-center sm:text-left">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-foreground">
                What We Do
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-foreground/70">
                We partner with organisations to fast-track ideas and capture expertise through visual storytelling. Custom packages starting from SGD 3,500.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link href={service.href} key={index} className={service.className}>
                <service.icon className="w-10 h-10 stroke-1 text-foreground group-hover:text-primary transition-colors" />
                <div className="flex flex-col mt-8 lg:mt-0">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80 max-w-sm text-base mt-3 group-hover:text-foreground transition-colors">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-primary mt-6 pt-6 border-t border-border group-hover:border-primary/30 transition-colors">
                    Explore service <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
