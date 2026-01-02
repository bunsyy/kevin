import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function App() {
  const projects = [
    {
      title: "AI Agent Framework",
      description:
        "A specialized framework for building agentic AI applications with multi-tool capabilities.",
      tags: ["Python", "OpenAI", "LangChain"],
      link: "#",
    },
    {
      title: "Neural Vision API",
      description:
        "High-performance computer vision API for real-time object detection and classification.",
      tags: ["PyTorch", "FastAPI", "Docker"],
      link: "#",
    },
    {
      title: "Smart Analytics Dashboard",
      description:
        "A fullstack analytics platform with predictive modeling and interactive visualizations.",
      tags: ["React", "TypeScript", "Node.js", "D3.js"],
      link: "#",
    },
  ];

  const skills = [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "React / Next.js",
    "TypeScript",
    "Node.js",
    "Python (FastAPI / Flask)",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS / GCP",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      <main className="container mx-auto px-6">
        <Hero />

        <Section id="about" title="About Me">
          <div className="glass-card p-8 group hover:border-primary/30 transition-colors bg-card/10">
            <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-white transition-colors">
              I am a passionate{" "}
              <span className="text-white font-medium">AI Engineer</span> and{" "}
              <span className="text-white font-medium">
                Fullstack Developer
              </span>{" "}
              with a drive for creating intelligent and scalable solutions. With
              a background in both deep learning architectures and modern web
              ecosystems, I bridge the gap between complex AI models and
              user-friendly interfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 group-hover:text-white transition-colors">
              Currently, I'm focused on developing agentic workflows and
              large-scale fullstack applications that leverage the latest in
              generative AI.
            </p>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="glass-card p-4 text-center text-sm border-white/5 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 bg-card/20"
              >
                {skill}
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Featured Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Get In Touch">
          <Card className="glass-card p-12 text-center max-w-2xl mx-auto bg-card/30 border-white/5 hover:border-primary/30 transition-colors">
            <h3 className="text-3xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-10 text-lg">
              I'm currently open to freelance opportunities and interesting
              collaborations.
            </p>
            <Button size="lg" className="rounded-full px-10 text-lg" asChild>
              <a href="mailto:hello@kevin.dev">Say Hello</a>
            </Button>
          </Card>
        </Section>
      </main>

      <footer className="py-16 text-center text-muted-foreground text-sm border-t border-white/5 mt-20">
        <p>
          © {new Date().getFullYear()} Kevin. Built with React, Vite, Tailwind &
          Shadcn UI.
        </p>
      </footer>
    </div>
  );
}

export default App;
