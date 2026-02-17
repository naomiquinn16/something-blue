import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://somethingblue.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Something Blue | Bespoke Wedding Websites",
    template: "%s | Something Blue",
  },
  description:
    "Custom wedding websites crafted with care. We create beautiful, personalized wedding websites that tell your unique love story. RSVP management, photo galleries, registry integration & more.",
  keywords: [
    "wedding website",
    "custom wedding website",
    "bespoke wedding website",
    "wedding RSVP",
    "wedding registry",
    "wedding planning",
  ],
  authors: [{ name: "Something Blue", url: siteUrl }],
  creator: "Something Blue",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Something Blue",
    title: "Something Blue | Bespoke Wedding Websites",
    description:
      "Custom wedding websites crafted with care. We create beautiful, personalized wedding websites that tell your unique love story.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Something Blue | Bespoke Wedding Websites",
    description:
      "Custom wedding websites crafted with care. We create beautiful, personalized wedding websites that tell your unique love story.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "wedding services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
