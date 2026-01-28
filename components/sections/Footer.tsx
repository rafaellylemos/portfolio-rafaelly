'use client';

import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/40 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-heading text-2xl font-bold text-foreground group"
            >
              Rafaelly Lemos<span className="text-accent group-hover:animate-pulse">.</span>
            </a>
            
            <div className="flex items-center md:items-start gap-2">
              <p className="text-xs text-muted-foreground font-medium tracking-wide">
                © {currentYear} • Construído com React & Next.js
              </p>
              <Badge variant="outline" className="text-[10px] px-2 py-0 border-accent/20 text-accent/70 uppercase tracking-tighter">
                Escalabilidade & UX
              </Badge>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-accent transition-all duration-300"
            >
              <span className="relative">
                Voltar ao topo
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </span>
              <span className="inline-block transform group-hover:-translate-y-1 transition-transform duration-300">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                  <path d="M7.5 1.5L7.85355 1.14645L7.5 0.792893L7.14645 1.14645L7.5 1.5ZM7 13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5L7 13.5ZM11.3536 4.64645L7.85355 1.14645L7.14645 1.85355L10.6464 5.35355L11.3536 4.64645ZM7.14645 1.14645L3.64645 4.64645L4.35355 5.35355L7.85355 1.85355L7.14645 1.14645ZM7 1.5L7 13.5L8 13.5L8 1.5L7 1.5Z" fill="currentColor"></path>
                </svg>
              </span>
            </button>
            <p className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.2em]">
              Recife • Brasil
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;