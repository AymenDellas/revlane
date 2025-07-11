import React from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ExternalLink,
  CheckCircle,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Process", href: "#process" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Landing Page Design", href: "#" },
    { name: "Conversion Optimization", href: "#" },
    { name: "A/B Testing", href: "#" },
    { name: "Psychology-Driven Copy", href: "#" },
    { name: "Strategy Consulting", href: "#" },
  ];

  const resources = [
    { name: "Free Landing Page Audit", href: "#", highlight: true },
    { name: "Conversion Guide", href: "#" },
    { name: "Psychology Playbook", href: "#" },
    { name: "ROI Calculator", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Github className="w-5 h-5" />, href: "#", name: "GitHub" },
  ];

  const guarantees = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "30-day guarantee",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Results in 2 weeks",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "No setup fees",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Fast turnaround",
    },
  ];

  return (
    <footer className="bg-zinc-900 text-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-zinc-900 font-bold text-lg">R</span>
                </div>
                <span className="text-2xl font-playfair font-bold">
                  Revlane
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6 font-poppins">
                We design high-converting landing pages that transform your paid
                traffic into qualified demos. Psychology-driven,
                results-focused, and built for ROI.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-poppins font-medium">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Available 9 AM - 6 PM PST
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-poppins font-medium">
                    hello@revlane.com
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Response within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-poppins font-medium">
                    San Francisco, CA
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Serving clients worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-zinc-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.name}
                >
                  <span className="text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-playfair font-bold text-lg mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-zinc-400 hover:text-white transition-colors duration-300 font-poppins"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-playfair font-bold text-lg mb-6">
              Services
            </h4>
            <nav className="space-y-3">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="block text-zinc-400 hover:text-white transition-colors duration-300 font-poppins"
                >
                  {service.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-playfair font-bold text-lg mb-6">
              Resources
            </h4>
            <nav className="space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className={`block transition-colors duration-300 font-poppins ${
                    resource.highlight
                      ? "text-primary hover:text-primary/80 font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {resource.name}
                  {resource.highlight && (
                    <span className="ml-2 text-xs bg-primary text-zinc-900 px-2 py-1 rounded-full">
                      FREE
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-zinc-400 font-poppins text-sm">
            © 2024 Revlane. All rights reserved. Built with conversion in mind.
          </div>

          <div className="flex items-center space-x-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors duration-300 font-poppins text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
