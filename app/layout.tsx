import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revlane | High-Converting Landing Pages",
  description:
    "Revlane is a web agency specializing in sleek, high-converting landing pages for startups and global brands.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} ${poppins.className} antialiased`}
      >
        {/* Optional background grid */}
        {/* <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#31313175_2px,transparent_2px)] [background-size:50px_50px]" /> */}

        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
