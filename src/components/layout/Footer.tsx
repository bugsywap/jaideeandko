import Link from 'next/link';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

// Custom TikTok Icon as it's missing from smaller Lucide sets often
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-32" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <span className="sr-only">Jaidee & Ko</span>
              <img src="/img/jaideeko-png.webp" alt="Jaidee & Ko" className="h-10 w-auto" />
            </Link>
            <div className="flex items-center gap-5">
              <a 
                href="https://www.linkedin.com/company/jaidee-ko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/jaideeandko/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com/@jaideeandko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-primary transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@jaideeandko?sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm leading-6 text-foreground/70 max-w-xs">
              Corporate video production and branded social content for businesses across Singapore and Southeast Asia.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0 xl:gap-12">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Services</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><Link href="/services#corporate" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Corporate Videos</Link></li>
                <li><Link href="/services#social" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Social Media Content</Link></li>
                <li><Link href="/services#founder" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Founder Stories</Link></li>
                <li><Link href="/services#event" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Event Coverage</Link></li>
                <li><Link href="/services#seo" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">SEO & Blog Content</Link></li>
                <li><Link href="/services#web" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Website Development</Link></li>
                <li><Link href="/services#podcast" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Podcast Production</Link></li>
                <li><Link href="/services#brand" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Brand Guidelines</Link></li>
                <li><Link href="/services#live" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Live Streaming</Link></li>
                <li><Link href="/services#consulting" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">PR Consultations</Link></li>
                <li><Link href="/services#cco" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Fractional CCO</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Work Collection</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><Link href="/our-work?filter=ngo" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Social Impact & NGOs</Link></li>
                <li><Link href="/our-work?filter=b2b" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">B2B SaaS & Tech</Link></li>
                <li><Link href="/our-work?filter=gov" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Government Agencies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><Link href="/blog" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Blog</Link></li>
                <li><Link href="/resources" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Resources <span className="text-[9px] uppercase font-bold text-primary ml-1 px-1.5 py-0.5 rounded-full bg-primary/10">Soon</span></Link></li>
                <li><Link href="/faq" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">FAQ</Link></li>
                <li><Link href="/community" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Community <span className="text-[9px] uppercase font-bold text-primary ml-1 px-1.5 py-0.5 rounded-full bg-primary/10">Soon</span></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Contact & Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><Link href="/contact" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="text-sm leading-6 text-foreground/70 hover:text-primary active:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-foreground/70">&copy; {new Date().getFullYear()} Jaidee & Ko. All rights reserved. <span className="block mt-1">Based in Singapore.</span></p>
        </div>
      </div>
    </footer>
  );
}
