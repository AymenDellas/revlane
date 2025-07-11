"use client";
import React, { useState } from "react";
import { X, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";

const FullscreenNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const menuItems = [
    { title: "Process", subtitle: "How we transform your funnel" },
    { title: "Case Studies", subtitle: "Real results from real clients" },
    { title: "About", subtitle: "Meet the conversion experts" },
    { title: "Pricing", subtitle: "Transparent, results-based pricing" },
  ];

  return (
    <>
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={toggleMenu}
        className="fixed top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-xl shadow-lg border border-zinc-200 rounded-full transition-all z-50 hover:scale-105 group"
        style={{
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1) inset",
        }}
      >
        {isMenuOpen ? (
          <X className="w-5 h-5 text-zinc-700 mx-auto" />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-zinc-800 rounded-full transform transition-all duration-300 group-hover:w-7 group-hover:bg-zinc-900"></div>
              <div className="w-4 h-0.5 bg-zinc-600 rounded-full transform transition-all duration-300 delay-75 group-hover:w-7 group-hover:bg-zinc-900"></div>
              <div className="w-5 h-0.5 bg-zinc-700 rounded-full transform transition-all duration-300 delay-150 group-hover:w-7 group-hover:bg-zinc-900"></div>
            </div>
          </div>
        )}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, visibility: "visible" },
          closed: { opacity: 0, visibility: "hidden" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 bg-zinc-900 z-40"
        style={{ overflowY: "hidden" }}
      >
        <div className="flex h-full">
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16">
            <div className="space-y-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={
                    isMenuOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                  }
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <a
                    href="#"
                    className="group block py-5 transition-colors"
                    onClick={toggleMenu}
                  >
                    <div className="flex items-center space-x-4 py-4 border-b border-zinc-800 group-hover:border-primary transition-all duration-300">
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-zinc-400 text-lg mt-2 group-hover:text-zinc-300 transition-colors duration-300">
                          {item.subtitle}
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={
                isMenuOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
              }
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mt-12"
            >
              <button
                onClick={toggleMenu}
                className="group px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
              >
                <span>Book Your Strategy Call</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <div className="hidden lg:flex flex-col justify-center px-16 bg-zinc-800/90 backdrop-blur-md min-w-96">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={
                isMenuOpen ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
              }
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-xl font-bold text-white mb-6">
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-zinc-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-zinc-300">hello@revlane.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-zinc-300">San Francisco, CA</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Why Choose Revlane?
                </h4>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>40% lower CAC in 30 days</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Psychology-backed design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>No payment until results</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FullscreenNavbar;
