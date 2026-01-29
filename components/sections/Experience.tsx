"use client";

import * as React from "react";
import { 
  ArrowUpRight, 
  Building2, 
  Globe, 
  CheckCircle2, 
  PlusCircle 
} from "lucide-react";

import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function ExperienceDetail({ title, children }: { title: string, children: React.ReactNode }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const TriggerButton = (
    <button className="flex items-center gap-2 text-xs font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-widest group/btn">
      <PlusCircle className="w-4 h-4 transition-transform group-hover/btn:rotate-90" />
      Ver Detalhes Técnicos
    </button>
  );

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>{TriggerButton}</DialogTrigger>
        <DialogContent className="sm:max-w-[600px] border-accent/20 bg-card/95 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-accent border-b border-accent/10 pb-2">
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="py-6">{children}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{TriggerButton}</DrawerTrigger>
      <DrawerContent className="bg-card border-accent/20">
        <DrawerHeader className="text-left border-b border-accent/10 pb-4">
          <DrawerTitle className="font-heading text-xl text-accent">{title}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 py-6">{children}</div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" className="border-accent/20">Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const Experience = () => {
  const experiences = [
    {
      company: "Zexter",
      role: "Desenvolvedora Frontend",
      period: "Jan 2025 — Jan 2026",
      description:
        "Responsável pelo ciclo de vida das versões V1 e V2, atuando na implementação de código e suporte estratégico ao CFO e PM. Participei ativamente da evolução tecnológica do projeto, trabalhando inicialmente com SCSS e transitando para Tailwind CSS conforme a modernização da stack. Utilizei React e Next.js para o desenvolvimento de interfaces, sempre com foco em garantia de qualidade (QA).",
      details: [
        "Consumo de APIs REST e integração de dados dinâmicos na plataforma.",
        "Refatoração de código focada em Clean Code e escalabilidade.",
        "Garantia de 100% de responsividade em interfaces complexas.",
        "Atuação em ambiente de Métodos Ágeis (Scrum/Kanban) em squads globais.",
        "Sugestões estratégicas de UX/UI e execução de processos de QA.",
        "Suporte técnico direto aos stakeholders para alinhamento de roadmap."
      ],
      highlights: ["React", "Next.js", "TypeScript", "Tailwind CSS", "QA"],
      featured: true,
    },
    {
      company: "Freelance",
      role: "Frontend Developer",
      period: "2023 — 2024",
      description:
        "Desenvolvimento de projetos variados para clientes nacionais, construindo uma base sólida em ecossistemas modernos. Atuei na criação de interfaces robustas utilizando Angular e React com Next.js, adaptando a arquitetura de acordo com as necessidades de cada cliente.",
      details: [
        "Desenvolvimento de interfaces responsivas e funcionais utilizando Angular v14+.",
        "Arquitetura de componentes modulares e reutilizáveis.",
        "Integração de APIs e foco em boas práticas de performance (SSR/SSG).",
        "Entrega de projetos autônomos com foco em qualidade visual e UX."
      ],
      highlights: ["Angular", "React", "Next.js", "TypeScript", "Node.js"],
      featured: false,
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent uppercase tracking-widest px-4 py-1">
            Trajetória
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground italic">
            Experiência Profissional
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp) => (
            <Card 
              key={exp.company} 
              className="group border-border/40 bg-secondary/5 hover:bg-secondary/10 transition-all duration-500"
            >
              <CardHeader className="p-6 md:p-10 pb-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 group-hover:border-accent/40 transition-colors">
                      {exp.company === "Zexter" ? (
                        <div className="relative">
                          <Globe className="w-7 h-7 text-accent" />
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                          </span>
                        </div>
                      ) : (
                        <Building2 className="w-7 h-7 text-accent" />
                      )}
                    </div>

                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-heading font-semibold group-hover:text-accent transition-colors">
                        {exp.company}
                      </CardTitle>
                      <CardDescription className="text-accent font-medium mt-1 uppercase tracking-wider text-xs">
                        {exp.role}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="px-4 py-1.5 h-fit text-muted-foreground font-mono">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 md:p-10 pt-6">
                <p className="text-base md:text-lg mb-8 leading-relaxed text-muted-foreground font-body">
                  {exp.description}
                </p>

                {/* Implementação do Drawer/Dialog Adaptativo */}
                <div className="mb-8">
                  <ExperienceDetail title={`Responsabilidades na ${exp.company}`}>
                    <ul className="grid gap-4">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/90 bg-accent/5 p-4 rounded-xl border border-accent/10">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </ExperienceDetail>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-background/50 border-accent/10 hover:border-accent/30 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {exp.featured && (
                <CardFooter className="px-6 md:px-10 py-6 border-t border-border/40 bg-accent/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-3 text-accent text-xs font-bold uppercase tracking-tighter italic">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    Alta Autonomia em Squads Globais
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;