import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            href="/"
            className="text-xs tracking-[0.3em] uppercase text-foreground/45 hover:text-accent-bright"
          >
            ← Back to Everon
          </Link>
          <h1 className="font-display text-4xl md:text-5xl mt-6">{title}</h1>
          <p className="mt-3 text-foreground/45 text-sm tracking-wider uppercase">
            Last updated · {updated}
          </p>
          <div className="prose prose-invert mt-10 text-foreground/75 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-foreground [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:pl-6 [&_ul]:list-disc [&_li]:mb-1 [&_a]:text-accent-bright [&_a:hover]:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
