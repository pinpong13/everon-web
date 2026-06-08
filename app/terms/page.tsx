import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of Everon Solutions LLC services and website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="June 8, 2026">
      <p>
        These Terms of Service govern your use of the website operated by{" "}
        <strong>Everon Solutions LLC</strong> (&ldquo;Everon&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
        and the purchase of any VIP concert or live-event experience offered by us. By
        using this website or booking a package, you agree to be bound by these Terms.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Everon Solutions LLC, a limited liability company organized under the laws of the
        State of Florida, USA. Sole Member: Rodrigo Perez. Registered office: 4111 Hollowtrail
        Dr, Tampa, FL 33624. Contact:{" "}
        <a href="mailto:solutionseveronllc@gmail.com">solutionseveronllc@gmail.com</a>.
      </p>

      <h2>2. Services</h2>
      <p>
        We design and operate all-inclusive VIP packages for concerts and live events held in
        the United States and Europe. Packages may include event tickets, hospitality, hotels,
        transfer and concierge services. The exact scope of each booking is set out in the
        individual quote and confirmation email, which together with these Terms form the
        contract between you and Everon.
      </p>

      <h2>3. Bookings &amp; payment</h2>
      <ul>
        <li>A 30% non-refundable deposit is required to confirm a booking.</li>
        <li>The remaining balance is due 14 calendar days before the event.</li>
        <li>For bookings made within 14 days of the event, full payment is due at confirmation.</li>
        <li>Accepted methods: credit card, bank transfer (USD/EUR), and on request, cryptocurrency.</li>
      </ul>

      <h2>4. Cancellations &amp; refunds</h2>
      <ul>
        <li><strong>By you:</strong> deposits are non-refundable. Cancellations made after the balance is paid are subject to the cancellation terms of each underlying supplier (venue, hotel, transport).</li>
        <li><strong>By the event organizer:</strong> if the event is officially canceled and not rescheduled, you receive a full refund of the ticket and hospitality portion within 30 days. Other supplier policies apply to hotel and transport.</li>
        <li><strong>Force majeure:</strong> we are not liable for cancellations caused by events outside our reasonable control (natural disasters, government action, pandemic restrictions, strikes).</li>
      </ul>
      <p>
        We strongly recommend that you take out travel and event-cancellation insurance.
      </p>

      <h2>5. Ticket delivery &amp; authenticity</h2>
      <p>
        All tickets supplied by Everon are sourced through verified channels and validated
        before delivery. We guarantee venue entry; should you be denied entry due to an issue
        attributable to Everon, you are entitled to a full refund of the ticket value.
      </p>

      <h2>6. Travel documents &amp; insurance</h2>
      <p>
        You are responsible for ensuring your passport, visa and health documentation comply
        with the destination country&apos;s requirements. Everon does not provide travel
        insurance.
      </p>

      <h2>7. Liability</h2>
      <p>
        To the maximum extent permitted by law, Everon&apos;s aggregate liability arising out
        of or relating to a booking is limited to the total amount paid by the client for that
        specific booking. We are not liable for indirect, incidental or consequential damages.
      </p>

      <h2>8. Conduct</h2>
      <p>
        Clients must comply with the venue&apos;s code of conduct and applicable local laws.
        Everon reserves the right to terminate a package without refund in case of illegal
        behavior, violence, or repeated breach of venue rules.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        All content on this website (text, design, logos, photography) is owned by Everon
        Solutions LLC or its licensors and may not be reproduced without prior written
        consent.
      </p>

      <h2>10. Governing law &amp; jurisdiction</h2>
      <p>
        These Terms are governed by the laws of the State of Florida, USA. Any dispute shall
        be submitted to the exclusive jurisdiction of the courts of Hillsborough County,
        Florida, without prejudice to any mandatory consumer-protection rights you may have
        under your country of residence.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href="mailto:solutionseveronllc@gmail.com">solutionseveronllc@gmail.com</a>.
      </p>
    </LegalLayout>
  );
}
