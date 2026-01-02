import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-center">
      <div className="glass-card px-8 py-3 flex gap-8 items-center bg-card/30">
        <a
          href="#home"
          className="text-white font-semibold hover:text-primary transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-muted-foreground hover:text-white transition-colors"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-muted-foreground hover:text-white transition-colors"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-muted-foreground hover:text-white transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-muted-foreground hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
