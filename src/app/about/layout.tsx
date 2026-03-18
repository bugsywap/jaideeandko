import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Jaidee & Ko | Storytelling with Heart in Singapore",
  description: "Meet the team behind Jaidee & Ko. We bridge the gap between B2B brands and their audience through sincere, high-impact visual storytelling.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
