import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  event?: string;
  people?: string;
  budget?: string;
  message?: string;
};

const TO = "solutionseveronllc@gmail.com";

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!data.name || !data.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const subject = `New VIP request — ${data.name}${data.event ? ` · ${data.event}` : ""}`;
  const text = [
    `New request from the Everon Solutions website`,
    ``,
    `Name:      ${data.name}`,
    `Email:     ${data.email}`,
    `Phone:     ${data.phone || "-"}`,
    `Event:     ${data.event || "-"}`,
    `People:    ${data.people || "-"}`,
    `Budget:    ${data.budget || "-"}`,
    ``,
    `Message:`,
    data.message || "-",
  ].join("\n");

  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    const from = process.env.CONTACT_FROM || "Everon Web <onboarding@resend.dev>";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [TO],
        reply_to: data.email,
        subject,
        text,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[contact] Resend error:", res.status, body);
      return NextResponse.json(
        { error: "Could not send your message. Please email us directly." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  console.log("[contact] (no RESEND_API_KEY set — logging only)\n" + text);
  return NextResponse.json({ ok: true });
}
