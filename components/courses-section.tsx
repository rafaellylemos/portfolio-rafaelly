"use client";

import * as React from "react";
import { GraduationCap, Calendar, BookOpen, CheckCircle2, PlusCircle } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const academicData = [
    {
      title: "Formação React (Ignite)",
      institution: "Rocketseat",
      period: "2024 - 2025",
      description: "Especialização no ecossistema moderno do React, com foco em Server Components, estratégias de cache e arquiteturas escaláveis para aplicações de alto tráfego.",
      skills: ["Next.js (App Router)", "TypeScript Avançado", "Padrões de Projeto", "Testes Unitários (Jest)"],
    },
    {
      title: "FAST - Formação Acelerada em Soluções Tech - React",
      institution: "CESAR School",
      period: "2023 - 2024",
      description: "Imersão em desenvolvimento de software focado em React para soluções complexas, enfatizando a criação de interfaces modulares, otimização de renderização e integração eficiente com APIs de larga escala.",
      skills: ["React Hooks", "Componentização", "Otimização de Performance", "Gerenciamento de Estado"],
    },
    {
      title: "Angular (v.2 ao v.17)",
      institution: "Loiane Groner & Felipe",
      period: "2023 - 2024",
      description: "Treinamento completo em Angular, abrangendo desde a arquitetura baseada em módulos até as novas funcionalidades de Signals e fluxo de controle nativo.",
      skills: ["RxJS (Observables)", "Angular Signals", "Diretivas e Pipes", "Injeção de Dependência"],
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "UNINASSAU",
      period: "2024 - 2026",
      description: "Graduação superior focada em fundamentos de computação, engenharia de software e processos de qualidade no ciclo de vida do desenvolvimento.",
      skills: ["Estrutura de Dados", "Bancos de Dados SQL", "Lógica de Programação", "Metodologias Ágeis (Scrum)"],
    },
];

export function CoursesSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section id="courses" className="w-full max-w-5xl mx-auto py-24 px-6 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <Badge variant="outline" className="border-accent/30 text-accent uppercase tracking-[0.2em] px-4 py-1">
          Educação
        </Badge>
        <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground italic">
          Formação Acadêmica
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {academicData.map((item, index) => {
          const Content = (
            <div className="space-y-6 pt-4">
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                {item.description}
              </p>
              <div className="grid grid-cols-1 gap-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent">Skills Validadas:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 bg-accent/5 p-3 rounded-lg border border-accent/10">
                      <Checkbox checked disabled className="border-accent data-[state=checked]:bg-accent" />
                      <span className="text-xs font-medium text-foreground/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );

          const Trigger = (
            <div className="group flex flex-col items-start text-left p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-card/50 cursor-pointer w-full h-full">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest mb-2">
                {item.institution}
              </span>
              <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-4">
                {item.title}
              </h3>
              <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-border/20">
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
                  <Calendar className="h-3 w-3" />
                  <span>{item.period}</span>
                </div>
                <PlusCircle className="h-5 w-5 text-accent opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all" />
              </div>
            </div>
          );

          return (
            <div key={index}>
              {isDesktop ? (
                <Dialog>
                  <DialogTrigger className="w-full h-full">{Trigger}</DialogTrigger>
                  <DialogContent className="sm:max-w-[550px] border-accent/20 bg-card/95 backdrop-blur-xl">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl text-accent">{item.title}</DialogTitle>
                      <span className="text-xs font-mono uppercase text-muted-foreground">{item.institution}</span>
                    </DialogHeader>
                    {Content}
                  </DialogContent>
                </Dialog>
              ) : (
                <Drawer>
                  <DrawerTrigger className="w-full h-full">{Trigger}</DrawerTrigger>
                  <DrawerContent className="bg-card px-4">
                    <DrawerHeader className="text-left px-0">
                      <DrawerTitle className="text-accent">{item.title}</DrawerTitle>
                      <span className="text-xs font-mono uppercase text-muted-foreground">{item.institution}</span>
                    </DrawerHeader>
                    {Content}
                    <DrawerFooter className="px-0 pb-8">
                      <DrawerClose asChild>
                        <Button variant="outline" className="w-full border-accent/20">Fechar</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-center pt-8">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/20 px-6 py-3 rounded-full border border-border/40">
          <BookOpen className="h-3.5 w-3.5 text-accent" />
          <span>Educação continuada e evolução constante</span>
        </div>
      </div>
    </section>
  );
}