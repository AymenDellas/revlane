"use client";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import {
  FileText,
  Phone,
  FileEdit,
  CreditCard,
  Palette,
  PenTool,
  Rocket,
} from "lucide-react";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: "Fill Out the Quick Questionnaire",
      description:
        "Before anything starts, you'll complete a short form to help me understand your business, target audience, goals, and what you expect from the landing page.",
      icon: FileText,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Book a Discovery Call",
      description:
        "Once I receive your form, I'll get back to you with a scheduling link. We'll hop on a quick call to dig deeper into your answers, align on expectations, and confirm we're a good fit.",
      icon: Phone,
      color: "from-blue-500 to-sky-400",
    },
    {
      title: "Receive a Custom Proposal & Contract",
      description:
        "After the call, I'll send a proposal tailored to your needs. It'll include the project scope, timeline, pricing, and terms. Once we agree, I'll send over a contract for you to review and sign.",
      icon: FileEdit,
      color: "from-emerald-500 to-teal-400",
    },
    {
      title: "50% Upfront Payment to Kick Things Off",
      description:
        "To secure your spot and start the work, a 50% upfront payment is required. This makes things official and allows me to begin designing.",
      icon: CreditCard,
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "Design & Development",
      description:
        "I'll create a high-converting landing page, optimized for performance and conversions. You'll receive regular updates, and I'll make sure you're involved throughout.",
      icon: Palette,
      color: "from-amber-500 to-orange-400",
    },
    {
      title: "Revisions & Final Edits",
      description:
        "You'll get to review the draft and request any revisions. My goal is to make sure the final result matches your vision and works effectively for your audience.",
      icon: PenTool,
      color: "from-red-500 to-rose-400",
    },
    {
      title: "Launch",
      description:
        "Once you're happy, we go live. I'll ensure everything's working perfectly and that your landing page is optimized for speed and responsiveness.",
      icon: Rocket,
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <section id="process" className="relative w-[90%] lg:w-[70%] mx-auto my-20">
      <span className="absolute h-full w-full right-0 rounded-full bg-gradient-to-r from-accent via-accent to-pink-700 -z-10 opacity-10 blur-3xl" />

      <SectionHeader
        title="Our Process"
        subtitle="A streamlined approach to building your high-converting landing page"
      />

      <div className="relative flex flex-col lg:flex-row gap-8">
        {/* Process Timeline Navigation */}
        <div className="lg:w-1/3 relative">
          <div className="sticky top-8 space-y-1">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 cursor-pointer
                    ${
                      activeStep === i
                        ? "bg-black/40 backdrop-blur-lg border border-subtle/40"
                        : "hover:bg-black/20 border border-transparent"
                    }`}
                >
                  <div className={`relative flex items-center justify-center`}>
                    <div
                      className={`absolute inset-0 rounded-full opacity-20 bg-gradient-to-br ${step.color}`}
                    />
                    <div
                      className={`flex items-center justify-center h-8 w-8 rounded-full bg-black/50 z-10`}
                    >
                      <span className="text-white font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div
                        className={`absolute w-0.5 h-12 top-8 left-4 -ml-px bg-gradient-to-b ${
                          i < activeStep
                            ? "from-accent to-subtle/30"
                            : "from-zinc-700 to-zinc-800"
                        }`}
                      />
                    )}
                  </div>
                  <span
                    className={`font-medium transition-colors ${
                      activeStep === i ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Details Panel */}
        <div className="lg:w-2/3">
          <div className="bg-black/20 backdrop-blur-lg border border-subtle/40 rounded-lg p-8 relative overflow-hidden">
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                backgroundPosition: "0 0",
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`text-white bg-gradient-to-br ${processSteps[activeStep].color} p-3 rounded-lg`}
                >
                  {React.createElement(processSteps[activeStep].icon, {
                    size: 24,
                  })}
                </div>
                <h3 className="text-2xl font-bold">
                  Step {activeStep + 1}: {processSteps[activeStep].title}
                </h3>
              </div>

              <p className="text-lg text-zinc-300 mb-8">
                {processSteps[activeStep].description}
              </p>

              <div className="bg-black/30 border border-subtle/20 rounded-lg p-4 mb-8">
                <h4 className="font-bold mb-4 text-lg text-accent">
                  Highlights
                </h4>
                <ul className="space-y-3">
                  {activeStep === 0 && (
                    <>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          Complete our brief online questionnaire to help us
                          understand your business needs
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          We'll analyze your responses and research your market
                          to prepare for our discovery call
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          This questionnaire helps set clear expectations and
                          ensures we're aligned from the start
                        </p>
                      </li>
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          Select a convenient time from our calendar for a 30-45
                          minute discussion
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          We'll dive deeper into your goals, target audience,
                          and specific requirements
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          This call helps establish the foundation for a
                          successful project partnership
                        </p>
                      </li>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          Review our comprehensive proposal outlining project
                          scope, timeline, and pricing
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          The contract clearly defines deliverables, revision
                          policies, and payment terms
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          Electronic signing makes this process quick and
                          convenient for both parties
                        </p>
                      </li>
                    </>
                  )}
                  {activeStep === 3 && (
                    <>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          Process the 50% deposit payment through your preferred
                          payment method
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          This payment secures your spot in our project queue
                          and initiates the work
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          We'll set up project management tools to keep
                          everything organized and transparent
                        </p>
                      </li>
                    </>
                  )}
                  {activeStep === 4 && (
                    <>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          We create wireframes and design concepts based on your
                          brand and objectives
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          Development follows with clean, optimized code that
                          ensures fast loading times
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          You'll receive regular updates throughout this phase
                          to stay informed
                        </p>
                      </li>
                    </>
                  )}
                  {activeStep === 5 && (
                    <>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          Review the draft landing page and provide any feedback
                          for revisions
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          We'll implement your requested changes and perform
                          quality assurance testing
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          This collaborative refinement ensures the final result
                          matches your vision perfectly
                        </p>
                      </li>
                    </>
                  )}
                  {activeStep === 6 && (
                    <>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          After final payment, we deploy your landing page to
                          your hosting environment
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          You'll receive comprehensive documentation and
                          technical support for 14 days
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        <p className="text-zinc-300">
                          Optional post-launch services are available if you
                          need ongoing maintenance
                        </p>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className={`px-4 py-2 rounded-lg border border-subtle/40 transition-colors ${
                    activeStep === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-black/40"
                  }`}
                >
                  Previous Step
                </button>
                <button
                  onClick={() =>
                    setActiveStep(
                      Math.min(processSteps.length - 1, activeStep + 1)
                    )
                  }
                  disabled={activeStep === processSteps.length - 1}
                  className={`px-4 py-2 rounded-lg bg-accent hover:bg-accent/90 transition-colors ${
                    activeStep === processSteps.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next Step
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
