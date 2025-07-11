"use client";
import React from "react";
import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-4xl mx-auto mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight tracking-tight font-instrumentSerif">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto font-inter">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeading;
