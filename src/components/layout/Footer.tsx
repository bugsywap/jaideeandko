import Link from 'next/link';
import { Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background relative overflow-hidden border-t border-border/50 mt-32" aria-labelledby="footer-heading">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8 lg:pt-32 relative z-10">
        <div className="xl:grid xl:grid-cols-4 xl:gap-12 items-start">
          
          {/* Logo & Description */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="inline-block group">
              <span className="sr-only">Jaidee & Ko</span>
              <img src="/img/jaideeko-png.webp" alt="Jaidee & Ko" className="h-10 w-auto group-hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-sm font-medium leading-[1.8] text-foreground/60 max-w-sm">
              We engineer premium corporate videos and branded social content for visionary businesses across Singapore and Southeast Asia.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.linkedin.com/company/jaidee-ko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface border border-border/50 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:hello@jaideeandko.com" 
                className="w-10 h-10 rounded-full bg-surface border border-border/50 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <span className="sr-only">Email</span>
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="tel:+6589766151" 
                className="w-10 h-10 rounded-full bg-surface border border-border/50 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <span className="sr-only">Phone</span>
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-5 gap-8 xl:col-span-3 xl:mt-0 lg:gap-12">
            
            {/* Capabilities (Services) - Spans 2 cols to balance the 11 items */}
            <div className="col-span-2">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 mb-8">Capabilities</h3>
              <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <li><Link href="/services#corporate" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Corporate Videos</Link></li>
                <li><Link href="/services#social" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Social Media Content</Link></li>
                <li><Link href="/services#founder" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Founder Stories</Link></li>
                <li><Link href="/services#event" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Event Coverage</Link></li>
                <li><Link href="/services#seo" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">SEO & Blog Content</Link></li>
                <li><Link href="/services#web" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Website Development</Link></li>
                <li><Link href="/services#podcast" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Podcast Production</Link></li>
                <li><Link href="/services#brand" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Brand Guidelines</Link></li>
                <li><Link href="/services#live" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Live Streaming</Link></li>
                <li><Link href="/services#consulting" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">PR Consultations</Link></li>
                <li><Link href="/services#cco" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Fractional CCO</Link></li>
              </ul>
            </div>
            
            {/* Work Collection */}
            <div className="col-span-1">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 mb-8">Work</h3>
              <ul role="list" className="space-y-4">
                <li><Link href="/our-work?filter=ngo" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Social Impact</Link></li>
                <li><Link href="/our-work?filter=b2b" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">B2B SaaS</Link></li>
                <li><Link href="/our-work?filter=gov" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Government</Link></li>
              </ul>
            </div>
            
            {/* Company */}
            <div className="col-span-1">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 mb-8">Company</h3>
              <ul role="list" className="space-y-4">
                <li><Link href="/blog" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/resources" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors flex items-center gap-2">Resources</Link></li>
                <li><Link href="/our-process" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Our Process</Link></li>
                <li><Link href="/faq" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Legal & Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 mb-8">Legal</h3>
              <ul role="list" className="space-y-4">
                <li><Link href="/privacy-policy" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/contact" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-20 border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-medium tracking-wider uppercase text-foreground/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} Jaidee & Ko. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 shadow-sm">
               HQ: Singapore
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
