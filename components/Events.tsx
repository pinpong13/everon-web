import Reveal from "./Reveal";

const events = [
  {
    artist: "FIFA World Cup 2026",
    tour: "USA Host Cities",
    city: "New York · Los Angeles · Miami",
    date: "Jun 11 – Jul 19, 2026",
    region: "US",
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80",
  },
  {
    artist: "NFL Madrid",
    tour: "Regular Season Game",
    city: "Madrid · ES",
    date: "Nov 15, 2026",
    region: "EU",
    img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    artist: "NFL Berlin",
    tour: "Regular Season Game",
    city: "Berlin · DE",
    date: "Nov 08, 2026",
    region: "EU",
    img: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1200&q=80",
  },
  {
    artist: "Bruno Mars",
    tour: "World Tour",
    city: "Las Vegas · NV",
    date: "Aug 14, 2026",
    region: "US",
    img: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
  },
  {
    artist: "Bad Bunny",
    tour: "World Tour",
    city: "Miami · FL",
    date: "Sep 12, 2026",
    region: "US",
    img: "https://images.unsplash.com/photo-1571266028243-d220c6a0a16d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    artist: "Taylor Swift",
    tour: "Eras Continues",
    city: "London · UK",
    date: "Aug 22, 2026",
    region: "EU",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    artist: "Coldplay",
    tour: "Music of the Spheres",
    city: "Madrid · ES",
    date: "Jun 22, 2026",
    region: "EU",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    artist: "Formula 1",
    tour: "Monaco Grand Prix",
    city: "Monte-Carlo · MC",
    date: "May 24, 2026",
    region: "EU",
    img: "https://images.unsplash.com/photo-1517994112540-009c47ea476b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    artist: "Super Bowl LXI",
    tour: "NFL Championship",
    city: "Los Angeles · CA",
    date: "Feb 14, 2027",
    region: "US",
    img: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-4">
                Featured Events · United States & Europe
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
                Where we&apos;re going next.
              </h2>
            </div>
            <p className="text-foreground/55 max-w-md text-sm md:text-base">
              We currently operate exclusively in the <span className="text-accent-bright">United States and Europe</span>.
              Concerts, championships and major sporting events — fully handled on the ground.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <Reveal key={e.artist + e.date} delay={i * 0.05}>
              <a
                href="#contact"
                className="group block relative overflow-hidden border border-border hover:border-accent/60 transition-colors"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    style={{ backgroundImage: `url('${e.img}')` }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <span className="absolute top-4 right-4 px-2 py-1 text-[10px] tracking-[0.25em] uppercase bg-black/70 backdrop-blur border border-accent/40 text-accent-bright rounded-full">
                  {e.region}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-accent-bright text-[10px] tracking-[0.3em] uppercase">
                    {e.date}
                  </p>
                  <h3 className="font-display text-2xl mt-2">{e.artist}</h3>
                  <p className="text-foreground/70 text-sm mt-1">{e.tour}</p>
                  <p className="text-foreground/50 text-xs mt-3 tracking-wider uppercase">
                    {e.city}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
