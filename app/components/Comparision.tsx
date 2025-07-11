"use client";
import React from "react";
import { Check, X } from "lucide-react";
import SectionHeading from "./SectionHeader";
import { motion } from "motion/react";

const Comparison = () => {
  const comparisonPoints = [
    {
      feature: "Modern, premium, built for conversions",
      revlane: true,
      others: false,
    },
    {
      feature: "Psychology-backed, clear, conversion-focused copy",
      revlane: true,
      others: false,
    },
    {
      feature: "Single, measurable CTA tied to booked demos",
      revlane: true,
      others: false,
    },
    {
      feature: "Research-driven, structured, proven frameworks",
      revlane: true,
      others: false,
    },
    {
      feature: "Clean, fast, production-ready dev handoff",
      revlane: true,
      others: false,
    },
    {
      feature: "One focused message tied to ROI and CAC",
      revlane: true,
      others: false,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-20">
        <SectionHeading
          title="Why Revlane Beats Generic Agencies."
          subtitle="We blend premium design and conversion science, where others just chase trends."
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
      >
        {/* Header */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 bg-gray-50 border-b border-gray-200"
        >
          <div className="p-6 text-center bg-primary text-zinc-800 shadow-lg transform scale-105 z-10 relative w-full flex items-center justify-center">
            <div className="w-26">
              {/* Using the image as in original code */}
              <motion.img
                src="/evlane.png"
                alt="Revlane Logo"
                className=""
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
              />
            </div>
          </div>
          <div className="p-6 text-center border-l border-gray-200 flex items-center justify-center">
            <motion.span
              className="font-semibold text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Other Agencies
            </motion.span>
          </div>
        </motion.div>

        {/* Comparison Rows */}
        {comparisonPoints.map((point, i) => (
          <motion.div
            key={i}
            variants={item}
            className="grid grid-cols-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
            whileHover={{ backgroundColor: "#f9fafb" }}
          >
            <div className="p-6 border-r border-gray-100 bg-tertiary shadow-sm transform scale-105 z-10 relative">
              <div className="flex items-center space-x-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 500,
                  }}
                >
                  {point.revlane ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                </motion.div>
                <span className="font-medium text-zinc-800">
                  {point.feature}
                </span>
              </div>
            </div>
            <div className="p-6 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 500,
                }}
              >
                {point.others ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-500" />
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Comparison;
