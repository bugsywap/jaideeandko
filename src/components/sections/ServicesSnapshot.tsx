<<<<<<< HEAD
import { Video, Share2, Users, CalendarDays, ArrowRight } from "lucide-react"
=======
import { Video, Share2, Users, CalendarDays, PenTool, Code2, BookOpen, Mic, Radio, MessageSquare, Briefcase, ArrowRight } from "lucide-react"
>>>>>>> a607bf3a4aff2eb6abe5c634f4ef1ef8e1a283b2
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const services = [
  {
    title: "Corporate & Brand Videos",
    description: "High-end visual storytelling that communicates your corporate narrative and builds social proof with stakeholders.",
    icon: Video,
    href: "/services#corporate",
<<<<<<< HEAD
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
=======
    image: "/img/corpo-brand.jpg",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-2 md:row-span-2 p-6 lg:p-10 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
  },
  {
    title: "Social Media Content",
    description: "Short-form, highly shareable content explicitly designed for LinkedIn, Instagram, and TikTok algorithms.",
    icon: Share2,
    href: "/services#social",
    image: "/img/soc-med.jpg",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-1 md:row-span-2 p-6 lg:p-8 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
  },
  {
    title: "Founder Story Videos",
    description: "Authentic documentary-style profiles capturing your true vision.",
    icon: Users,
    href: "/services#founder",
    image: "/img/founder-story.JPG",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
  },
  {
    title: "Event Coverage",
    description: "Dynamic highlight reels extending your physical events.",
    icon: CalendarDays,
    href: "/services#event",
    image: "/img/event-coverage.jpg",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
  },
  {
    title: "SEO Article & Blog Creation",
    description: "Boost organic visibility with targeted, high-value written content tailored to search intent.",
    icon: PenTool,
    href: "/services#seo",
    image: "https://picsum.photos/seed/seoarticle/800/600",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-2 md:row-span-1 p-6 lg:p-8 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
  },
  {
    title: "Website Development",
    description: "Modern, responsive platforms to serve as your premium digital storefront.",
    icon: Code2,
    href: "/services#web",
    image: "https://picsum.photos/seed/webdesign/800/600",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
  },
  {
    title: "Podcast Production",
    description: "Full-service visual podcasting from studio setup to post editing.",
    icon: Mic,
    href: "/services#podcast",
    image: "https://picsum.photos/seed/podcastingstudio/800/600",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
  },
  {
    title: "Digitization of Brand Guidelines",
    description: "Transform static manuals into dynamic, AI-powered online depositories ensuring brand consistency.",
    icon: BookOpen,
    href: "/services#brand",
    image: "https://picsum.photos/seed/branddigital/800/800",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-2 md:row-span-2 p-6 lg:p-10 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
  },
  {
    title: "Live Streaming",
    description: "Multi-cam setups connecting your hybrid town halls to a global audience.",
    icon: Radio,
    href: "/services#live",
    image: "https://picsum.photos/seed/livestreamtech/800/600",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
  },
  {
    title: "Communication Consultations",
    description: "Expert PR and strategic consulting to shape your narrative and public profile.",
    icon: MessageSquare,
    href: "/services#consulting",
    image: "https://picsum.photos/seed/consultingbiz/800/600",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
  },
  {
    title: "Fractional CCO Services",
    description: "Gain executive-level creative leadership on retainer, driving your complete brand strategy without the full-time overhead.",
    icon: Briefcase,
    href: "/services#cco",
    image: "https://picsum.photos/seed/ccoleader/1000/600",
    className: "relative overflow-hidden rounded-[2rem] h-full md:col-span-2 md:row-span-1 p-6 lg:p-8 flex flex-col justify-between border border-transparent shadow-sm group hover:shadow-2xl transition-all duration-500 cursor-pointer",
>>>>>>> a607bf3a4aff2eb6abe5c634f4ef1ef8e1a283b2
  },
]

export function ServicesSnapshot() {
  return (
<<<<<<< HEAD
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
=======
    <div className="w-full py-24 lg:py-32 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col gap-12 lg:gap-16">
          
          <div className="flex gap-4 flex-col items-center sm:items-start max-w-2xl">
            <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-4 py-1.5 uppercase tracking-widest text-[10px] font-black">
              Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter font-black text-foreground uppercase">
              What We Do
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/70 font-medium mt-2">
              We partner with forward-thinking organisations to fast-track ideas and capture expertise through a comprehensive suite of digital, visual, and strategic storytelling solutions. 
            </p>
          </div>
          
          {/* Benton Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row-dense gap-4 md:gap-6 auto-rows-[280px]">
            {services.map((service, index) => (
              <Link href={service.href} key={index} className={service.className}>
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0 bg-primary">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/80 transition-all duration-500 group-hover:bg-primary/50 backdrop-blur-[2px] group-hover:backdrop-blur-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex flex-col mt-auto">
                    <h3 className="text-xl md:text-3xl font-black tracking-tight text-white mb-2 leading-tight drop-shadow-md">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base line-clamp-2 font-medium drop-shadow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-xs font-bold text-white uppercase tracking-widest mt-6 pt-4 border-t border-white/20 group-hover:border-white/50 transition-colors opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-500 hidden md:flex">
                      Explore service <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
>>>>>>> a607bf3a4aff2eb6abe5c634f4ef1ef8e1a283b2
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
