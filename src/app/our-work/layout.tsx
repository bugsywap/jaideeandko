import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Work | Premium Video Production Portfolio",
  description: "Explore our diverse portfolio of corporate visions and social narratives. We transform complex stories into high-end visual experiences.",
}

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
