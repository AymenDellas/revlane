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
      <div className="relative flex flex-col items-center justify-center space-y-8 py-20 text-text w-[90%] lg:w-[60%] mx-auto   lg:py-36 ">
        <span className="absolute max-lg:w-50 max-lg:h-50 w-96 h-96 bg-accent/40 -z-10 rounded-[80%_10%] blur-3xl max-lg:left-36 left-60"></span>
        <span className="absolute max-lg:w-50 max-lg:h-50 w-96 h-96 bg-subtle/40 -z-10 rounded-[80%_10%] blur-3xl max-lg:right-36 right-60"></span>
        <span className="border border-accent bg-accent/10 backdrop-blur-lg rounded-full px-4 py-1 text-accent">
          Built for short attention spans
        </span>
        <motion.h1
          initial={{ y: 15 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" max-sm:text-4xl text-6xl font-bold text-center"
        >
          Stop Letting Your Landing Page Leak Sales{" "}
          <span className="relative  text-center text-transparent bg-clip-text bg-gradient-to-b from-accent  to-subtle">
            Demo Leads
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-lg text-zinc-300 text-center"
        >
          Specialized landing pages built exclusively for VC-backed Sales SaaS
          teams - engineered to capture high-intent demos and accelerate
          pipeline velocity.
        </motion.p>
        <motion.div
          initial={{ y: 15 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col justify-center  lg:flex-row max-lg:space-y-4 items-center lg:space-x-4"
        >
          <a
            onClick={() => setActiveIndex(1)}
            href="#contact"
            className="relative group px-8 py-4 rounded-full bg-gradient-to-tr from-subtle to-accent overflow-hidden"
          >
            <span className="absolute bg-black/20 inset-0 opacity-0 group-hover:opacity-100  ease-out duration-300" />
            <p>Boost My Demo Bookings</p>
          </a>
          <a
            onClick={() => setActiveIndex(2)}
            href="#contact"
            className="relative group px-8 py-4 rounded-full bg-black/20 backdrop-blur-lg border border-subtle/50 overflow-hidden hover:bg-black/40 ease-out duration-300  "
          >
            Audit my landing page
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
