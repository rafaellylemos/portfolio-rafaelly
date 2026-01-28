'use client';

import { MapPin, Briefcase, ShieldCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card"; // Importação do Card
import { Badge } from "@/components/ui/badge"; // Importação do Badge

const About = () => {
  const isMobile = useIsMobile();
  const stats = [
    { label: "Experiência de Mercado", value: "2+ anos" },
    { label: "Projetos Entregues", value: "10+" },
    { label: "Foco em Produto", value: "Full-Cycle" }, 
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12 md:gap-16 items-center`}>
          
          <div className="animate-slide-up">
            <Badge variant="outline" className="mb-4 border-accent/30 text-accent uppercase tracking-widest">
              Sobre Mim
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Desenvolvedora Frontend com foco em estabilidade e autonomia
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Sou uma desenvolvedora que acredita que o código só é bom quando resolve problemas reais sem criar novos. Minha trajetória é marcada pela <strong>versatilidade</strong>: transito entre o rigor técnico do <strong>QA</strong> e a agilidade do desenvolvimento <strong>Frontend</strong>.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Ganhei a confiança de <strong>C-Levels e Product Managers</strong> para gerenciar de forma autônoma a evolução de produtos em squads globais.
            </p>

            <div className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-wrap items-center gap-6'} text-sm text-muted-foreground`}>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Recife, PE</span>
              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-accent" /> Frontend Developer</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat) => (
              <Card 
                key={stat.label} 
                className="bg-card border-border/40 hover:border-accent/30 transition-all group overflow-hidden"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-4xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-muted-foreground mt-2 font-medium uppercase text-[10px] tracking-widest">
                        {stat.label}
                      </p>
                    </div>
                    <ShieldCheck className="w-8 h-8 text-accent/20 group-hover:text-accent/50 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;