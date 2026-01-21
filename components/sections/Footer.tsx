'use client';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="py-10 border-t border-border/40 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo e Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="font-heading text-xl font-bold text-foreground group"
              >
                Rafaelly<span className="text-accent group-hover:animate-pulse">.</span>
              </a>
              <p className="text-xs text-muted-foreground font-medium tracking-wide">
                © {currentYear} • Desenvolvido com foco em escalabilidade e UX.
              </p>
            </div>
  
            {/* Links e Voltar ao Topo */}
            <div className="flex items-center gap-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-accent transition-all duration-300"
              >
                <span className="relative">
                  Voltar ao topo
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                </span>
                <span className="text-lg group-hover:-translate-y-1 transition-transform duration-300">↑</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;