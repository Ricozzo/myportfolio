import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "../components/ui/button";
import HeroBackground from "../components/HeroBackground";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      <HeroBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70 z-0" />

      <div className="container mx-auto px-4 z-20 text-center animate-fade-in">
        {" "}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl text-foreground/80 font-light animate-fade-up">
            Henrique Ortiz
          </h1>
          <p
            className="text-2xl md:text-4xl text-foreground/80 font-light animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Full stack Web Developer
          </p>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Turning ideas into digital experiences
          </p>

          <div
            className="flex gap-4 justify-center pt-8 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105 hover:shadow-primary-primary-glow"
            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none z-20" // Aumentado z-index
        aria-label="Scroll para próxima seção"
      >
        <ArrowDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
