"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-4 my-4 z-50">
      <div className="w-[90%] flex items-center  justify-between bg-zinc-900 border border-white/10 lg:w-[50%] rounded-full mx-auto  px-6 py-2">
        <div className=" flex items-center justify-between w-full">
          <img src="/revlanelogo.png" alt="logo" className="w-8" />
          <ul className="hidden lg:flex items-center space-x-6 ">
            <li className="relative group ">
              <a
                href="#home"
                className="group-hover:text-subtle transition-colors duration-200 ease-out"
              >
                Home
              </a>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle left-1/2 -translate-x-1/2 -bottom-1.5" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle right-1/2 translate-x-1/2 -bottom-1.5 opacity-0 group-hover:translate-x-6  group-hover:opacity-100 transition-all duration-300 ease-out" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle left-1/2 -translate-x-1/2 -bottom-1.5 opacity-0 group-hover:-translate-x-6  group-hover:opacity-100 transition-all duration-300 ease-out" />
            </li>
            <li className="relative group">
              <a
                href="#services"
                className="group-hover:text-subtle transition-colors duration-200 ease-out"
              >
                Services
              </a>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle left-1/2 -translate-x-1/2 -bottom-1.5" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle right-1/2 translate-x-1/2 -bottom-1.5 opacity-0 group-hover:translate-x-6  group-hover:opacity-100 transition-all duration-300 ease-out" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle left-1/2 -translate-x-1/2 -bottom-1.5 opacity-0 group-hover:-translate-x-6  group-hover:opacity-100 transition-all duration-300 ease-out" />
            </li>
            <li className="relative group">
              <a
                href="#process"
                className="group-hover:text-subtle transition-colors duration-200 ease-out"
              >
                Process
              </a>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle left-1/2 -translate-x-1/2 -bottom-1.5" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle right-1/2 translate-x-1/2 -bottom-1.5 opacity-0 group-hover:translate-x-6  group-hover:opacity-100 transition-all duration-300 ease-out" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle left-1/2 -translate-x-1/2 -bottom-1.5 opacity-0 group-hover:-translate-x-6  group-hover:opacity-100 transition-all duration-300 ease-out" />
            </li>
            <li className="relative group">
              <a
                href="#case_studies"
                className="group-hover:text-subtle transition-colors duration-200 ease-out"
              >
                Case Studies
              </a>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle left-1/2 -translate-x-1/2 -bottom-1.5" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle right-1/2 translate-x-1/2 -bottom-1.5 opacity-0 group-hover:translate-x-6  group-hover:opacity-100 transition-all duration-300 ease-out" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle left-1/2 -translate-x-1/2 -bottom-1.5 opacity-0 group-hover:-translate-x-6  group-hover:opacity-100 transition-all duration-300 ease-out" />
            </li>
            <li className="relative group">
              <a
                href="#faq"
                className="group-hover:text-subtle transition-colors duration-200 ease-out"
              >
                Faq
              </a>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle left-1/2 -translate-x-1/2 -bottom-1.5" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle right-1/2 translate-x-1/2 -bottom-1.5 opacity-0 group-hover:translate-x-5  group-hover:opacity-100 transition-all duration-300 ease-out" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-subtle left-1/2 -translate-x-1/2 -bottom-1.5 opacity-0 group-hover:-translate-x-5  group-hover:opacity-100 transition-all duration-300 ease-out" />
            </li>
          </ul>
          <span onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <Menu />
          </span>
          <a
            href="#"
            className="max-lg:hidden w-fit  bg-zinc-800 border border-white/10 rounded-full px-6 py-3 hover:border-white/30 hover:bg-zinc-800/50 transition-colors ease-out duration-100"
          >
            Start your project
          </a>
        </div>
      </div>
      {isOpen && (
        <>
          <div className="absolute z-50 right-0 left-0  bg-zinc-950 w-[90%] mx-auto my-4 border border-subtle/20 rounded-lg p-4 space-y-8">
            <ul className="lg:hidden flex flex-col space-y-4 text-xl">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#case_studies">Case Studies</a>
              </li>
              <li>
                <a href="#faq">Faq</a>
              </li>
              <a
                href="#"
                className="lg:hidden text-center bg-zinc-800 border border-white/10 rounded-md w-full px-6 py-3 hover:border-white/30 hover:bg-zinc-800/50 transition-colors ease-out duration-100"
              >
                Start your project
              </a>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
