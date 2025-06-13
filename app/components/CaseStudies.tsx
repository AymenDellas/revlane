"use client";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { motion } from "motion/react";
const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Life Coach Funnel",
      type: "Lead Generation",
      niche: "Life Coaching",
      goal: "Encourage users to book a free discovery call",
      highlights: [
        "Minimalist layout with a clear headline and call-to-action",
        "Testimonials and trust-building elements to establish credibility",
        "Responsive design optimized for mobile devices",
      ],
      image: "/lifecoach.PNG",
      url: "https://lifecoach-eosin.vercel.app/",
    },
    {
      title: "Fitness Program Landing Page",
      type: "Sales Page",
      niche: "Fitness Coaching",
      goal: "Promote a fitness program and encourage sign-ups",
      highlights: [
        "Bold headlines with motivational messaging",
        "Structured layout showcasing program benefits",
        "Clear call-to-action leading to sign-up form",
      ],
      image: "/fitnesscoach.PNG",
      url: "https://fitness-three-delta.vercel.app/",
    },
    {
      title: "Digital Product Launch Page",
      type: "Product Launch",
      niche: "Digital Products",
      goal: "Introduce and sell a digital product",
      highlights: [
        "Clean design focusing on product features",
        "Compelling copy highlighting value propositions",
        "Prominent call-to-action for immediate purchase",
      ],
      image: "/digitalproduct.PNG",
      url: "https://digitalproduct-navy.vercel.app/",
    },
  ];
  const [activeTab, setActiveTab] = useState<number>(0);
  let current = caseStudies[activeTab];
  return (
    <section
      id="case_studies"
      className="relative w-[90%]  xl:w-[70%] mx-auto "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeader
          title="Our Work"
          subtitle="A collection of landing pages we've built to showcase strategic layouts, strong messaging, and proven design principles built to convert."
        />
      </motion.div>
      <span className="absolute h-full w-full right-0  rounded-full bg-gradient-to-r from-accent to-accent-secondary -z-10 opacity-10 blur-3xl" />
      <article className="flex flex-col lg:flex-row max-lg:space-y-8 lg:space-x-8 ">
        <div className="space-y-6 ">
          {caseStudies.map((study, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-between p-4 rounded-lg backdrop-blur-lg border border-gray-200 cursor-pointer transition-colors duration-300 ease-out ${
                  activeTab === index
                    ? "bg-white"
                    : "bg-gray-50/50 hover:bg-gray-100/70"
                }`}
              >
                <div className="flex flex-col space-y-2">
                  <span className="rounded-md text-sm bg-gray-200 text-gray-700 px-2 py-1 w-fit">
                    {study.type}
                  </span>
                  <h2 className="text-xl font-bold">{study.title}</h2>
                </div>
                <span>
                  {activeTab === index ? <ChevronDown /> : <ChevronRight />}
                </span>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white backdrop-blur-xl border border-gray-200 rounded-lg overflow-hidden lg:w-2/3 space-y-4 "
        >
          {/* Browser Frame Container */}
          <div className="relative bg-gray-100 shadow-md overflow-hidden">
            {/* Browser Bar */}
            <div className="h-8 bg-gray-200 flex items-center px-3 border-b border-gray-300">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            {/* Image container */}
            <div className="relative h-80 w-full overflow-hidden"> {/* Adjusted height for browser bar, e.g. h-96 -> h-88, then to h-80 for better aspect ratio */}
              <img
                src={current.image}
                alt={`Screenshot of ${current.title}`}
                className="w-full h-full object-cover object-top"
              />
              <Link
                href={current.url}
                target="_blank"
                className="flex items-center space-x-2 absolute bg-black/60 rounded-md p-2 bottom-2 right-2 z-10 text-white"
              >
                <ExternalLink />
                <p>View Live Page</p>
              </Link>
              {/* Optional: inner shadow or gradient overlay for image if needed, but the existing one might be fine */}
              <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
            </div>
          </div>
          <div className="p-4 space-y-4"> {/* Reverted pt-0, parent's space-y-4 will handle spacing */}
            <div className="flex items-center justify-between w-full">
              <span>
                <h3 className="font-bold max-sm:text-lg text-xl">
                  {current.title}
                </h3>
                <p className="text-gray-500">{current.niche}</p>
              </span>
              <span>
                <p className="font-bold">Goal:</p> {current.goal}
              </span>
            </div>
            <div className="w-full bg-gray-50/70 border border-gray-200/80 rounded-lg p-4  space-y-4">
              <h2 className="text-2xl font-bold">Design Highlights</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {current.highlights.map((highlight, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center bg-accent/5 rounded-lg border border-accent/30 p-2 space-x-4"
                    >
                      <div className="flex justify-center">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <p className="max-xl:text-sm text-gray-700">{highlight}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </section>
  );
};

export default CaseStudies;
