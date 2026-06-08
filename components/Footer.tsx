import Link from "next/link";

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
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-foreground/45 mb-4">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="/#included" className="hover:text-accent-bright">Experience</a></li>
              <li><a href="/#how" className="hover:text-accent-bright">How It Works</a></li>
              <li><a href="/#tiers" className="hover:text-accent-bright">Packages</a></li>
              <li><a href="/#events" className="hover:text-accent-bright">Events</a></li>
              <li><a href="/#faq" className="hover:text-accent-bright">FAQ</a></li>
              <li><a href="/#contact" className="hover:text-accent-bright">Reserve</a></li>
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
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-accent-bright">Privacy</Link>
            <Link href="/terms" className="hover:text-accent-bright">Terms</Link>
            <span className="tracking-wider uppercase">Retail &amp; Wholesale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
