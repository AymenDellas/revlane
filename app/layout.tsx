import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playful-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      className={`overflow-x-hidden scroll-smooth ${playfairDisplay.variable} ${poppins.variable}`}
    >
      <body className={`${poppins.className} antialiased`}>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
