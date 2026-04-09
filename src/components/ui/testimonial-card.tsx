import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-2xl border border-border",
        "bg-surface",
        "p-6 sm:p-8 text-start",
        "hover:border-primary/50",
        "w-[340px] sm:w-[420px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        {author.avatar && (
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full object-cover border border-border shadow-sm"
          />
        )}
        <div className="flex flex-col items-start">
          <h3 className="text-base font-bold text-foreground leading-tight">
            {author.name}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-primary line-clamp-1">
            {author.handle}
          </p>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>
      <p className="text-sm sm:text-base leading-relaxed text-foreground/80 font-medium italic">
        "{text}"
      </p>
    </Card>
  )
}
