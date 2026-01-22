"use client";

import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleContactAction = (type: "email" | "tel") => {
    if (type === "email") {
      toast({
        title: "Abrindo seu servidor de e-mail",
        description: "Rascunho preparado para rafaellyltbmarques@gmail.com",
      });
    } else {
      toast({
        title: "Ligação iniciada",
        description: "Conectando ao telefone (81) 99846-0022",
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* Coluna da Esquerda */}
          <div className="animate-slide-up">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
              Contato
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Vamos criar algo incrível juntos?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 font-body">
              Estou disponível para novos projetos e oportunidades. 
              Entre em contato e vamos conversar sobre como posso somar ao seu time.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <a
                href="mailto:rafaellyltbmarques@gmail.com"
                onClick={() => handleContactAction("email")}
                className="flex items-center gap-4 p-4 bg-transparent border border-border/40 rounded-2xl hover:border-accent/50 hover:bg-accent/5 transition-all group backdrop-blur-sm"
              >
                <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</p>
                  <p className="text-foreground font-medium">rafaellyltbmarques@gmail.com</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>

              {/* Telefone Card */}
              <a
                href="tel:+5581998460022"
                onClick={() => handleContactAction("tel")}
                className="flex items-center gap-4 p-4 bg-transparent border border-border/40 rounded-2xl hover:border-accent/50 hover:bg-accent/5 transition-all group backdrop-blur-sm"
              >
                <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Telefone / WhatsApp</p>
                  <p className="text-foreground font-medium">(81) 99846-0022</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>

              {/* Localização Card */}
              <div className="flex items-center gap-4 p-4 bg-transparent border border-border/40 rounded-2xl backdrop-blur-sm">
                <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Localização</p>
                  <p className="text-foreground font-medium">Recife, PE — Disponível para o mundo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita */}
          <div className="animate-slide-up animation-delay-200">
            <div className="h-full p-8 md:p-10 bg-secondary/10 border border-border/60 backdrop-blur-md rounded-3xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-8">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Disponível para Projetos
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Pronta para o próximo desafio técnico
                </h3>
                <p className="text-muted-foreground mb-8 font-body leading-relaxed">
                  Seja para liderar a migração de um produto ou fortalecer a qualidade do seu frontend, 
                  estou pronta para aplicar minha experiência internacional no seu negócio.
                </p>
              </div>

              <div>
                <button
                  onClick={() => handleContactAction("email")}
                  className="flex items-center justify-center gap-2 w-full md:w-max px-8 py-4 bg-foreground text-background font-bold rounded-2xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg shadow-foreground/5 mb-8"
                >
                  <a href="mailto:rafaellyltbmarques@gmail.com" className="flex items-center gap-2">
                    Enviar Mensagem
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </button>

                <div className="flex items-center gap-4 pt-8 border-t border-border/40">
                  <span className="text-sm font-medium text-muted-foreground">Conecte-se:</span>
                  <a
                    href="https://linkedin.com/in/rafaellylemos"
                    target="_blank"
                    className="p-3 rounded-xl bg-secondary/50 border border-border/40 text-foreground hover:text-accent hover:border-accent/40 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/rafaellylemos"
                    target="_blank"
                    className="p-3 rounded-xl bg-secondary/50 border border-border/40 text-foreground hover:text-accent hover:border-accent/40 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;