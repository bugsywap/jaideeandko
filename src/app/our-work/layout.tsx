import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Work | Premium Video Production Portfolio | Jaidee & Ko",
  description: "Explore our collection of cinematic corporate films and social-first content. Witness how we transform complex narratives into high-impact visual storytelling for global brands and NGOs.",
}

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
