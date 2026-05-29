import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteTitle = "Flex & Flow | Stretch. Breathe. Release. Reset";
const siteDescription =
  "Flex & Flow is a mindful stretch and mobility class by Christina Ribeiro designed to help you release tension, improve mobility, and feel lighter.";

export const metadata: Metadata = {
  metadataBase: new URL("https://flexandflow.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "stretch class",
    "mobility class",
    "Flex and Flow",
    "Christina Ribeiro",
    "mindful stretching",
    "posture reset",
    "deep release",
    "recovery class",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    siteName: "Flex & Flow",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
