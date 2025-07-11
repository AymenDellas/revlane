"use client";
import React, { useState } from "react";
import { ArrowRight, Quote, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeader";
import { motion } from "motion/react";

const CaseStudiesSection = () => {
  const [activeStudy, setActiveStudy] = useState(0);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const caseStudies = [
    {
      id: 1,
      clientType: "B2B SaaS",
      company: "TaskFlow Pro",
      industry: "Project Management",
      problem: "1.2% conversion rate, $450 CAC, burning $15K/month on ads",
      fix: "Psychology-driven messaging + streamlined demo flow",
      process:
        "Buyer research → Pain mapping → Conversion wireframes → A/B testing",
      result: "+340% conversions, -52% CAC in 21 days",
      testimonial:
        "Revlane transformed our funnel psychology. We went from burning $15K/month to booking 3x more qualified demos with the same budget.",
      author: "Sarah Chen",
      role: "VP of Growth",
      metrics: {
        before: "1.2%",
        after: "5.3%",
        improvement: "+340%",
        cac: "-52%",
        timeframe: "21 days",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      clientType: "E-commerce",
      company: "NutriBox",
      industry: "Health & Wellness",
      problem:
        "89% cart abandonment, low subscription signups despite high traffic",
      fix: "Trust signals + simplified checkout + urgency psychology",
      process:
        "Conversion audit → Trust optimization → Checkout redesign → Social proof",
      result: "+280% subscriptions, -41% CAC in 18 days",
      testimonial:
        "The new page feels premium and trustworthy. Our subscription rate nearly tripled, and customer quality improved dramatically.",
      author: "Marcus Rodriguez",
      role: "Founder & CEO",
      metrics: {
        before: "2.1%",
        after: "7.9%",
        improvement: "+280%",
        cac: "-41%",
        timeframe: "18 days",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      clientType: "FinTech",
      company: "SecureBank Pro",
      industry: "Financial Services",
      problem: "0.8% account opening rate, complex messaging causing confusion",
      fix: "Simplified value prop + security focus + progressive disclosure",
      process:
        "Clarity audit → Security positioning → Progressive flow → Trust optimization",
      result: "+425% account openings, -63% CAC in 25 days",
      testimonial:
        "Revlane made our complex solution feel simple and secure. The clarity was exactly what our B2B prospects needed.",
      author: "Jennifer Park",
      role: "Head of Marketing",
      metrics: {
        before: "0.8%",
        after: "4.2%",
        improvement: "+425%",
        cac: "-63%",
        timeframe: "25 days",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="text-center mb-20"
      >
        <SectionHeading
          title="Real Projects. Real Impact."
          subtitle="A look at how we redesigned SaaS pages for clarity and confidence."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex overflow-x-auto pb-2 mb-10 scrollbar-hide"
      >
        <div className="flex space-x-2 bg-surface-variant rounded-xl p-1 min-w-max">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveStudy(index)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                activeStudy === index
                  ? "bg-primary text-white shadow"
                  : "text-dark hover:bg-surface"
              }`}
            >
              {study.company}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="mb-16">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={activeStudy === index ? "active" : "inactive"}
            variants={{
              active: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
              inactive: {
                opacity: 0,
                scale: 0.95,
                transition: { duration: 0.3 },
              },
            }}
            style={{ display: activeStudy === index ? "block" : "none" }}
          >
            <div className="bg-background rounded-3xl border-2 border-surface overflow-hidden shadow-2xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-4 p-12 bg-gradient-to-br from-primary to-secondary text-background relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <motion.div variants={item} className="text-center mb-8">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        {study.icon}
                      </div>
                      <div className="text-sm font-semibold uppercase tracking-wide opacity-90 mb-2">
                        {study.clientType}
                      </div>
                      <h3 className="text-2xl font-bold mb-1">
                        {study.company}
                      </h3>
                      <p className="text-sm opacity-80">{study.industry}</p>
                    </motion.div>

                    <motion.div variants={item} className="text-center mb-4">
                      <div className="text-5xl font-bold mb-1">
                        {study.metrics.improvement}
                      </div>
                      <div className="text-sm uppercase tracking-wider opacity-80">
                        Conversion Increase
                      </div>
                    </motion.div>

                    <motion.div
                      variants={item}
                      className="grid grid-cols-2 gap-4 mb-8"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold opacity-70 mb-1">
                          {study.metrics.before}
                        </div>
                        <div className="text-xs opacity-70">Before</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">
                          {study.metrics.after}
                        </div>
                        <div className="text-xs opacity-70">After</div>
                      </div>
                    </motion.div>

                    <motion.div variants={item} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm opacity-90">
                          CAC Reduction
                        </span>
                        <span className="font-bold">{study.metrics.cac}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm opacity-90">
                          Time to Results
                        </span>
                        <span className="font-bold">
                          {study.metrics.timeframe}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="lg:col-span-8 p-12">
                  <div className="h-full flex flex-col justify-center">
                    <motion.div
                      variants={item}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
                    >
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-lg text-dark mb-3 flex items-center">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            </div>
                            The Challenge
                          </h4>
                          <p className="text-dark leading-relaxed">
                            {study.problem}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-lg text-dark mb-3 flex items-center">
                            <div className="w-6 h-6 bg-surface rounded-full flex items-center justify-center mr-3">
                              <div className="w-3 h-3 bg-secondary rounded-full"></div>
                            </div>
                            Our Solution
                          </h4>
                          <p className="text-dark leading-relaxed">
                            {study.fix}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-lg text-dark mb-3 flex items-center">
                            <div className="w-6 h-6 bg-surface rounded-full flex items-center justify-center mr-3">
                              <div className="w-3 h-3 bg-primary rounded-full"></div>
                            </div>
                            The Process
                          </h4>
                          <p className="text-dark leading-relaxed">
                            {study.process}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-lg text-dark mb-3 flex items-center">
                            <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                            The Results
                          </h4>
                          <p className="text-dark font-semibold text-lg">
                            {study.result}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={item}
                      className="bg-surface rounded-2xl p-8 border border-surface-variant relative"
                    >
                      <div className="absolute top-6 right-6 text-primary opacity-30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <p className="text-lg text-dark mb-6 leading-relaxed italic">
                          "{study.testimonial}"
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-background">
                            {study.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <div className="font-semibold text-dark">
                              {study.author}
                            </div>
                            <div className="text-sm text-primary">
                              {study.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="bg-dark rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-emerald-500/20 opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Be Our Next{" "}
              <span className="text-primary">Success Story?</span>
            </h3>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join these companies and transform your landing page into a
              conversion machine.
            </p>

            <button className="group px-10 py-5 bg-primary hover:bg-primary/90 text-white font-bold text-xl rounded-xl shadow-2xl transition-all duration-300 cursor-pointer flex items-center space-x-3 mx-auto">
              <span>Get My Free Landing Page Audit</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex flex-wrap justify-center gap-4 mt-8 text-zinc-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No commitment required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>30-minute audit call</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Actionable insights</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudiesSection;
