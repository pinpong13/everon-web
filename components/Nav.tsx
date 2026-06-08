"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#included", label: "Experience" },
  { href: "#tiers", label: "Packages" },
  { href: "#events", label: "Events" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide">
          <span className="gold-text">EVERON</span>
          <span className="text-foreground/70 ml-1 text-sm tracking-[0.3em]">SOLUTIONS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent-bright transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm border border-accent/60 text-accent-bright hover:bg-accent hover:text-black transition-colors rounded-full"
        >
          Reserve
        </a>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-accent-bright"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-accent/60 text-accent-bright rounded-full"
            >
              Reserve Your Experience
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
