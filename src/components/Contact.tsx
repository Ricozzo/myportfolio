import { ArrowDown } from "lucide-react";
import { Button } from "../components/ui/button";
import heroBg from "../assets/hero-bg.jpg"
import React from "react";


const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 0, 30, 0.8), rgba(10, 0, 30, 0.9)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-primary animate-fade-up">
            Henrique
          </h1>
          <p className="text-2xl md:text-4xl text-foreground/80 font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Web Developer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Transformando ideias em experiências digitais incríveis
          </p>
          
          <div className="flex gap-4 justify-center pt-8 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={() => scrollToSection("projetos")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)]"
            >
              Ver Projetos
            </Button>
            <Button 
              onClick={() => scrollToSection("contato")}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none"
        aria-label="Scroll para próxima seção"
      >
        <ArrowDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
