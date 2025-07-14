import type { Metadata } from "next";
import {
  Poppins,
  Playfair_Display,
  Instrument_Serif,
  Inter,
} from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playful-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revlane | High-Converting Landing Pages",
  description:
    "Revlane builds landing pages that actually convert. Built for results.",
  metadataBase: new URL("https://revlane.tech"),
  openGraph: {
    title: "Revlane | High-Converting Landing Pages",
    description:
      "Revlane builds landing pages that actually convert. Built for results.",
    url: "https://revlane.tech",
    siteName: "Revlane",
    images: [
      {
        url: "/revlane.png",
        width: 1200,
        height: 630,
        alt: "Revlane Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revlane | High-Converting Landing Pages",
    description:
      "Revlane builds landing pages that actually convert. Built for results.",
    images: ["/revlane.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`overflow-x-hidden scroll-smooth ${playfairDisplay.variable} ${instrumentSerif.variable} ${inter.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
