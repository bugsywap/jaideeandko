import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaideeandko.netlify.app"),
  title: "Jaidee & Ko | Premium Corporate Video & Social Content in Singapore",
  description: "Elevate your brand with a premier strategic communications and video development agency. We transform complex ideas into clear, high-impact narratives that drive visibility for B2B companies, NGOs, and founders.",
  openGraph: {
    images: [
      {
        url: "/img/logo-withbg.png",
        width: 1200,
        height: 630,
        alt: "Jaidee & Ko - Premium Corporate Video & Social Content",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
