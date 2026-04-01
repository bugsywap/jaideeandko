import { Video, Share2, Users, CalendarDays, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const services = [
  {
    title: "Corporate & Brand Videos",
    description: "High-end visual storytelling that communicates your corporate narrative and builds social proof with stakeholders.",
    icon: Video,
    href: "/services#corporate",
    image: "/img/1.png",
    className: "relative overflow-hidden rounded-2xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col border border-transparent shadow-sm group hover:shadow-xl transition-all cursor-pointer",
  },
  {
    title: "Social Media Content",
    description: "Short-form, engaging, and highly shareable content designed specifically for LinkedIn, Instagram, and TikTok.",
    icon: Share2,
    href: "/services#social",
    image: "/img/2.png",
    className: "relative overflow-hidden rounded-2xl aspect-square p-8 flex justify-between flex-col border border-transparent shadow-sm group hover:shadow-xl transition-all cursor-pointer",
  },
  {
    title: "Founder Story Videos",
    description: "Humanize your brand with authentic documentary-style profiles that capture your leadership's vision and passion.",
    icon: Users,
    href: "/services#founder",
    image: "/img/3.png",
    className: "relative overflow-hidden rounded-2xl aspect-square p-8 flex justify-between flex-col border border-transparent shadow-sm group hover:shadow-xl transition-all cursor-pointer",
  },
  {
    title: "Event Coverage",
    description: "Dynamic highlight reels and keynotes that extend the lifespan and impact of your physical events.",
    icon: CalendarDays,
    href: "/services#event",
    image: "/img/4.png",
    className: "relative overflow-hidden rounded-2xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col border border-transparent shadow-sm group hover:shadow-xl transition-all cursor-pointer",
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
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0 bg-primary">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/85 transition-opacity duration-500 group-hover:bg-primary/75" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <service.icon className="w-10 h-10 stroke-1 text-primary-foreground" />
                  <div className="flex flex-col mt-8 lg:mt-0">
                    <h3 className="text-2xl font-bold tracking-tight text-primary-foreground">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/90 max-w-sm text-base mt-3">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-primary-foreground mt-6 pt-6 border-t border-primary-foreground/20">
                      Explore service <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
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
