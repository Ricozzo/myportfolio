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
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 bg-clip-text text-foreground animate-fade-up text-3d-effect">
          Who am I?
        </h2>
        <div
          className="absolute hidden md:block z-10"
          style={{
            top: "400px",
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
              I was born in Brazil but I have spent the last six years of my
              life in Portugal. My entire professional journey before this point
              focused on delivering customer service to clients. The time I
              spent in customer service allowed me to develop my ability to
              focus on details and create complete solutions and learn how to
              interact with people effectively. The experience showed me how to
              transform complicated requirements into practical solutions. I
              selected Web Development as my first career because it enables me
              to combine my interest in efficient solutions with my
              technological expertise.
            </p>
            <p className="text-3d-effect"></p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              🤝 PROBLEM SOLVING AND QUALITY ARE THE FOUNDATION OF MY WORK.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I enrolled in Web Developer Bootcamp after my career transition to
              discover my professional destiny of creating software that
              delivers operational functionality and user-friendly interface and
              stability.
              I can work on your project using 3D tools to make it more responsive and dynamic.
              I can turn your idea to a real digital experience.
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
