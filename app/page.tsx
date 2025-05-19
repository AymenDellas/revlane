import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <FAQ />
      <Contact />
    </main>
  );
};

export default page;
