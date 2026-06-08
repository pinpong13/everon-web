import { Mail } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 3a5.5 5.5 0 0 0 4 4v3a8.5 8.5 0 0 1-4-1.1V15a6 6 0 1 1-6-6 6 6 0 0 1 1 .1V12a3 3 0 1 0 2 2.8V3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display text-2xl tracking-wide">
              <span className="gold-text">EVERON</span>
              <span className="text-foreground/70 ml-1 text-sm tracking-[0.3em]">
                SOLUTIONS
              </span>
            </div>
            <p className="mt-4 text-foreground/55 text-sm max-w-md leading-relaxed">
              All-inclusive VIP concert experiences. Tickets, hospitality, hotels,
              transfer and concierge — handled.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 inline-flex items-center justify-center border border-border hover:border-accent hover:text-accent-bright transition-colors rounded-full"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 inline-flex items-center justify-center border border-border hover:border-accent hover:text-accent-bright transition-colors rounded-full"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:solutionseveronllc@gmail.com"
                aria-label="Email"
                className="w-10 h-10 inline-flex items-center justify-center border border-border hover:border-accent hover:text-accent-bright transition-colors rounded-full"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-foreground/45 mb-4">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#included" className="hover:text-accent-bright">Experience</a></li>
              <li><a href="#tiers" className="hover:text-accent-bright">Packages</a></li>
              <li><a href="#events" className="hover:text-accent-bright">Events</a></li>
              <li><a href="#why" className="hover:text-accent-bright">Why Us</a></li>
              <li><a href="#contact" className="hover:text-accent-bright">Reserve</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-foreground/45 mb-4">
              Contact
            </p>
            <a
              href="mailto:solutionseveronllc@gmail.com"
              className="text-sm text-foreground/70 hover:text-accent-bright break-all"
            >
              solutionseveronllc@gmail.com
            </a>
            <p className="mt-4 text-xs text-foreground/45 leading-relaxed">
              4111 Hollowtrail Dr<br />
              Tampa, FL 33624 · USA
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-foreground/45">
          <p>
            © 2026 Everon Solutions LLC. All rights reserved. · Rodrigo Perez, Sole Member ·
            4111 Hollowtrail Dr, Tampa FL 33624
          </p>
          <p className="tracking-wider uppercase">Retail &amp; Wholesale</p>
        </div>
      </div>
    </footer>
  );
}
