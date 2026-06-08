"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Are the tickets 100% authentic?",
    a: "Yes. Every ticket is sourced through verified channels and validated before delivery. If an event is canceled or relocated, you receive a full refund per our refund policy.",
  },
  {
    q: "How are tickets delivered?",
    a: "Mobile tickets are sent to your email or wallet 24–72 hours before the event. For some venues, tickets are handed to you in person by our on-site team to avoid transfer issues.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Credit cards (Visa, Mastercard, Amex), bank transfer (USD, EUR) and crypto on request for Black Card packages. A 30% deposit confirms the booking; the balance is due 14 days before the event.",
  },
  {
    q: "Can you secure sold-out events?",
    a: "In most cases, yes. We work with primary partners, secondary marketplaces and venue contacts across the US and Europe. Tell us the event — we'll come back with availability within 24 hours.",
  },
  {
    q: "What's your refund policy?",
    a: "If the event is officially canceled and not rescheduled, you receive a 100% refund of ticket and hospitality costs. Hotel and transfer refunds follow each supplier's policy — most allow free cancellation up to 7 days before. Travel insurance is recommended.",
  },
  {
    q: "Do you handle international groups?",
    a: "Absolutely. We coordinate visa-friendly documentation, multi-city logistics and on-the-ground translation. Most of our clients fly in from outside the event country.",
  },
  {
    q: "Can the package be customized?",
    a: "Every package is custom by default. Tiers are a starting point — add suites, helicopter transfer, private chef, extra nights or extend to a second event in the same trip.",
  },
  {
    q: "Which countries do you currently operate in?",
    a: "We operate exclusively in the United States and Europe. Events in other regions can be quoted on a case-by-case basis but are not part of our standard offering.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-4">
            FAQ
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Common questions.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span
                    className={`font-display text-lg md:text-xl transition-colors ${
                      isOpen ? "text-accent-bright" : "text-foreground group-hover:text-accent-bright"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span className="flex-shrink-0 text-accent">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-foreground/70 leading-relaxed text-sm md:text-base pr-12">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
