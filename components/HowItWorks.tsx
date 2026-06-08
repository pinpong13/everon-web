import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Inquire",
    body: "Tell us the event, group size and what matters most to you. One short form, one short call.",
  },
  {
    n: "02",
    title: "Custom Quote",
    body: "Within 24 hours you receive a tailored package — seats, hotel, transfer, extras — with a single fixed price.",
  },
  {
    n: "03",
    title: "Book",
    body: "Confirm with a deposit. We secure every piece and send your itinerary, tickets and on-site contacts.",
  },
  {
    n: "04",
    title: "Enjoy",
    body: "You show up. We meet you on the ground. Concierge is on call 24/7 from the moment you land.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            From inquiry to encore — <span className="gold-text">four steps</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="bg-background p-8 md:p-10 h-full hover:bg-surface transition-colors">
                <span className="font-display text-accent text-5xl">{s.n}</span>
                <h3 className="font-display text-2xl mt-6 mb-3">{s.title}</h3>
                <p className="text-foreground/65 leading-relaxed text-sm">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
