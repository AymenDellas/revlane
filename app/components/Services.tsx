"use client";
import React, { useState } from "react";
import { Target, Zap, BarChart } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { motion } from "motion/react";
const Services = () => {
  const services = [
    {
      title: "Custom Landing Pages",
      description:
        "Each page is custom-built to match your product, audience, and conversion path—no templates, no guesswork.",
      icon: Target,
      gradient: "from-purple-500 to-indigo-600",
      points: [
        "Designed around your goal (leads, sales, signups)",
        "Clean, responsive, and focused on user flow",
        "Just what makes people click",
      ],
    },
    {
      title: "Blazing-Fast Performance",
      description:
        "We prioritize performance. Pages are optimized to load in under 2 seconds, improving user experience and engagement.",
      icon: Zap,
      gradient: "from-blue-500 to-sky-400",
      points: [
        "Code minification, lazy loading, and smart caching",
        "Optimized images and no unnecessary scripts",
        "Scores 90+ on performance tests like PageSpeed",
      ],
    },
    {
      title: "Conversion Tracking & Analytics",
      description:
        "We implement analytics tools to monitor user behavior and key conversion events—so you can make informed decisions and iterate with confidence.",
      icon: BarChart,
      gradient: "from-emerald-500 to-teal-400",
      points: [
        "GA4 integration with custom event tracking",
        "Heatmaps, scroll tracking, and session replays",
        "Optional Meta Pixel and dashboard setup",
      ],
    },
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="services" className="relative py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeader
          title="Our Services"
          subtitle="Conversion-focused solutions that transform clicks into customers"
        />
      </motion.div>
      <motion.div className="w-[70%] mx-auto max-lg:place-items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, duration: 0.5, delay: i * 0.2 }}
              key={i}
              className="bg-white rounded-lg p-6 border border-gray-200 w-full max-w-sm relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0",
                }}
              />
              <span
                className={`absolute w-80 h-80  blur-3xl opacity-20 -top-10 -right-10 bg-gradient-to-br ${service.gradient}`}
              ></span>
              <div className="flex flex-col items-center space-y-4 relative z-10">
                <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-center">
                  {service.title}
                </h2>
                <p className="text-gray-500 text-center text-sm">
                  {service.description}
                </p>
                <motion.ul
                  className="text-sm space-y-2 w-full"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service.points.map((point, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start space-x-2"
                      variants={listItemVariants}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <p className="text-gray-600">{point}</p>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
