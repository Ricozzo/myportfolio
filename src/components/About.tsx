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

  const imageSize = "w-64 h-64";

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-foreground animate-fade-up">
          Who am I?
        </h2>
        <div
          className="absolute hidden md:block z-10"
          style={{
            top: "100px",
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
        <div className="grid md:grid-cols-2 gap-12 items-start pt-24 md:pt-0">
          <div className="space-y-6 animate-fade-up">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm Henrique, a Web Developer who finds satisfaction in the
              challenge of bringing innovative ideas to life. I specialize in
              creating unique and functional digital spaces. Whether it's the
              front-end presentation or the back-end architecture, my work is
              centered on transforming concepts into successful, deliverable
              code.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My focus is squarely on developing modern, responsive, and
              high-performance web applications. I always prioritize adopting
              best practices and the latest market technologies to ensure the
              final product is both current and exceptionally fast.
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
