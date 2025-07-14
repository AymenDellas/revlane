"use client";
import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { easeOut } from "motion/react";
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut }, // Using a valid easing function
    },
  };

  return (
    <section className="relative flex flex-col items-center py-40 space-y-6 overflow-hidden bg-background">
      <motion.div
        className="relative z-10 flex flex-col items-center space-y-8 max-w-5xl text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants}>
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-surface/70 backdrop-blur-sm rounded-full border border-border mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-poppins font-medium text-[13px] tracking-widest uppercase">
              Conversion Experts
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="text-3xl lg:text-5xl xl:text-[3.7rem] leading-[1.15] font-instrumentSerif font-bold text-dark max-w-4xl mb-6 px-4"
        >
          Stop Burning Ad Spend.
          <br className="hidden md:block" />
          Get <span className="text-primary">Qualified Demos</span> Without
          Complex Funnels
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-lg md:text-xl text-zinc-700 max-w-2xl leading-relaxed mb-10 font-inter"
        >
          We build conversion-optimized, psychologically sharp landing pages to
          turn your clicks into booked calls, fast.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 z-10 relative"
        >
          <a
            href="https://calendly.com/dellasaymen/discovery-call-revlane"
            target="_blank"
            className="group px-8 py-3.5 bg-primary hover:bg-primary/90 text-background font-poppins font-medium text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>Book Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#case_studies"
            className="group px-8 py-3.5 bg-surface hover:bg-surface-variant text-zinc-800 font-poppins font-medium text-base rounded-lg border-2 border-transparent hover:border-primary/30 transition-all duration-300 flex items-center space-x-2"
          >
            <Play className="w-4 h-4 text-primary" />
            <span>See Case Studies</span>
          </a>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="flex flex-col items-center space-y-6 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-zinc-600 text-sm font-poppins">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>30-day guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Results in 2 weeks</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
