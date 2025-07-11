"use client";
import React from "react";
import {
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Target,
  Zap,
} from "lucide-react";
import SectionHeading from "./SectionHeader";
import { motion } from "motion/react";

const ProblemSolution = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const features = [
    {
      icon: <Target className="w-6 h-6 text-dark" />,
      title: "Psychology-Driven Copy",
      description: "Research-backed messaging targeting buyer pain points",
    },
    {
      icon: <Zap className="w-6 h-6 text-dark" />,
      title: "Conversion Design",
      description: "Premium designs built to drive demo bookings",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-dark" />,
      title: "Measurable Results",
      description: "Every element tied to ROI with clear metrics",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="text-center mb-20 max-w-3xl mx-auto px-4"
      >
        <SectionHeading
          title="Your Funnel Is Leaking — Let's Fix It."
          subtitle="Most SaaS pages waste clicks with bad UX and vague messaging. We rebuild them for clarity and results."
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="text-center mb-24 max-w-3xl mx-auto px-4"
      >
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-primary/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-primary" />
            <span className="text-primary font-poppins font-medium text-xs tracking-wider uppercase">
              The Problem
            </span>
          </div>
        </motion.div>

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-playfair font-bold text-dark mb-6 leading-tight"
        >
          Struggling to convert <br className="hidden md:block" />
          <span className="text-primary">cold traffic?</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="text-lg text-zinc-700 max-w-2xl mx-auto leading-relaxed font-poppins"
        >
          Most SaaS landing pages leak up to{" "}
          <span className="font-semibold text-primary">
            70% of paid traffic
          </span>{" "}
          due to weak messaging and poor UX -{" "}
          <span className="font-semibold">wasting thousands monthly.</span>
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-dark rounded-3xl p-8 md:p-12 border border-primary/20"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-variant rounded-full border border-primary/20 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-dark" />
            <span className="text-dark font-poppins font-medium text-xs tracking-wider uppercase">
              The Solution
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6 leading-tight max-w-3xl mx-auto"
          >
            <span className="text-primary">Revlane</span> designs
            high-converting landing pages
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-12 font-poppins"
          >
            Cut{" "}
            <span className="font-semibold text-primary">CAC, boost ROI,</span>{" "}
            and book more demos from day one. No wasted clicks. Just results.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={item}
                className="bg-background p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-700 font-poppins">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group px-8 py-4 bg-primary text-background font-poppins font-medium rounded-lg shadow-md hover:shadow-lg flex items-center gap-2 mx-auto transition-all duration-300 hover:bg-primary/90"
          >
            <span>Get Free Landing Page Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSolution;
