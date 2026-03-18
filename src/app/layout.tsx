import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocials } from "@/components/ui/FloatingSocials";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jaidee & Ko | Corporate Video Production & Social Content in Singapore",
  description: "We create videos and social content that connect and amplify your voice. For B2B companies, NGOs, and founders in Singapore and Southeast Asia.",
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
        <FloatingSocials />
        <Footer />
      </body>
    </html>
  );
}
