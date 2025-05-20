import React from "react";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative flex flex-col items-center justify-center space-y-8 my-20 text-text w-[90%] lg:w-[60%] mx-auto  py-8 lg:py-36 ">
        <span className="absolute max-lg:w-50 max-lg:h-50 w-96 h-96 bg-accent/40 -z-10 rounded-[80%_10%] blur-3xl max-lg:left-36 left-60"></span>
        <span className="absolute max-lg:w-50 max-lg:h-50 w-96 h-96 bg-subtle/40 -z-10 rounded-[80%_10%] blur-3xl max-lg:right-36 right-60"></span>

        <h1 className=" max-sm:text-4xl text-6xl font-bold text-center">
          <span className="relative">
            Conversion-Optimized{" "}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 358 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9C118.957 4.47226 236.184 3.86015 355 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-subtle"
              />
            </svg>
          </span>
          Landing Pages
        </h1>
        <p className="text-lg text-zinc-300 text-center">
          We design and build landing pages with one purpose—
          <b className="font-bold">conversion</b>. <br /> Each page is
          structured to guide users, communicate your offer clearly, and drive
          action.
        </p>
        <a
          href="#contact"
          className="relative group px-8 py-4 rounded-full bg-gradient-to-tr from-subtle to-accent overflow-hidden"
        >
          <span className="absolute bg-black/20 inset-0 opacity-0 group-hover:opacity-100 transitio ease-out duration-300" />
          <p>Start Your Project</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;
