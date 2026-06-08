import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const reviews = [
  {
    name: "Camila R.",
    role: "Bad Bunny · Miami",
    avatar: "https://i.pravatar.cc/200?img=47",
    body: "Best concert experience of my life, hands down. The hospitality lounge, the transfer, the seats — everything was on point. Already booked Coldplay with them.",
  },
  {
    name: "Daniel M.",
    role: "F1 · Monaco",
    avatar: "https://i.pravatar.cc/200?img=12",
    body: "I've used three different concierge services for Monaco. Everon is the only one I'll use again. Discreet, fast, and they actually pick up the phone at 2am.",
  },
  {
    name: "Sofia L.",
    role: "Taylor Swift · São Paulo",
    avatar: "https://i.pravatar.cc/200?img=32",
    body: "Flew in from Madrid for a surprise birthday. Rodrigo personally walked us through the whole weekend. My daughter is still talking about the meet & greet.",
  },
  {
    name: "Andrés P.",
    role: "Coldplay · Madrid",
    avatar: "https://i.pravatar.cc/200?img=68",
    body: "Floor pit, private car, late dinner reservation after the show. Worth every dollar. We were treated like the band, not the audience.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-4">
            Clients
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            What people say after the encore.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="h-full p-8 md:p-10 border border-border bg-surface">
                <Quote className="w-8 h-8 text-accent/70 mb-6" strokeWidth={1.25} />
                <blockquote className="text-foreground/85 leading-relaxed text-base md:text-lg">
                  {r.body}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border border-accent/40"
                  />
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-foreground/50 text-xs tracking-wider uppercase mt-0.5">
                      {r.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
