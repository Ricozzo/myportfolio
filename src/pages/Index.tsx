import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import React from "react";
import Navbar from "../components/NavBar";


const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
