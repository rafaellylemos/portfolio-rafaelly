'use client';

import { Layers, Code, ShieldCheck, Globe, Rocket, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillsMetrics } from "../skills-metrics";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Core",
      icon: Layers,
      skills: ["React", "Next.js", "TypeScript", "JavaScript ES6+"],
      color: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    },
    {
      title: "Garantia de Qualidade",
      icon: ShieldCheck,
      skills: ["QA & Testes", "Clean Code", "Bug Hunting", "Manutenção Crítica"],
      color: "bg-green-500/10 border-green-500/20 text-green-500",
    },
    {
      title: "Estilização & UI",
      icon: Code,
      skills: ["Tailwind CSS", "SCSS/SASS", "Styled Components", "Figma Design System"],
      color: "bg-pink-500/10 border-pink-500/20 text-pink-500",
    },
    {
      title: "Ecossistema",
      icon: Globe,
      skills: ["Git / GitHub", "REST APIs", "Squads Internacionais", "Metodologias Ágeis"],
      color: "bg-amber-500/10 border-amber-500/20 text-amber-500",
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent uppercase tracking-widest">
            Expertise
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Meu arsenal tecnológico
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Equilibrando o rigor técnico de QA com o desenvolvimento moderno de interfaces de alta performance.
          </p>
        </div>

        {/* Radar Chart & Pitch de Vendas */}
        <div className="grid lg:grid-cols-5 gap-8 items-center mb-20">
          <div className="lg:col-span-3 bg-card/30 border border-border/40 rounded-3xl p-4 md:p-8 backdrop-blur-sm shadow-xl">
            <SkillsMetrics />
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
              Perfil Híbrido & Estratégico
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Minha atuação não se limita a entregar código; eu utilizo minha base em <strong>QA</strong> para garantir que cada funcionalidade seja robusta, testável e centrada na jornada do usuário.
            </p>
            <div className="space-y-4">
              {[
                "Foco em estabilidade e manutenibilidade",
                "Visão crítica de produto e UX",
                "Experiência em ambientes ágeis globais"
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Categorias de Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category) => (
            <Card 
              key={category.title}
              className="group border-border/40 bg-card/50 hover:border-accent/30 transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className={`p-3 rounded-xl border ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-heading font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Diferenciais Estratégicos */}
        <Card className="border-border/60 bg-transparent backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-[1.5]">
                <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                  Diferenciais Estratégicos
                </h3>
                <p className="text-muted-foreground mb-8 font-body text-lg">
                  Foco na longevidade e saúde do produto através de autonomia e rigor técnico.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    {
                      icon: Rocket,
                      title: "Transição V1 ➔ V2",
                      desc: "Experiência em migração e estabilização de arquiteturas em escala."
                    },
                    {
                      icon: Zap,
                      title: "Autonomia Decisória",
                      desc: "Gestão de tasks e UX sob confiança direta de C-Levels."
                    }
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 group">
                      <div className="p-3 h-fit bg-accent/10 rounded-xl border border-accent/20 group-hover:bg-accent/20 transition-colors">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-px h-32 bg-border/60 hidden md:block" />
              
              <div className="flex-1">
                <div className="relative">
                  <span className="absolute -top-6 -left-4 text-6xl text-accent/10 font-serif leading-none">"</span>
                  <p className="italic text-lg text-muted-foreground leading-relaxed relative z-10">
                    "Atuar em squads internacionais me ensinou que a comunicação clara e a 
                    <span className="text-foreground font-medium"> estabilidade do código</span> são tão importantes quanto a velocidade de entrega."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;