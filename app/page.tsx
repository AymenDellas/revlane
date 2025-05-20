import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Head from "next/head";
const page = () => {
  return (
    <>
      <Head>
        <title>Revlane | High-Converting Landing Pages</title>
        <meta
          name="description"
          content="Revlane builds sleek, high-converting landing pages for startups and global brands."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://revlane.tech/" />

        {/* OG */}
        <meta
          property="og:title"
          content="Revlane | High-Converting Landing Pages"
        />
        <meta
          property="og:description"
          content="Need a landing page that actually converts? Work with Revlane."
        />
        <meta property="og:image" content="/revlane.png" />
        <meta property="og:url" content="https://revlane.tech/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Revlane",
              url: "https://revlane.tech",
              logo: "https://revlane.tech/revlane.png",
              description:
                "Revlane is a web agency specializing in high-converting landing pages.",
              sameAs: ["https://linkedin.com/company/revlane"],
            }),
          }}
        />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <FAQ />
      <Contact />
    </>
  );
};

export default page;
