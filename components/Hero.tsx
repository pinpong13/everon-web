"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.18),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-6"
        >
          All-Inclusive VIP Experiences · United States & Europe
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl"
        >
          Live the concert.
          <br />
          <span className="gold-text">Skip the line.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed"
        >
          Premium packages built end-to-end — tickets, hospitality, hotels,
          private transfer and a concierge that doesn&apos;t sleep. You show up.
          We handle the rest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-black font-medium tracking-wide hover:bg-accent-bright transition-colors rounded-full"
          >
            Reserve Your Experience
          </a>
          <a
            href="#tiers"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground/30 text-foreground hover:border-accent hover:text-accent-bright transition-colors rounded-full"
          >
            Browse Packages
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex flex-wrap gap-x-10 gap-y-3 text-xs tracking-[0.25em] uppercase text-foreground/50"
        >
          <span>FIFA World Cup 2026</span>
          <span className="text-accent/60">·</span>
          <span>NFL Madrid</span>
          <span className="text-accent/60">·</span>
          <span>NFL Berlin</span>
          <span className="text-accent/60">·</span>
          <span>Bruno Mars</span>
          <span className="text-accent/60">·</span>
          <span>Taylor Swift</span>
          <span className="text-accent/60">·</span>
          <span>Coldplay</span>
        </motion.div>
      </div>
    </section>
  );
}
