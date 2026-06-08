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
    role: "Taylor Swift · London",
    avatar: "https://i.pravatar.cc/200?img=32",
    body: "Flew in from Madrid for a surprise birthday. Rodrigo personally walked us through the whole weekend. My daughter is still talking about the meet & greet.",
  },
  {
    name: "Andrés P.",
    role: "Coldplay · Madrid",
    avatar: "https://i.pravatar.cc/200?img=68",
    body: "Floor pit, private car, late dinner reservation after the show. Worth every dollar. We were treated like the band, not the audience.",
  },
  {
    name: "Olivia T.",
    role: "Bruno Mars · Las Vegas",
    avatar: "https://i.pravatar.cc/200?img=25",
    body: "We booked Vegas for my husband's 40th. Suite at the Bellagio, helicopter transfer, and front-row seats. They thought of details we hadn't even mentioned.",
  },
  {
    name: "Marc L.",
    role: "NFL · Madrid",
    avatar: "https://i.pravatar.cc/200?img=53",
    body: "Brought four clients to the Madrid game. The hospitality box and pre-game tunnel access closed the deal. I'll be using Everon for every European NFL game.",
  },
  {
    name: "Isabella V.",
    role: "Coldplay · Madrid",
    avatar: "https://i.pravatar.cc/200?img=44",
    body: "I was sceptical about paying this much for a concert. Then I saw the seats, the lounge, the car waiting for us. Cheap, in hindsight, for what it was.",
  },
  {
    name: "Thomas H.",
    role: "F1 · Monaco",
    avatar: "https://i.pravatar.cc/200?img=15",
    body: "Yacht in the harbour, paddock access, and a chef on call. Booked five days out and they made it happen. Genuinely don't know how.",
  },
  {
    name: "Laura B.",
    role: "Taylor Swift · London",
    avatar: "https://i.pravatar.cc/200?img=49",
    body: "Eras was magic. The team in London met us at Heathrow, handled everything from hotel to backstage tour. I cried at the meet & greet. They handled that too.",
  },
  {
    name: "James W.",
    role: "Super Bowl · Los Angeles",
    avatar: "https://i.pravatar.cc/200?img=8",
    body: "Super Bowl tickets two weeks out, club-level seats, hotel walking distance from SoFi. The on-site host knew every shortcut. Already on the list for next year.",
  },
  {
    name: "Elena G.",
    role: "Bad Bunny · Miami",
    avatar: "https://i.pravatar.cc/200?img=20",
    body: "Group of eight friends, four hotels, three flights, one perfect night. Everon coordinated it all. I never had to open a single booking confirmation.",
  },
  {
    name: "Niko S.",
    role: "F1 · Monaco",
    avatar: "https://i.pravatar.cc/200?img=61",
    body: "I run a hedge fund and don't have time for logistics. Everon was a single point of contact for the whole weekend. That alone was worth the price.",
  },
];

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <figure className="p-8 md:p-10 border border-border bg-background">
      <Quote className="w-7 h-7 text-accent/70 mb-5" strokeWidth={1.25} />
      <blockquote className="text-foreground/85 leading-relaxed text-base">
        {r.body}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <img
          src={r.avatar}
          alt={r.name}
          width={44}
          height={44}
          className="w-11 h-11 rounded-full object-cover border border-accent/40"
        />
        <div>
          <div className="font-medium">{r.name}</div>
          <div className="text-foreground/50 text-xs tracking-wider uppercase mt-0.5">
            {r.role}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function Column({
  items,
  direction,
  speed,
}: {
  items: typeof reviews;
  direction: "up" | "down";
  speed: number;
}) {
  const loop = [...items, ...items];
  const animationName = direction === "up" ? "marqueeUp" : "marqueeDown";
  return (
    <div className="group relative h-full overflow-hidden">
      <div
        className="flex flex-col gap-6 will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {loop.map((r, i) => (
          <Card key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const colA = reviews.filter((_, i) => i % 2 === 0);
  const colB = reviews.filter((_, i) => i % 2 === 1);

  return (
    <section className="py-24 md:py-32 border-t border-border overflow-hidden">
      <style>{`
        @keyframes marqueeUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marqueeDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-4">
                Clients
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
                What people say after the encore.
              </h2>
            </div>
            <p className="text-foreground/55 max-w-md text-sm md:text-base">
              Real notes from real clients across the United States and Europe. Hover any
              column to pause.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 relative h-[640px] md:h-[720px] grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

          <Column items={colA} direction="up" speed={55} />
          <Column items={colB} direction="down" speed={65} />
        </div>
      </div>
    </section>
  );
}
