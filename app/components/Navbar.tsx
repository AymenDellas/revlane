import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" my-4">
      <div className="max-lg:hidden flex items-center space-x-56 justify-between bg-zinc-900 border border-white/10 w-fit rounded-full mx-auto  px-6 py-2">
        <div className="flex items-center space-x-3">
          <img src="/revlanelogo.png" alt="logo" className="w-8" />
          <ul className="flex items-center space-x-6 ml-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>Case Studies</li>
          </ul>
        </div>
        <a
          href="#"
          className="bg-zinc-800 border border-white/10 rounded-full px-6 py-3 hover:border-white/30 hover:bg-zinc-800/50 transition-colors ease-out duration-100"
        >
          Start your project
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
