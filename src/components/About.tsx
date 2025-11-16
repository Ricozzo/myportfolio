import { Code2, Rocket, Sparkles } from "lucide-react";
import React from "react";
import HenriquePhoto from "../assets/henriquePhoto.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean code",
    },
    {
      icon: Rocket,
      title: "High performance",
    },
    {
      icon: Sparkles,
      title: "UI/UX",
    },
  ];

  const imageSize = "w-60 h-60";

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 bg-clip-text text-foreground animate-fade-up">
          Who am I?
        </h2>
        <div
          className="absolute hidden md:block z-10"
          style={{
            top: "350px",
            right: "0",
          }}
        >
          <div
            className={`relative ${imageSize} rounded-full overflow-hidden border-4 border-primary/50 shadow-xl`}
          >
            <img
              src={HenriquePhoto}
              alt="Henrique"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-1 gap-12 items-start pt-24 md:pt-0">
          <div className="space-y-5 animate-fade-up">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div
            className="space-y-12 animate-fade-up pt-12"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-card)]"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm"></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
