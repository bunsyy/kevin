import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-start"
    >
      <div className="max-w-3xl">
        <p className="text-primary font-semibold mb-4 text-lg">
          Hi, my name is
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-accent mb-2">
          Kevin.
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-muted-foreground mb-8">
          I build AI-driven solutions & web apps.
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl mb-12">
          I'm an <span className="text-accent">AI Engineer</span> and{" "}
          <span className="text-accent">Fullstack Developer</span> specializing
          in building high-performance applications with modern technologies.
          Currently working full-time and open to freelance projects.
        </p>
      </div>
    </section>
  );
};

export default Hero;
