import React from "react";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-card py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex gap-6">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7" />
            <p className="ml-2 hidden group-hover:block transition-all duration-300 whitespace-nowrap">
              GitHub
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/ortizhenrique/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
            aria-label="LinkedIn"
          >
             <Linkedin className="w-7 h-7" />
            <p className="ml-2 hidden group-hover:block transition-all duration-300 whitespace-nowrap">
              Linkedin
            </p>
          </a>
          <a
            href="mailto:henriqueortizpereira@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
            aria-label="Email"
          >
            <Mail className="w-7 h-7" />
            <p className="ml-2 hidden group-hover:block transition-all duration-300 whitespace-nowrap">
              E-mail
            </p>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
            aria-label="CV"
          >
            <FileDown className="w-7 h7" />
            <p className="ml-2 hidden group-hover:block transition-all duration-300 whitespace-nowrap">
              My CV
            </p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
