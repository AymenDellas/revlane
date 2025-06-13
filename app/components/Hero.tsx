"use client";
import React from "react";
import { useActiveIndex } from "@/lib/store";
import { motion } from "motion/react";
const Hero = () => {
  const { activeIndex, setActiveIndex } = useActiveIndex();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      id="home"
      className="relative"
    >
      <div className="relative flex flex-col items-center justify-center space-y-8 py-20 w-[90%] lg:w-[60%] mx-auto   lg:py-36 ">
        <span className="absolute max-lg:w-50 max-lg:h-50 w-96 h-96 bg-accent/20 -z-10 rounded-[80%_10%] blur-3xl max-lg:left-36 left-60 animate-float"></span>
        <span className="absolute max-lg:w-50 max-lg:h-50 w-96 h-96 bg-accent-secondary/20 -z-10 rounded-[80%_10%] blur-3xl max-lg:right-36 right-60 animate-float"></span>
        <span className="border border-accent bg-accent/10 backdrop-blur-lg rounded-full px-4 py-1 text-teal-700">
          Built for short attention spans
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" max-sm:text-4xl text-6xl font-bold text-center text-gray-800"
        >
          <span className="relative text-center text-accent">
            Conversion Optimized
          </span>
          <br />
          Landing Pages
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-lg text-gray-600 text-center"
        >
          We design and build landing pages with one purpose—
          <b className="font-bold">conversion</b>. <br /> Each page is
          structured to guide users, communicate your offer clearly, and drive
          action.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col justify-center  lg:flex-row max-lg:space-y-4 items-center lg:space-x-4"
        >
          <a
            onClick={() => setActiveIndex(1)}
            href="#contact"
            className="relative group px-8 py-4 rounded-full bg-gradient-to-tr from-accent-secondary to-accent text-white overflow-hidden"
          >
            <span className="absolute bg-black/20 inset-0 opacity-0 group-hover:opacity-100  ease-out duration-300" />
            <p>Start Your Project</p>
          </a>
          <a
            onClick={() => setActiveIndex(2)}
            href="#contact"
            className="relative group px-8 py-4 rounded-full bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400 transition-colors ease-out duration-100"
          >
            Get Free Audit
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
