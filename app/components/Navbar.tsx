"use client";
import { useActiveIndex } from "@/lib/store";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeIndex, setActiveIndex } = useActiveIndex();
  return (
    <>
      <motion.nav
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-3 py-4 z-50"
      >
        <div className="w-[90%] flex items-center justify-between bg-white/70 backdrop-blur-md border-b border-gray-200 lg:w-[85%] 2xl:w-[60%] rounded-lg mx-auto px-6 py-2">
          <div className=" flex items-center justify-between w-full">
            <img src="/revlane.png" alt="logo" className="w-8" />
            <ul className="max-lg:hidden lg:flex items-center space-x-6 ">
              <li className="relative group ">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-accent transition-colors duration-200 ease-out"
                >
                  Home
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-accent transition-colors duration-200 ease-out"
                >
                  Services
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#process"
                  className="text-gray-700 hover:text-accent transition-colors duration-200 ease-out"
                >
                  Process
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#case_studies"
                  className="text-gray-700 hover:text-accent transition-colors duration-200 ease-out"
                >
                  Case Studies
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#faq"
                  className="text-gray-700 hover:text-accent transition-colors duration-200 ease-out"
                >
                  Faq
                </a>
              </li>
            </ul>
            <span onClick={() => setIsOpen(true)} className="lg:hidden">
              <Menu className="text-gray-700" />
            </span>
            <div className="max-lg:hidden lg:flex items-center space-x-2">
              <a
                href="#contact"
                onClick={() => setActiveIndex(1)}
                className=" w-fit relative group px-4 py-2 rounded-lg bg-gradient-to-tr from-accent-secondary to-accent text-white overflow-hidden"
              >
                Start your project
                <span className="absolute bg-black/20 inset-0 opacity-0 group-hover:opacity-100  ease-out duration-300" />
              </a>
              <a
                href="#contact"
                onClick={() => setActiveIndex(2)}
                className=" w-fit bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 hover:border-gray-400 transition-colors ease-out duration-100"
              >
                Get Free Audit
              </a>
            </div>
          </div>
        </div>
        {isOpen && (
          <>
            <div
              onClick={() => setIsOpen(false)}
              className={`lg:hidden  absolute z-50 inset-0 -top-4 bg-white/80 backdrop-blur-xl w-screen h-dvh mx-auto p-4 space-y-8 `}
            >
              <span className="w-full h-full absolute inset-0 bg-black/10 -z-10" />
              <div className="flex  items-center justify-between mx-2">
                <img src="/revlane.png" alt="logo" className="w-8" />
                <X
                  className="text-gray-700"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <ul className="lg:hidden flex flex-col items-center justify-center h-1/2 space-y-6 text-xl">
                <li>
                  <a
                    href="#home"
                    className="text-gray-700 hover:text-accent active:text-accent ease-out duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-700 hover:text-accent active:text-accent ease-out duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="text-gray-700 hover:text-accent active:text-accent ease-out duration-300"
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    href="#case_studies"
                    className="text-gray-700 hover:text-accent active:text-accent ease-out duration-300"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-700 hover:text-accent active:text-accent ease-out duration-300"
                  >
                    Faq
                  </a>
                </li>
                <div className=" flex flex-col justify-center space-y-2 w-full">
                  <a
                    href="#contact"
                    onClick={() => setActiveIndex(1)}
                    className=" w-full text-center relative group px-4 py-2 rounded-lg bg-gradient-to-tr from-accent-secondary to-accent text-white overflow-hidden"
                  >
                    Start your project
                    <span className="absolute bg-black/20 inset-0 opacity-0 group-hover:opacity-100  ease-out duration-300" />
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setActiveIndex(2)}
                    className=" w-full text-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 hover:border-gray-400 transition-colors ease-out duration-100"
                  >
                    Get Free Audit
                  </a>
                </div>
              </ul>
            </div>
          </>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
