import React from "react";

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="relative w-[90%] lg:w-[60%] mx-auto text-center mb-16">
      <div className="flex items-center justify-center mb-3">
        <div className="h-1 w-6 bg-accent rounded-full"></div>
        <div className="h-1 w-12 bg-accent/30 rounded-full ml-1"></div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

      <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
