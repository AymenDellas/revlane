import React from "react";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative flex flex-col items-center justify-center space-y-8 my-20 text-text w-[90%] lg:w-[60%] mx-auto   py-36 ">
        <span className="absolute max-lg:w-72 max-lg:h-72 w-96 h-96 bg-accent/40 -z-10 rounded-[80%_10%] blur-3xl max-lg:left-36 left-60"></span>
        <span className="absolute max-lg:w-72 max-lg:h-72 w-96 h-96 bg-subtle/40 -z-10 rounded-[80%_10%] blur-3xl max-lg:right-36 right-60"></span>

        <h1 className=" max-sm:text-4xl text-6xl font-bold text-center">
          We Build Landing Pages <br /> That{" "}
          <span className="relative">
            Convert
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 358 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9C118.957 4.47226 236.184 3.86015 355 9"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                className="text-subtle"
              />
            </svg>
          </span>
        </h1>
        <p className="text-lg text-zinc-300 text-center">
          Revlane creates high-converting pages built to sell, not just sit
          pretty. Our data-driven approach ensures your website turns visitors
          into customers.
        </p>
        <a href="#contact" className="card">
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default Hero;
