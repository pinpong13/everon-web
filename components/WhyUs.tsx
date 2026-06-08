import { ShieldCheck, Sparkles, Eye, Users } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  {
    icon: ShieldCheck,
    title: "Guaranteed Access",
    body: "Every ticket is verified before delivery. If the event happens, you're in. Full refund policy otherwise.",
  },
  {
    icon: Sparkles,
    title: "Personalized Service",
    body: "Every package is built around your group. No two clients get the same itinerary — and that's the point.",
  },
  {
    icon: Eye,
    title: "No Surprises",
    body: "One transparent price. No hidden fees, no upsells on the day, no fine print. What you book is what you get.",
  },
  {
    icon: Users,
    title: "On-Site Team",
    body: "A real person waiting for you on the ground in every city. Available before, during and after the show.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-4">
            Why Everon
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            Built for clients who don&apos;t do <span className="gold-text">maybe</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex gap-6 p-6 md:p-8 border border-border bg-background h-full">
                  <Icon className="w-10 h-10 text-accent flex-shrink-0" strokeWidth={1.25} />
                  <div>
                    <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                    <p className="text-foreground/65 leading-relaxed text-sm">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
