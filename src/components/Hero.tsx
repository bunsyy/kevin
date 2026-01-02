import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

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
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-2">
          Kevin.
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-muted-foreground mb-8">
          I build AI-driven solutions & web apps.
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl mb-12">
          I'm an <span className="text-white">AI Engineer</span> and{" "}
          <span className="text-white">Fullstack Developer</span> specializing
          in building high-performance applications with modern technologies.
          Currently working full-time and open to freelance projects.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="#projects">
              View My Work <MoveRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
