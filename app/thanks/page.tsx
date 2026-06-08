import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Request received",
  description: "Thank you — your VIP experience request has been received.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 flex items-center justify-center min-h-screen py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-6">
            Request Received
          </p>
          <h1 className="font-display text-5xl md:text-6xl">
            Thank you.
            <br />
            <span className="gold-text">We&apos;ll be in touch.</span>
          </h1>
          <p className="mt-8 text-foreground/70 text-lg leading-relaxed">
            Your request has been received. A member of the Everon team will come back
            to you within <span className="text-accent-bright">24 hours</span> with a
            tailored quote and availability for your event.
          </p>
          <p className="mt-4 text-foreground/55 text-sm">
            In the meantime, feel free to email us directly at{" "}
            <a
              href="mailto:solutionseveronllc@gmail.com"
              className="text-accent-bright hover:underline"
            >
              solutionseveronllc@gmail.com
            </a>
            .
          </p>
          <Link
            href="/"
            className="inline-flex mt-12 items-center justify-center px-8 py-4 border border-accent/60 text-accent-bright hover:bg-accent hover:text-black transition-colors rounded-full"
          >
            Back to Everon
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
