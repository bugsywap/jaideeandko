import { cn } from "@/lib/utils"

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
      <div className="flex flex-col items-start bg-background/50 rounded-lg">
        <h3 className="text-base font-bold text-foreground leading-tight">
          {author.name}
        </h3>
        <p className="text-sm font-medium text-primary">
          {author.handle}
        </p>
      </div>
      <p className="mt-6 text-base leading-relaxed text-foreground/80 font-medium italic">
        "{text}"
      </p>
    </Card>
  )
}
