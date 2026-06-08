import { Ticket, GlassWater, UserCheck, Car, BedDouble, Headphones } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: Ticket,
    title: "VIP Tickets",
    body: "Front-section seating or floor pit access. Guaranteed authentic, e-tickets delivered before doors open.",
  },
  {
    icon: GlassWater,
    title: "Hospitality Lounge",
    body: "Private lounge access — open bar, gourmet catering and a place to land before, during and after the show.",
  },
  {
    icon: UserCheck,
    title: "Meet & Greet",
    body: "Backstage moments, photo ops and signed merch on select packages. Closer than you thought possible.",
  },
  {
    icon: Car,
    title: "Private Transfer",
    body: "Black-car service from hotel to venue and back. No traffic, no parking, no waiting for a ride.",
  },
  {
    icon: BedDouble,
    title: "4–5★ Hotel",
    body: "Curated luxury stays near the venue. Late check-out included so you can sleep in after the encore.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    body: "One number, one team, every hour. Restaurant bookings, last-minute changes, anything you need on the ground.",
  },
];

export default function WhatsIncluded() {
  return (
    <section id="included" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-4">
            What&apos;s Included
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            Everything taken care of.
            <br />
            <span className="text-foreground/50">Down to the last detail.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 0.05}>
                <div className="bg-background p-8 md:p-10 h-full hover:bg-surface transition-colors">
                  <Icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.25} />
                  <h3 className="font-display text-2xl mb-3">{it.title}</h3>
                  <p className="text-foreground/65 leading-relaxed text-sm">{it.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
