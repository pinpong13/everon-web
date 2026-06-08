import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-4">
            About
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            A small team. <span className="gold-text">Big nights.</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-foreground/75 leading-relaxed">
            <p className="md:col-span-2">
              Everon Solutions LLC is a U.S.-based experience company built around
              one idea — the world&apos;s best concerts and live events deserve to be
              lived without compromise. We design end-to-end VIP packages for clients
              who care about the moment more than the logistics, and we make sure
              every part of the night is handled by people we&apos;ve worked with for years.
            </p>
            <div className="border-l border-border pl-6">
              <p className="text-xs tracking-[0.3em] uppercase text-foreground/45 mb-3">
                Registered Entity
              </p>
              <p className="text-foreground/85">Everon Solutions LLC</p>
              <p className="text-foreground/60 mt-1">Rodrigo Perez · Sole Member</p>
              <p className="text-foreground/60 mt-3">
                4111 Hollowtrail Dr
                <br />
                Tampa, FL 33624
              </p>
              <a
                href="mailto:solutionseveronllc@gmail.com"
                className="block mt-4 text-accent-bright hover:underline break-all"
              >
                solutionseveronllc@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
