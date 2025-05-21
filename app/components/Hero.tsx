"use client";
import React from "react";
import { useActiveIndex } from "@/lib/store";
const Hero = () => {
  const { activeIndex, setActiveIndex } = useActiveIndex();
  return (
    <section id="home">
      <div className="relative flex flex-col items-center justify-center space-y-8 my-20 text-text w-[90%] lg:w-[60%] mx-auto  py-8 lg:py-36 ">
        <span className="absolute max-lg:w-50 max-lg:h-50 w-96 h-96 bg-accent/40 -z-10 rounded-[80%_10%] blur-3xl max-lg:left-36 left-60"></span>
        <span className="absolute max-lg:w-50 max-lg:h-50 w-96 h-96 bg-subtle/40 -z-10 rounded-[80%_10%] blur-3xl max-lg:right-36 right-60"></span>
        <span className="border border-accent bg-accent/10 backdrop-blur-lg rounded-full px-4 py-1 text-accent">
          Built for short attention spans
        </span>
        <h1 className=" max-sm:text-4xl text-6xl font-bold text-center">
          <span className="relative  text-center text-transparent bg-clip-text bg-gradient-to-b from-accent  to-subtle">
            Conversion Optimized
          </span>
          <br />
          Landing Pages
        </h1>
        <p className="text-lg text-zinc-300 text-center">
          We design and build landing pages with one purpose—
          <b className="font-bold">conversion</b>. <br /> Each page is
          structured to guide users, communicate your offer clearly, and drive
          action.
        </p>
        <div className="flex flex-col justify-center  lg:flex-row max-lg:space-y-4 items-center lg:space-x-4">
          <a
            onClick={() => setActiveIndex(1)}
            href="#contact"
            className="relative group px-8 py-4 rounded-full bg-gradient-to-tr from-subtle to-accent overflow-hidden"
          >
            <span className="absolute bg-black/20 inset-0 opacity-0 group-hover:opacity-100  ease-out duration-300" />
            <p>Start Your Project</p>
          </a>
          <a
            onClick={() => setActiveIndex(2)}
            href="#contact"
            className="relative group px-8 py-4 rounded-full bg-black/20 backdrop-blur-lg border border-subtle/50 overflow-hidden hover:bg-black/40 ease-out duration-300  "
          >
            Get Free Audit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
