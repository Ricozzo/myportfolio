import { Code2, Database, Layout, Server, Palette, GitBranch } from "lucide-react";
import React from "react";

const Skills = () => {
  const skills = [
    { icon: Code2, name: "React & TypeScript", color: "text-primary" },
    { icon: Layout, name: "HTML & CSS", color: "text-secondary" },
    { icon: Palette, name: "Tailwind CSS", color: "text-accent" },
    { icon: Server, name: "Node.js", color: "text-primary" },
    { icon: Database, name: "PostgreSQL", color: "text-secondary" },
    { icon: GitBranch, name: "Git & GitHub", color: "text-accent" },
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold hover:border-primary/50 text-center mb-12 bg-clip-text text-primary-foreground animate-fade-up">
          Skills & Tools
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all hover:scale-110 hover:shadow-[var(--shadow-card)] animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon className={`w-12 h-12 ${skill.color} transition-transform group-hover:animate-float`} />
              <p className="text-sm font-medium text-center text-foreground/80">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
