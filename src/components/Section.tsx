import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="container py-24 max-w-6xl mx-auto px-6">
      <h2 className="flex items-center gap-4 uppercase text-2xl text-primary font-bold">
        <span className="h-px w-12 bg-primary"></span>
        {title}
      </h2>
      <div className="mt-12">{children}</div>
    </section>
  );
};

export default Section;
