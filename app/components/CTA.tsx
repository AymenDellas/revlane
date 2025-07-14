"use client";
import React from "react";
import { ArrowRight, Shield, Clock } from "lucide-react";
import SectionHeading from "./SectionHeader";
import { motion } from "motion/react";

const CTASection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="bg-dark rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <motion.div variants={child}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">
                Limited Availability
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={child}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Turn Traffic Into{" "}
            <span className="text-primary">Revenue?</span>
          </motion.h2>

          <motion.p
            variants={child}
            className="text-xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Stop wasting ad spend on pages that don't convert. Get a landing
            page that turns clicks into qualified demos.
          </motion.p>

          <motion.div variants={child} className="relative mb-12">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="px-4 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                Only 2 Spots Left This Month
              </div>
            </div>

            <a
              href="https://calendly.com/dellasaymen/discovery-call-revlane"
              target="_blank"
              className="group w-fit px-14 py-5 bg-primary hover:bg-primary/90 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center space-x-3 mx-auto mt-6"
            >
              <span>Book My Discovery Call</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={child}
            className="bg-dark/70 backdrop-blur rounded-2xl p-8 border border-primary/30 mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-white">
                100% Risk-Free Guarantee
              </h3>
            </div>
            <p className="text-xl text-primary font-semibold mb-4">
              Pay $0 Until We Hit Your Conversion Goal
            </p>
            <p className="text-zinc-300 leading-relaxed">
              We're so confident in our process that we'll build your landing
              page and only charge you once you see measurable results.
            </p>
          </motion.div>

          <motion.div
            variants={child}
            className="flex flex-wrap justify-center gap-6 text-zinc-400"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>No Long-Term Contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Results in 30 Days</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Full Money-Back Guarantee</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
