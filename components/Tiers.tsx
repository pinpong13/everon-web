import { Check } from "lucide-react";
import Reveal from "./Reveal";

const tiers = [
  {
    name: "Gold",
    tag: "Entry to VIP",
    price: "1,490",
    benefits: [
      "Premium-section ticket",
      "Hospitality lounge (3h pre-show)",
      "Welcome drink & light catering",
      "Group transfer to venue",
      "Digital concierge support",
    ],
    accent: false,
  },
  {
    name: "Platinum",
    tag: "Most Popular",
    price: "2,990",
    benefits: [
      "Front-section / pit ticket",
      "Hospitality lounge (full event)",
      "Open bar & gourmet menu",
      "Private transfer (round trip)",
      "4★ hotel — 2 nights",
      "Personal concierge 24/7",
    ],
    accent: true,
  },
  {
    name: "Black Card",
    tag: "Top of the world",
    price: "6,490",
    benefits: [
      "Floor / box ticket — best in house",
      "Backstage meet & greet",
      "Signed merch package",
      "Black-car private transfer",
      "5★ hotel — 3 nights, late check-out",
      "Restaurant & nightlife reservations",
      "Dedicated on-site host",
    ],
    accent: false,
  },
];

export default function Tiers() {
  return (
    <section id="tiers" className="py-24 md:py-32 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-4">
            Packages
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            Three ways to <span className="gold-text">live it</span>.
          </h2>
          <p className="mt-6 text-foreground/65 max-w-2xl">
            Each package is fully customizable. Prices are starting from, per person,
            and vary by event, city and seating availability.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`relative h-full p-8 md:p-10 border ${
                  t.accent
                    ? "border-accent bg-gradient-to-b from-surface-2 to-background"
                    : "border-border bg-background"
                }`}
              >
                {t.accent && (
                  <span className="absolute -top-3 left-8 px-3 py-1 text-[10px] tracking-[0.3em] uppercase bg-accent text-black rounded-full">
                    {t.tag}
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-3xl">{t.name}</h3>
                  {!t.accent && (
                    <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">
                      {t.tag}
                    </span>
                  )}
                </div>
                <div className="mt-8">
                  <span className="text-xs text-foreground/50 tracking-wider uppercase">
                    Starting from
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-foreground/60 text-2xl">$</span>
                    <span className="font-display text-5xl">{t.price}</span>
                    <span className="text-foreground/50 text-sm">/ person</span>
                  </div>
                </div>
                <ul className="mt-8 space-y-3 text-sm">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-foreground/80">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-10 inline-flex w-full items-center justify-center px-6 py-3 text-sm tracking-wide transition-colors rounded-full ${
                    t.accent
                      ? "bg-accent text-black hover:bg-accent-bright"
                      : "border border-foreground/30 hover:border-accent hover:text-accent-bright"
                  }`}
                >
                  Request a Quote
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
