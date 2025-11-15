import { ExternalLink, Github } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import project1 from "../assets/welcomeLisbon.png";
import project2 from "../assets/galleryHub.png";
import project3 from "../assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Welcome to Lisbon",
      description:
        "This is a front-end and desktop-only game created for Ironhack's Web Development Bootcamp module The game was created by a team of two using tools such as HTML, CSS, JavaScript, and Canvas with a focus on creating a game using our knowledge of these technologies.",
      image: project1,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "#",
      demo: "https://ricozzo.github.io/Lisbon-escape/",
    },
    {
      title: "Gallery Hub",
      description:
        "ith a focus on user engagement and functionality, I crafted a captivating gallery-themed platform. Within this environment, individuals have the power to curate, edit, and showcase their collections and items, allowing them to showcase their work in a truly unique and personalized manner.",
      image: project2,
      tags: ["Next.js", "HTML", "MongoDB", "JavaScript", "Bootstrap"],
      github: "https://github.com/jodmadeira/GalleryHub",
      demo: "#",
    },
    {
      title: "Social App",
      description:
        "Aplicação social com feed de posts, stories e sistema de mensagens em tempo real",
      image: project3,
      tags: ["React", "Node.js", "Socket.io"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-foreground animate-fade-up">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[var(--shadow-card)] animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled={project.github === "#"}
                      className={
                        project.github === "#"
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    >
                      <Github className="w-4 h-4 mr-2" />  Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled={project.demo === "#"}
                      className={
                        project.demo === "#"
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
