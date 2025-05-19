"use client";
import { Mail, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    lookingFor: "landing-page",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you shortly.");
    setFormData({
      fullName: "",
      email: "",
      lookingFor: "landing-page",
      website: "",
    });
  };

  const processSteps = [
    "Submit the form to get started",
    "Fill out a quick questionnaire before our call",
    "Kickstart meeting to plan your project",
    "50% upfront to begin design & development",
    "Final delivery + optional post-launch tweaks",
  ];

  return (
    <section id="contact" className=" w-[90%] lg:w-[60%] mx-auto my-20">
      <SectionHeader
        title="Start Your Project"
        subtitle="Ready to boost your conversion rates? Let's collaborate"
      />
      <article className="relative h-full bg-black/80 rounded-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0",
          }}
        />
        {/* Left column - Contact Info */}
        <div className="relative z-10 p-8 lg:w-2/5 space-y-8">
          <span className="absolute w-36 h-full -rotate-30 rounded-4xl bg-gradient-to-tl bottom-12 right-8 blur-3xl from-subtle from-50% via-accent to-subtle opacity-40 " />
          <span className="absolute w-36 h-full -rotate-30 rounded-4xl bg-gradient-to-tl -bottom-72 -left-30 blur-3xl from-subtle via-30% via-accent to-subtle opacity-40 " />
          <div className="space-y-6">
            <h2 className="font-bold text-2xl">Contact Information</h2>

            <div className="flex items-center space-x-3">
              <span className="text-accent bg-accent/10 rounded-md p-2">
                <Mail size={20} />
              </span>
              <span className="font-medium">revlane@gmail.com</span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-accent bg-accent/10 rounded-md p-2">
                <Phone size={20} />
              </span>
              <span className="font-medium">+213 676366092</span>
            </div>
          </div>

          <div className="border-t border-zinc-700 pt-6">
            <h3 className="font-bold text-xl mb-4">Our Process</h3>
            <ol className="space-y-3">
              {processSteps.map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex items-center justify-center min-w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-zinc-300">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="pt-6">
            <p className="text-zinc-400 text-sm">
              We typically respond within 24-48 business hours. For urgent
              inquiries, please call the phone number listed above.
            </p>
          </div>
        </div>

        {/* Right column - Form */}
        <div className="relative z-10 p-8 lg:w-3/5 bg-zinc-950">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="font-bold text-2xl mb-6">Get in Touch</h2>

            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-zinc-300"
              >
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300"
              >
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="lookingFor"
                className="block text-sm font-medium text-zinc-300"
              >
                What are you looking for? <span className="text-accent">*</span>
              </label>
              <textarea
                rows={4}
                name="lookingFor"
                id="lookingFor"
                placeholder="Tell me what you need help with, your goals, or any ideas you have in mind."
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="website"
                className="block text-sm font-medium text-zinc-300"
              >
                Website URL <span className="text-zinc-500">(optional)</span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg px-6 py-3 transition-colors duration-200 mt-6"
            >
              <span>Send Message</span>
              <Send size={16} />
            </button>

            <p className="text-zinc-400 text-xs text-center mt-4">
              By submitting this form, you agree to our{" "}
              <a href="#" className="text-accent hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-accent hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contact;
