"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.append("_subject", `New VIP request — ${fd.get("name") || "unknown"}`);
    fd.append("_template", "table");
    fd.append("_captcha", "false");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/solutionseveronllc@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: fd,
        }
      );
      if (!res.ok) throw new Error("Submission failed");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border bg-surface">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-accent-bright text-xs tracking-[0.4em] uppercase mb-4">
            Reserve
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Tell us where you want to be.
          </h2>
          <p className="mt-6 text-foreground/65 max-w-2xl">
            Send us your event and group details. We&apos;ll come back within 24 hours
            with a tailored quote and availability.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Event of Interest" name="event" placeholder="Artist, tour or city" />
            <Field label="Number of People" name="people" type="number" min="1" />
            <Field label="Budget (USD)" name="budget" placeholder="e.g. $5,000 – $10,000" />

            <div className="md:col-span-2">
              <label className="block text-xs tracking-[0.25em] uppercase text-foreground/55 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full bg-background border border-border focus:border-accent outline-none px-4 py-3 text-foreground placeholder:text-foreground/30 transition-colors"
                placeholder="Tell us what you have in mind."
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-6 mt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-black font-medium tracking-wide hover:bg-accent-bright transition-colors disabled:opacity-50 rounded-full"
              >
                {status === "submitting" ? "Sending…" : "Send Request"}
              </button>
              {status === "ok" && (
                <p className="text-accent-bright text-sm">
                  Thanks. We&apos;ll be in touch within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  {errorMsg || "Something went wrong. Please try again."}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: string;
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.25em] uppercase text-foreground/55 mb-2">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        className="w-full bg-background border border-border focus:border-accent outline-none px-4 py-3 text-foreground placeholder:text-foreground/30 transition-colors"
      />
    </div>
  );
}
