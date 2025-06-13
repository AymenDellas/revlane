"use client";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { useActiveIndex } from "@/lib/store";
import { motion } from "motion/react";
// TypeScript types
type FormData = {
  fullName: string;
  email: string;
  lookingFor: string;
  website: string;
};

type FormErrors = {
  fullName?: string | null;
  email?: string | null;
  lookingFor?: string | null;
  website?: string | null;
};

type FormTouched = {
  fullName?: boolean;
  email?: boolean;
  lookingFor?: boolean;
  website?: boolean;
};

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    lookingFor: "",
    website: "",
  });

  // Form validation state
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Process steps state
  const processSteps = [
    "Submit the form to get started",
    "Fill out a quick questionnaire before our call",
    "Kickstart meeting to plan your project",
    "50% upfront to begin design & development",
    "Final delivery + optional post-launch tweaks",
  ];

  const { activeIndex, setActiveIndex } = useActiveIndex();
  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  // Handle field blur for validation feedback
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validateField(name, formData[name as keyof FormData]);
  };

  // Validate a single field
  const validateField = (name: string, value: string) => {
    let error: string | null = null;

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          error = "Full name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "lookingFor":
        if (!value.trim()) {
          error = "Please tell us what you're looking for";
        } else if (value.trim().length < 10) {
          error = "Please provide more details (min. 10 characters)";
        }
        break;
      case "website":
        if (
          value.trim() &&
          !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(value)
        ) {
          error = "Please enter a valid URL";
        }
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error === null;
  };

  // Validate main form
  const validateForm = () => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Mark all fields as touched
    const allTouched: FormTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key as keyof FormTouched] = true;
    });
    setTouched(allTouched);

    // Validate required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.lookingFor.trim()) {
      newErrors.lookingFor = "Please tell us what you're looking for";
      isValid = false;
    } else if (formData.lookingFor.trim().length < 10) {
      newErrors.lookingFor = "Please provide more details (min. 10 characters)";
      isValid = false;
    }

    if (
      formData.website.trim() &&
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(
        formData.website
      )
    ) {
      newErrors.website = "Please enter a valid URL";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Validate audit form
  const validateAuditForm = () => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Mark fields as touched
    setTouched((prev) => ({
      ...prev,
      fullName: true,
      email: true,
      website: true,
    }));

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.website.trim()) {
      newErrors.website = "Website URL is required";
      isValid = false;
    } else if (
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(
        formData.website
      )
    ) {
      newErrors.website = "Please enter a valid URL";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle main form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mwpozrww", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          lookingFor: "",
          website: "",
        });
        setErrors({});
        setTouched({});

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle audit form submission
  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAuditForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mbloerol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          website: formData.website,
        }),
      });

      if (response.ok) {
        setAuditSubmitted(true);
        setFormData((prev) => ({
          ...prev,
          website: "",
        }));
        setErrors({});
        setTouched({});

        setTimeout(() => {
          setAuditSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Audit form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-[90%] lg:w-[60%] mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeader
          title="Start Your Project"
          subtitle="Contact us to discuss your project. We'll assess your goals and propose a solution built to perform."
        />
      </motion.div>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative h-full bg-gray-50 rounded-xl overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0",
          }}
        />

        {/* Left column - Contact Info */}
        <div className="relative z-10 p-8 lg:w-2/5 space-y-8">
          <span className="absolute w-36 h-full -rotate-30 rounded-4xl bg-gradient-to-tl bottom-12 right-8 blur-3xl from-subtle from-50% via-accent to-subtle opacity-40" />
          <span className="absolute w-36 h-full -rotate-30 rounded-4xl bg-gradient-to-tl -bottom-72 -left-30 blur-3xl from-subtle via-30% via-accent to-subtle opacity-40" />

          <div className="space-y-6">
            <h2 className="font-bold text-2xl">Contact Information</h2>
            <div className="flex items-center space-x-3">
              <span className="text-accent bg-accent/10 rounded-md p-2">
                <Mail size={20} />
              </span>
              <a
                href="mailto:contact@revlane.tech"
                className="font-medium hover:text-accent transition-colors"
              >
                contact@revlane.tech
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-accent bg-accent/10 rounded-md p-2">
                <Phone size={20} />
              </span>
              <a
                href="tel:+213676366092"
                className="font-medium hover:text-accent transition-colors"
              >
                +213 676366092
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-bold text-xl mb-4">Our Process</h3>
            <ol className="space-y-3">
              {processSteps.map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex items-center justify-center min-w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-gray-600">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="pt-6">
            <p className="text-gray-500 text-sm">
              We typically respond within 24-48 business hours. For urgent
              inquiries, please call the phone number listed above.
            </p>
          </div>
        </div>

        {/* Right column - Form */}
        <div className="relative z-10 p-8 lg:w-3/5 bg-white min-h-[700px]">
          <div className="relative flex items-center space-x-6 mb-8">
            <button
              onClick={() => {
                setActiveIndex(1);
                setFormSubmitted(false);
                setAuditSubmitted(false);
                setErrors({});
              }}
              className={`relative cursor-pointer hover:text-accent transition-all duration-300 ease-out ${
                activeIndex === 1 ? "text-accent font-medium" : ""
              }`}
            >
              Start your project
              {activeIndex === 1 && (
                <span className="absolute w-full left-0 -bottom-2 h-0.5 rounded-full bg-accent" />
              )}
            </button>
            <button
              onClick={() => {
                setActiveIndex(2);
                setFormSubmitted(false);
                setAuditSubmitted(false);
                setErrors({});
              }}
              className={`relative cursor-pointer hover:text-accent transition-all duration-300 ease-out ${
                activeIndex === 2 ? "text-accent font-medium" : ""
              }`}
            >
              Get free audit
              {activeIndex === 2 && (
                <span className="absolute w-full left-0 -bottom-2 h-0.5 rounded-full bg-accent" />
              )}
            </button>
            <span className="absolute w-full h-[1px] -bottom-2 -z-10 bg-gray-200 rounded-full" />
          </div>

          {/* Form success messages */}
          {formSubmitted && activeIndex === 1 && (
            <div className="bg-green-500/10 border border-green-500 text-green-400 rounded-lg p-4 flex items-center space-x-3 mb-6">
              <CheckCircle size={20} />
              <span>
                Thank you! Your message has been sent successfully. We'll be in
                touch soon.
              </span>
            </div>
          )}

          {auditSubmitted && activeIndex === 2 && (
            <div className="bg-green-500/10 border border-green-500 text-green-400 rounded-lg p-4 flex items-center space-x-3 mb-6">
              <CheckCircle size={20} />
              <span>
                Thank you! We'll send your website audit within 2-3 business
                days.
              </span>
            </div>
          )}

          {activeIndex === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-bold text-2xl mb-6">Get in Touch</h2>

              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder-gray-400 ${
                    touched.fullName && errors.fullName
                      ? "border-red-500 focus:ring-red-500"
                      : touched.fullName && !errors.fullName
                      ? "border-green-500 focus:ring-accent"
                      : "border-gray-300 focus:ring-accent"
                  }`}
                  placeholder="John Doe"
                  disabled={submitting}
                />
                {touched.fullName && errors.fullName && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.fullName}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder-gray-400 ${
                    touched.email && errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : touched.email && !errors.email
                      ? "border-green-500 focus:ring-accent"
                      : "border-gray-300 focus:ring-accent"
                  }`}
                  placeholder="you@example.com"
                  disabled={submitting}
                />
                {touched.email && errors.email && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lookingFor"
                  className="block text-sm font-medium text-gray-700"
                >
                  What are you looking for?{" "}
                  <span className="text-accent">*</span>
                </label>
                <textarea
                  rows={4}
                  name="lookingFor"
                  id="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Tell us what you need help with, your goals, or any ideas you have in mind."
                  className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder-gray-400 ${
                    touched.lookingFor && errors.lookingFor
                      ? "border-red-500 focus:ring-red-500"
                      : touched.lookingFor && !errors.lookingFor
                      ? "border-green-500 focus:ring-accent"
                      : "border-gray-300 focus:ring-accent"
                  }`}
                  disabled={submitting}
                ></textarea>
                {touched.lookingFor && errors.lookingFor && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.lookingFor}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website URL <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder-gray-400 ${
                    touched.website && errors.website
                      ? "border-red-500 focus:ring-red-500"
                      : touched.website && !errors.website && formData.website
                      ? "border-green-500 focus:ring-accent"
                      : "border-gray-300 focus:ring-accent"
                  }`}
                  placeholder="https://yourwebsite.com"
                  disabled={submitting}
                />
                {touched.website && errors.website && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.website}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg px-6 py-3 transition-colors duration-200 mt-6 ${
                  submitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span>Sending...</span>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-gray-500 text-xs text-center mt-4">
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
          ) : (
            <form onSubmit={handleAuditSubmit} className="space-y-6">
              <h2 className="font-bold text-2xl mb-6">
                Get Your Free Website Audit
              </h2>
              <p className="text-gray-500 mb-6">
                We'll analyze your website, then send you a detailed report with
                actionable recommendations.
              </p>

              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder-gray-400 ${
                    touched.fullName && errors.fullName
                      ? "border-red-500 focus:ring-red-500"
                      : touched.fullName && !errors.fullName
                      ? "border-green-500 focus:ring-accent"
                      : "border-gray-300 focus:ring-accent"
                  }`}
                  placeholder="John Doe"
                  disabled={submitting}
                />
                {touched.fullName && errors.fullName && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.fullName}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder-gray-400 ${
                    touched.email && errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : touched.email && !errors.email
                      ? "border-green-500 focus:ring-accent"
                      : "border-gray-300 focus:ring-accent"
                  }`}
                  placeholder="you@example.com"
                  disabled={submitting}
                />
                {touched.email && errors.email && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website URL <span className="text-accent">*</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-colors placeholder-gray-400 ${
                    touched.website && errors.website
                      ? "border-red-500 focus:ring-red-500"
                      : touched.website && !errors.website && formData.website
                      ? "border-green-500 focus:ring-accent"
                      : "border-gray-300 focus:ring-accent"
                  }`}
                  placeholder="https://yourwebsite.com"
                  disabled={submitting}
                />
                {touched.website && errors.website && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.website}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg px-6 py-3 transition-colors duration-200 mt-6 ${
                  submitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span>Submitting...</span>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Get Free Audit</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-gray-500 text-sm mt-4">
                You'll receive your custom website audit within 1-3 business
                days. No strings attached.
              </p>
            </form>
          )}
        </div>
      </motion.article>
    </section>
  );
};

export default Contact;
