import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Everon Solutions LLC collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 8, 2026">
      <p>
        This Privacy Policy explains how <strong>Everon Solutions LLC</strong> (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, &ldquo;Everon&rdquo;) collects, uses and protects the personal data
        you share with us when you visit our website, request a quote or book a VIP experience.
      </p>
      <p>
        Our registered office is 4111 Hollowtrail Dr, Tampa, FL 33624, United States.
        For any privacy-related question you can reach us at{" "}
        <a href="mailto:solutionseveronllc@gmail.com">solutionseveronllc@gmail.com</a>.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li><strong>Contact details</strong> you submit via the quote form: name, email, phone, event of interest, group size, budget and message.</li>
        <li><strong>Booking details</strong> if you become a client: full legal name, passport or ID (where required by venues), billing address, payment information processed by our payment partners, dietary or accessibility requirements you disclose voluntarily.</li>
        <li><strong>Technical data</strong> automatically collected when you browse: IP address, browser type, referring URL, pages visited. We use this for security and basic analytics.</li>
      </ul>

      <h2>2. How we use it</h2>
      <ul>
        <li>To respond to your quote request and design your package.</li>
        <li>To deliver the booked experience (tickets, hotels, transfer, concierge).</li>
        <li>To comply with legal obligations (tax, accounting, anti-fraud).</li>
        <li>To improve our service and, with your consent, send occasional updates about upcoming events.</li>
      </ul>

      <h2>3. Who we share it with</h2>
      <p>
        We share data only with the suppliers strictly required to deliver your booking
        (venues, hotels, transport providers, payment processors). We never sell your data
        to third parties. All suppliers are bound by confidentiality.
      </p>

      <h2>4. International transfers</h2>
      <p>
        We operate in the United States and Europe. If you are based in the EU/UK, your data
        may be transferred to the United States. Such transfers rely on the appropriate
        safeguards under GDPR (Standard Contractual Clauses).
      </p>

      <h2>5. Retention</h2>
      <p>
        Quote requests are kept for up to 24 months. Booking records are retained for the
        period required by U.S. tax and accounting law (7 years).
      </p>

      <h2>6. Your rights</h2>
      <p>
        You have the right to access, rectify, delete or port your personal data, to object to
        processing and to lodge a complaint with your supervisory authority. Send any request
        to <a href="mailto:solutionseveronllc@gmail.com">solutionseveronllc@gmail.com</a> and we
        will respond within 30 days.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Our website uses only the strictly necessary cookies required for it to function. We
        do not use third-party advertising or tracking cookies. If we later introduce analytics
        tools, we will request your consent first.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update this Policy from time to time. The &ldquo;Last updated&rdquo; date at the
        top reflects the latest version.
      </p>
    </LegalLayout>
  );
}
