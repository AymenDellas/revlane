"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What's included in your landing page service?",
      answer:
        "You get a custom-designed, high-converting landing page, fully responsive across devices, optimized for speed, and built to match your brand. It includes copywriting support, basic animations, and essential integrations (e.g., form, CTA, analytics).",
    },
    {
      question: "How long will it take to finish my landing page?",
      answer:
        "Usually between 5–10 days from the discovery call, depending on the project's complexity and how quickly you provide feedback.",
    },
    {
      question: "What do you need from me to get started?",
      answer:
        "Just fill out the Google Form on the contact section. I'll take it from there and reach out to schedule the discovery call.",
    },
    {
      question: "How much do you charge?",
      answer:
        "Pricing starts at $1997. After the discovery call, I'll give you a detailed quote based on your needs and goals.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes—two full revision round is included. I want to make sure you're 100% satisfied.",
    },
    {
      question: "What happens after the page is launched?",
      answer:
        "You'll get all the source files, hosting instructions (or I can help if needed), and I offer optional post-launch support if you want continued help.",
    },
    {
      question: "How do I pay?",
      answer:
        "Once we agree on the proposal, you'll pay 50% upfront and 50% once the final version is approved. I accept payments via PayPal.",
    },
    {
      question: "Do you handle hosting and domain setup?",
      answer:
        "If needed, yes. I can guide you through choosing a host and registering a domain, or take care of it entirely for an additional fee.",
    },
  ];

  const toggleFaq = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="relative lg:w-[60%] w-[90%] mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Learn more about our approach, pricing, timelines, and how we deliver landing pages that convert."
        />
      </motion.div>

      <div className="space-y-2">
        {faqs.map((faq, i) => {
          const isActive = activeIndex === i;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              key={i}
              className={`group border border-white/5 rounded-xl overflow-hidden transition-all duration-500 ease-out hover:border-white/10 ${
                isActive
                  ? "bg-white/[0.02] border-white/10 shadow-2xl shadow-black/20"
                  : "bg-black/20 hover:bg-white/[0.01]"
              }`}
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full p-6 md:p-8 text-left transition-all duration-300 ease-out"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`text-lg md:text-xl font-semibold leading-tight transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-200 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-500 ease-out ${
                      isActive ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <div
                      className={`w-4 h-0.5 bg-current transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    />
                    <div
                      className={`absolute w-0.5 h-4 bg-current transition-all duration-500 ease-out ${
                        isActive
                          ? "text-white opacity-0 rotate-90"
                          : "text-gray-400 group-hover:text-white opacity-100 rotate-0"
                      }`}
                    />
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div
                    className={`w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6 transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <p
                    className={`text-gray-300 leading-relaxed transition-all duration-500 delay-100 ${
                      isActive
                        ? "transform translate-y-0 opacity-100"
                        : "transform translate-y-2 opacity-0"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
