"use client";
import React, { useState } from "react";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import SectionHeading from "./SectionHeader";
import { motion } from "motion/react";

const ProcessSection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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
      transition: {
        duration: 0.6,
        ease: "easeIn", // Using a predefined easing function
      },
    },
  };

  const steps = [
    {
      id: 1,
      title: "Discovery Call",
      subtitle: "Define traffic, audience, and goals",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      duration: "30 min",
      outcome: "Clear strategy brief with conversion goals",
      description:
        "We dive deep into your current funnel, target audience, and business goals to create a conversion-focused strategy.",
    },
    {
      id: 2,
      title: "Strategy & Positioning",
      subtitle: "Lock in your message and UX",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      duration: "2-3 days",
      outcome: "Buyer psychology framework and messaging hierarchy",
      description:
        "We craft your positioning using buyer psychology principles that resonate with your ideal customers.",
    },
    {
      id: 3,
      title: "Wireframes + Copy",
      subtitle: "Built to convert, not just look pretty",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      duration: "3-4 days",
      outcome: "Conversion-focused wireframes with psychology-backed copy",
      description:
        "Every element is strategically placed to guide visitors toward your conversion goal with compelling copy.",
    },
    {
      id: 4,
      title: "High-Fidelity Design",
      subtitle: "Modern, premium, on-brand",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      duration: "4-5 days",
      outcome: "Pixel-perfect designs that build trust and drive action",
      description:
        "We create stunning, professional designs that build trust and credibility with your prospects.",
    },
    {
      id: 5,
      title: "Launch + Optimize",
      subtitle: "Track, tweak, and scale",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      duration: "Ongoing",
      outcome: "Live page with analytics and optimization recommendations",
      description:
        "We launch your page and provide ongoing optimization recommendations to maximize performance.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="text-center mb-20"
      >
        <SectionHeading
          title="Our 5-Step Conversion Framework."
          subtitle="From audit to launch, here's how we transform underperforming pages."
        />
      </motion.div>

      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={item}
              className="relative bg-white rounded-2xl border-2 border-surface p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/50 group cursor-pointer"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-md">
                {step.id}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mb-6">
                {step.icon}
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-playfair font-bold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-600 font-poppins mb-4">
                  {step.subtitle}
                </p>
                <p className="text-sm text-zinc-700 font-poppins leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-poppins font-medium text-primary">
                  {step.duration}
                </span>
              </div>

              <div className="p-4 bg-background/50 rounded-lg border border-primary/20">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-zinc-700 font-poppins">
                    <span className="font-semibold">Outcome:</span>{" "}
                    {step.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="text-center mt-16">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group px-8 py-4 bg-primary hover:bg-primary/90 text-background font-poppins font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <span>Start Your Project Today</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-6 text-zinc-600 text-sm font-poppins"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Fast turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Proven results</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
