"use client";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { ChevronDown, ChevronUp } from "lucide-react";

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
        "Pricing starts at $997. After the discovery call, I'll give you a detailed quote based on your needs and goals.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes—one full revision round is included. I want to make sure you're 100% satisfied.",
    },
    {
      question: "What happens after the page is launched?",
      answer:
        "You'll get all the source files, hosting instructions (or I can help if needed), and I offer optional post-launch support if you want continued help.",
    },
    {
      question: "How do I pay?",
      answer:
        "Once we agree on the proposal, you'll pay 50% upfront and 50% once the final version is approved. I accept payments via PayPal, Stripe, and bank transfer.",
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
    <section id="faq" className="lg:w-[60%] w-[90%] mx-auto my-20">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Learn more about our approach, pricing, timelines, and how we deliver landing pages that convert."
      />
      <div className="space-y-4">
        {faqs.map((faq, i) => {
          return (
            <div
              onClick={() => toggleFaq(i)}
              className="border border-subtle/20 rounded-lg p-4 bg-black/10 hover:bg-black/30 space-y-4 cursor-pointer ease-out duration-300"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold">{faq.question}</p>{" "}
                {activeIndex === i ? <ChevronUp /> : <ChevronDown />}
              </div>
              {activeIndex === i && <span>{faq.answer}</span>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
