"use client";
import React from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-zinc-950 pt-20 pb-8 border-t border-zinc-800/50 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0",
        }}
      />

      {/* Decorative background gradients */}
      <span className="absolute w-96 h-96 rounded-full bg-accent/10 -z-10 blur-3xl bottom-10 -left-20"></span>
      <span className="absolute w-72 h-72 rounded-full bg-subtle/10 -z-10 blur-3xl top-10 right-10"></span>

      <div className="relative z-10 w-[90%] lg:w-[80%] mx-auto">
        {/* Footer Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10">
          {/* Company Info */}
          <div className="max-w-xs">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/revlane.png"
                alt="Revlane logo"
                className="w-10 h-10"
              />
              <span className="font-bold text-xl">Revlane</span>
            </div>
            <p className="text-zinc-400 mb-6">
              Revlane creates high-converting pages built to sell, not just sit
              pretty. Our data-driven approach ensures your website turns
              visitors into customers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/revlaneagency"
                target="_blank"
                className="bg-zinc-900 p-2 rounded-full border border-zinc-800 hover:border-zinc-700 transition-colors duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="bg-zinc-900 p-2 rounded-full border border-zinc-800 hover:border-zinc-700 transition-colors duration-200"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="bg-zinc-900 p-2 rounded-full border border-zinc-800 hover:border-zinc-700 transition-colors duration-200"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li className="text-zinc-400 hover:text-accent transition-colors duration-200">
                <a href="#home">Home</a>
              </li>
              <li className="text-zinc-400 hover:text-accent transition-colors duration-200">
                <a href="#whychoose">Why choose us</a>
              </li>
              <li className="text-zinc-400 hover:text-accent transition-colors duration-200">
                <a href="#case_studies">Case Studies</a>
              </li>
              <li className="text-zinc-400 hover:text-accent transition-colors duration-200">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-zinc-400">
                <span className="text-accent bg-accent/10 rounded-md p-2">
                  <Mail size={16} />
                </span>
                <span>contact@revlane.tech</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-400">
                <span className="text-accent bg-accent/10 rounded-md p-2">
                  <Phone size={16} />
                </span>
                <span>+213 676366092</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800/50">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Revlane. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button
              onClick={scrollToTop}
              className="bg-zinc-900 p-2 rounded-full border border-zinc-800 hover:border-zinc-700 transition-all duration-200 hover:translate-y-[-2px]"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
