"use client";
import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import {
  FileText,
  Phone,
  FileEdit,
  CreditCard,
  Palette,
  PenTool,
  Rocket,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto-scrolling effect when on mobile
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const element = document.getElementById(`step-${activeStep}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [activeStep]);

  const processSteps = [
    {
      title: "Fill Out the Quick Questionnaire",
      description:
        "Before anything starts, you'll complete a form to help us understand your business, target audience, goals, and what you expect from the landing page. This information helps set clear expectations and ensures we're aligned from the start.",
      icon: FileText,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Book a Discovery Call",
      description:
        "Once we receive your form, We'll get back to you with a scheduling link. We'll hop on a quick 30-45 minute call to dig deeper into your answers, align on expectations, and establish a solid foundation for our project partnership.",
      icon: Phone,
      color: "from-blue-500 to-sky-400",
    },
    {
      title: "Receive a Custom Proposal & Contract",
      description:
        "After our call, We'll send a proposal tailored to your specific needs. It includes the project scope, timeline, pricing, and deliverables. The contract clearly defines revision policies, payment terms, and can be signed electronically for convenience.",
      icon: FileEdit,
      color: "from-emerald-500 to-teal-400",
    },
    {
      title: "50% Upfront Payment",
      description:
        "To secure your spot in our project queue and kickstart the work, a 50% upfront payment is required. This makes our partnership official and allows us to set up project management tools to keep everything organized and transparent throughout.",
      icon: CreditCard,
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "Design & Development",
      description:
        "We'll design concepts based on your brand and objectives, followed by development with clean, optimized code ensuring fast loading times. You'll receive regular updates throughout this phase so you're always informed on progress.",
      icon: Palette,
      color: "from-amber-500 to-orange-400",
    },
    {
      title: "Revisions & Final Edits",
      description:
        "You'll review the draft landing page and provide any feedback for revisions. We'll implement your requested changes. This collaborative refinement process ensures the final result matches your vision perfectly.",
      icon: PenTool,
      color: "from-red-500 to-rose-400",
    },
    {
      title: "Launch & Support",
      description:
        "After final payment, We'll deploy your landing page to your hosting environment. You'll receive comprehensive documentation and technical support for 14 days post-launch, with optional maintenance services available if you need ongoing assistance.",
      icon: Rocket,
      color: "from-green-500 to-emerald-400",
    },
  ];

  const handleStepChange = (direction: string) => {
    setAnimating(true);

    if (direction === "next") {
      setActiveStep(Math.min(processSteps.length - 1, activeStep + 1));
    } else {
      setActiveStep(Math.max(0, activeStep - 1));
    }

    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <section id="process" className="relative w-[92%] lg:w-[80%] mx-auto my-24">
      {/* Background effects */}
      <div className="absolute h-full w-full right-0 rounded-full bg-gradient-to-r from-accent via-accent to-pink-700 -z-10 opacity-10 blur-3xl" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />

      <SectionHeader
        title="Our Process"
        subtitle="From initial discovery to final delivery, our step-by-step process ensures clarity, quality, and results—without unnecessary delays."
      />

      <div className="relative flex flex-col lg:flex-row gap-10">
        {/* Process Timeline Navigation */}
        <div className="lg:w-1/3 relative">
          <div className="sticky top-8 space-y-1">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const isComplete = i < activeStep;
              const isActive = activeStep === i;

              return (
                <div
                  id={`step-${i}`}
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer group
                    ${
                      isActive
                        ? "bg-black/40 backdrop-blur-lg border border-subtle/40 shadow-lg shadow-accent/10"
                        : "hover:bg-black/20 border border-transparent"
                    }`}
                >
                  <div className={`relative flex items-center justify-center`}>
                    <div
                      className={`absolute inset-0 rounded-full opacity-${
                        isActive ? "30" : "20"
                      } bg-gradient-to-br ${step.color}`}
                    />
                    <div
                      className={`flex items-center justify-center h-9 w-9 rounded-full ${
                        isComplete
                          ? `bg-gradient-to-br ${step.color} text-white`
                          : isActive
                          ? "bg-black/70 ring-2 ring-accent"
                          : "bg-black/50"
                      } z-10 transition-all duration-300`}
                    >
                      {isComplete ? (
                        <Check size={16} className="text-white" />
                      ) : (
                        <span className="text-white font-bold text-sm">
                          {i + 1}
                        </span>
                      )}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div
                        className={`absolute w-0.5 h-14 top-9 left-4 -ml-px bg-gradient-to-b transition-all duration-500 ${
                          i < activeStep
                            ? `${step.color} opacity-70`
                            : "from-zinc-700 to-zinc-800"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`font-medium transition-colors ${
                        isActive
                          ? "text-white"
                          : isComplete
                          ? "text-zinc-200"
                          : "text-zinc-400"
                      } group-hover:text-zinc-200`}
                    >
                      {step.title}
                    </span>
                    <span
                      className={`text-xs text-zinc-500 transition-all duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 lg:group-hover:opacity-100"
                      }`}
                    >
                      {isComplete
                        ? "Completed"
                        : isActive
                        ? "Current step"
                        : "Coming up"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Details Panel */}
        <div className="lg:w-2/3">
          <div
            className={`bg-black/20 backdrop-blur-lg border border-subtle/40 rounded-xl p-8 relative overflow-hidden shadow-xl transition-opacity duration-300 ${
              animating ? "opacity-50" : "opacity-100"
            }`}
          >
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-20 -z-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                backgroundPosition: "0 0",
              }}
            />

            {/* Glowing accent dots */}
            <div className="absolute top-0 right-0 h-24 w-24 bg-accent opacity-10 rounded-full blur-2xl -mr-6 -mt-6"></div>
            <div className="absolute bottom-0 left-0 h-16 w-16 bg-accent opacity-10 rounded-full blur-2xl -ml-4 -mb-4"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`text-white bg-gradient-to-br ${processSteps[activeStep].color} p-3 rounded-lg shadow-lg`}
                >
                  {React.createElement(processSteps[activeStep].icon, {
                    size: 24,
                  })}
                </div>
                <h3 className="text-2xl font-bold">
                  Step {activeStep + 1}: {processSteps[activeStep].title}
                </h3>
              </div>

              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                {processSteps[activeStep].description}
              </p>

              {/* Progress indicator */}
              <div className="mb-8 mt-10">
                <div className="flex justify-between mb-2 text-xs text-zinc-500">
                  <span>
                    Step {activeStep + 1} of {processSteps.length}
                  </span>
                  <span>
                    {Math.round((activeStep / (processSteps.length - 1)) * 100)}
                    % Complete
                  </span>
                </div>
                <div className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${processSteps[activeStep].color} transition-all duration-700 ease-out`}
                    style={{
                      width: `${
                        (activeStep / (processSteps.length - 1)) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => handleStepChange("prev")}
                  disabled={activeStep === 0}
                  className={`px-4 py-2 rounded-lg border border-subtle/40 transition-colors flex items-center gap-2 ${
                    activeStep === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-black/40"
                  }`}
                >
                  <ArrowLeft size={16} />
                  Previous Step
                </button>
                <button
                  onClick={() => handleStepChange("next")}
                  disabled={activeStep === processSteps.length - 1}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                    activeStep === processSteps.length - 1
                      ? "opacity-50 cursor-not-allowed bg-accent/60"
                      : "bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/30"
                  }`}
                >
                  Next Step
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
