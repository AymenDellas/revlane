"use client";
import React from "react";
import { Check, X } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { motion } from "motion/react";

const Comparison = () => {
  const comparisonData = [
    {
      capability: "Technical Stack Expertise",
      typical: "Basic WordPress templates",
      revlane: "Pre-built Salesforce/HubSpot integrations",
      revlaneAdvantage: true,
    },
    {
      capability: "VC Metric Alignment",
      typical: "Generic conversion goals",
      revlane: "Pipeline velocity & CAC optimization focus",
      revlaneAdvantage: true,
    },
    {
      capability: "Implementation Speed",
      typical: "4-6 week deployments",
      revlane: "72-hour MVP launch guarantee",
      revlaneAdvantage: true,
    },
    {
      capability: "Founder Collaboration",
      typical: "Account manager layers",
      revlane: "Direct CTO-level access",
      revlaneAdvantage: true,
    },
    {
      capability: "Ongoing Optimization",
      typical: "One-time delivery",
      revlane: "Quarterly growth sprints",
      revlaneAdvantage: true,
    },
    {
      capability: "Risk Approach",
      typical: "Fixed-scope contracts",
      revlane: "Free pilot experiment",
      revlaneAdvantage: true,
    },
  ];

  return (
    <section id="whychoose" className="relative py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeader
          title="Why Choose Revlane"
          subtitle="See how we stack up against typical agencies—built specifically for VC-backed SaaS teams"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[90%] lg:w-[80%] mx-auto"
      >
        <div className="bg-black/80 rounded-xl overflow-hidden border border-zinc-800 relative">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0",
            }}
          />

          {/* Gradient overlays */}
          <span className="absolute w-80 h-80 bg-gradient-to-br from-accent/20 to-subtle/20 blur-3xl -top-20 -right-20 opacity-60" />
          <span className="absolute w-80 h-80 bg-gradient-to-tl from-subtle/20 to-accent/20 blur-3xl -bottom-20 -left-20 opacity-60" />

          {/* Table Header */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 border-b border-zinc-700">
            <div className="p-6 font-bold text-lg text-center border-b md:border-b-0 md:border-r border-zinc-700">
              Capability
            </div>
            <div className="p-6 font-bold text-lg text-center border-b md:border-b-0 md:border-r border-zinc-700">
              Typical Agencies
            </div>
            <div className="p-6 font-bold text-lg text-center bg-accent/10">
              Revlane
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative z-10 grid grid-cols-1 md:grid-cols-3 ${
                index !== comparisonData.length - 1
                  ? "border-b border-zinc-700"
                  : ""
              }`}
            >
              {/* Capability */}
              <div className="p-6 font-medium text-center md:text-left border-b md:border-b-0 md:border-r border-zinc-700">
                {row.capability}
              </div>

              {/* Typical Agencies */}
              <div className="p-6 text-center md:text-left border-b md:border-b-0 md:border-r border-zinc-700">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-zinc-400">{row.typical}</span>
                </div>
              </div>

              {/* Revlane */}
              <div className="p-6 text-center md:text-left bg-accent/5">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white font-medium">{row.revlane}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-zinc-400 mb-6">
            Ready to experience the Revlane difference?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-tr from-subtle to-accent text-white font-medium hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
          >
            Start Your Free Pilot
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Comparison;
