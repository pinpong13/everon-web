import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://everon-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Everon Solutions — VIP Concert Experiences",
    template: "%s · Everon Solutions",
  },
  description:
    "All-inclusive VIP concert experiences. Tickets, hospitality, meet & greets, private transfer, luxury hotels, and 24/7 concierge.",
  openGraph: {
    title: "Everon Solutions — VIP Concert Experiences",
    description:
      "Live the concert. Skip the line. All-inclusive premium packages for the world's biggest shows.",
    type: "website",
    url: SITE_URL,
    siteName: "Everon Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everon Solutions — VIP Concert Experiences",
    description:
      "All-inclusive VIP concert experiences — tickets, hospitality, hotels, concierge.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
