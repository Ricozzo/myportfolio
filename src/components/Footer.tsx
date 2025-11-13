import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-muted-foreground text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Henrique. All the rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a 
            href="https://github.com/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ortizhenrique/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a href="mailto:henriqueortizpereira@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail className="w-7 h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
