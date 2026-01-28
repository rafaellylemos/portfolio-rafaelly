"use client";

import { ArrowUpRight, Building2, Globe, CheckCircle2 } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"; // Importando o componente Card
import { Badge } from "@/components/ui/badge"; // Usando o Badge que o Lovable te deu

const Experience = () => {
  const experiences = [
    {
      company: "Zexter",
      role: "Frontend Developer",
      period: "Jan 2025 — Jan 2026",
      description:
        "Responsável pelo ciclo de vida da V1 e V2. Atuei na implementação de código, garantia de qualidade (QA) e suporte estratégico ao CFO e PM. Com a transição para squads globais, assumi alta autonomia na tomada de decisões técnicas e de UX.",
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
        "Desenvolvimento de projetos variados para clientes nacionais, construindo uma base sólida em ecossistemas modernos.",
      details: [
        "Desenvolvimento de interfaces responsivas e funcionais.",
        "Integração de APIs e foco em boas práticas.",
        "Entrega de projetos autônomos com foco em qualidade visual."
      ],
      highlights: ["Angular", "React", "TypeScript", "Node.js"],
      featured: false,
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent uppercase tracking-widest">
            Experiência
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Trajetória Profissional
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company} 
              className="group border-border/40 bg-secondary/5 hover:bg-secondary/10 transition-all duration-500 overflow-hidden"
            >
              <CardHeader className="p-6 md:p-10 pb-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20">
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
                      <CardTitle className="text-2xl md:text-3xl font-heading font-semibold">
                        {exp.company}
                      </CardTitle>
                      <CardDescription className="text-accent font-medium mt-1">
                        {exp.role}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="px-4 py-1.5 h-fit text-muted-foreground">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 md:p-10 pt-6">
                <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <Accordion type="single" collapsible className="mb-8">
                  <AccordionItem value="details" className="border-border/40">
                    <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                      Responsabilidades Técnicas
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid md:grid-cols-2 gap-4 pt-4">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-background/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {exp.featured && (
                <CardFooter className="px-6 md:px-10 py-6 border-t border-border/40 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-accent text-xs font-bold uppercase tracking-tighter">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    Colaboração Global & Estratégica
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all" />
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