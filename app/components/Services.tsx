import React from "react";
import { Target, Zap, BarChart } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Services = () => {
  const services = [
    {
      title: "Custom Landing Pages",
      description:
        "We build landing pages tailored to your offer, not cookie-cutter templates.",
      icon: Target,
      gradient: "from-purple-500 to-indigo-600",
      points: [
        "Designed around your goal (leads, sales, signups)",
        "Clean, responsive, and focused on user flow",
        "Just what makes people click",
      ],
    },
    {
      title: "Blazing-Fast Performance",
      description:
        "Speed isn't optional. We build pages that load under 2s without bloated junk.",
      icon: Zap,
      gradient: "from-blue-500 to-sky-400",
      points: [
        "Code minification, lazy loading, and smart caching",
        "Optimized images and no unnecessary scripts",
        "Scores 90+ on performance tests like PageSpeed",
      ],
    },
    {
      title: "Conversion Tracking & Analytics",
      description:
        "Know what's working. We track key events and behaviors to fuel better results.",
      icon: BarChart,
      gradient: "from-emerald-500 to-teal-400",
      points: [
        "GA4 integration with custom event tracking",
        "Heatmaps, scroll tracking, and session replays",
        "Optional Meta Pixel and dashboard setup",
      ],
    },
  ];

  return (
    <section id="services" className="my-20">
      <SectionHeader
        title="Our Services"
        subtitle="Conversion-focused solutions that transform clicks into customers"
      />
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="bg-zinc-950 rounded-lg p-6 border border-zinc-800 w-full max-w-sm relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  backgroundPosition: "0 0",
                }}
              />
              <span
                className={`absolute w-80 h-80  blur-3xl opacity-10 -top-10 -right-10 bg-gradient-to-br ${service.gradient}`}
              ></span>
              <div className="flex flex-col items-center space-y-4 relative z-10">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-center">
                  {service.title}
                </h2>
                <p className="text-zinc-400 text-center text-sm">
                  {service.description}
                </p>
                <ul className="text-sm space-y-2 w-full">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                      <p className="text-zinc-300">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
