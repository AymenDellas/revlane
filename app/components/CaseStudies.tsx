"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeader";
import { motion } from "motion/react";

const CaseStudiesSection = () => {
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
      company: "LeadSurge",
      offer: "AI-written cold emails that sound human",
      hook: "+34% reply rate in 14 days using icebreakers tailored to each lead",
      focus:
        "Replaced generic cold outreach with personalized, scalable messaging",
      result: "247 meetings booked, reply rate increased from 2.1% → 2.8%",
      liveLink: "https://aicoldemails.vercel.app/",
    },
    {
      id: 2,
      company: "LeadZen",
      offer: "Buyer-intent scoring for B2B outbound campaigns",
      hook: "3x pipeline growth without increasing ad spend",
      focus: "Prioritized high-intent leads using behavioral data and triggers",
      result: "0.7% → 2.1% demo-booking rate, 48% lower cost-per-lead",
      liveLink: "leadzen-three.vercel.app",
    },
    {
      id: 3,
      company: "SyncroIQ",
      offer: "No-code product analytics for early-stage SaaS",
      hook: "20% higher retention without complex dashboards",
      focus: "Helped product teams identify what drives user activation",
      result: "+27% trial-to-paid conversions in 3 weeks",
      liveLink: "synchroiq.vercel.app",
    },
  ];

  return (
    <section id="case_studies" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="text-center mb-20"
      >
        <SectionHeading
          title="Real Results. Real Growth."
          subtitle="See how we transformed conversion rates for innovative startups"
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        {caseStudies.map((study) => (
          <motion.div
            key={study.id}
            variants={item}
            className="bg-white rounded-2xl border-2 border-surface overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ y: -10 }}
          >
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold font-playfair mb-4 group-hover:text-primary transition-colors">
                {study.company}
              </h3>

              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Offer
                  </h4>
                  <p className="text-dark">{study.offer}</p>
                </div>

                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Hook
                  </h4>
                  <p className="text-dark">{study.hook}</p>
                </div>

                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Focus
                  </h4>
                  <p className="text-dark">{study.focus}</p>
                </div>

                <div className="bg-surface rounded-xl p-4 border border-surface-variant mt-4">
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Result
                  </h4>
                  <p className="text-dark font-semibold">{study.result}</p>
                </div>
              </div>

              <a
                href={study.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 group flex items-center justify-between text-primary font-semibold border-t border-surface pt-4"
              >
                <span>Visit live site</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 relative overflow-hidden border border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Ready to Be Our Next{" "}
              <span className="text-primary">Success Story?</span>
            </h3>
            <p className="text-xl text-zinc-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join these companies and transform your conversion rates.
            </p>

            <button className="group px-10 py-5 bg-primary hover:bg-primary/90 text-white font-bold text-xl rounded-xl shadow-2xl transition-all duration-300 cursor-pointer flex items-center space-x-3 mx-auto">
              <span>Get My Free Landing Page Audit</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex flex-wrap justify-center gap-4 mt-8 text-zinc-600">
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
