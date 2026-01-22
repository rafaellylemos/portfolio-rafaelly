"use client";

import { ArrowUpRight, Building2, Globe, CheckCircle2 } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const Experience = () => {
  const experiences = [
    {
      company: "Zexter",
      role: "Frontend Developer",
      period: "Jan 2025 — Jan 2026",
      description:
        "Responsável pelo ciclo de vida da V1 e V2. Atuei na implementação de código, garantia de qualidade (QA) e suporte estratégico ao CFO e PM. Com a transição para squads globais, assumi alta autonomia na tomada de decisões técnicas e de UX, sendo referência de confiança para a evolução e manutenção da plataforma.",
      details: [
        "Consumo de APIs REST e integração de dados dinâmicos na plataforma.",
        "Refatoração de código focada em Clean Code e escalabilidade do projeto.",
        "Garantia de 100% de responsividade em interfaces complexas da V1 e V2.",
        "Atuação em ambiente de Métodos Ágeis (Scrum/Kanban) em squads globais.",
        "Sugestões estratégicas de UX/UI e execução de processos de QA.",
        "Suporte técnico direto aos stakeholders para alinhamento de roadmap."
      ],
      highlights: [
        "Full-cycle V1 & V2 Development",
        "High-autonomy in Global Squads",
        "QA & Technical Stability",
        "Strategic Business Alignment",
      ],
      featured: true,
    },
    {
      company: "Freelance",
      role: "Frontend Developer",
      period: "2023 — 2024",
      description:
        "Desenvolvimento de projetos variados para clientes nacionais, construindo uma base sólida em Angular, React e TypeScript.",
      details: [
        "Desenvolvimento de interfaces responsivas e funcionais.",
        "Integração de APIs e foco em boas práticas de desenvolvimento.",
        "Entrega de projetos autônomos com foco em qualidade visual."
      ],
      highlights: [
        "Angular projects",
        "React ecosystem",
        "TypeScript",
        "Tailwind CSS",
      ],
      featured: false,
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Experiência
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Onde eu fiz a diferença
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="group p-6 md:p-10 rounded-3xl border border-border/40 bg-secondary/5 hover:bg-secondary/10 transition-all duration-500 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex items-start gap-5">
                  <div className="relative p-4 rounded-2xl bg-accent/10 border border-accent/20">
                    {exp.company === "Zexter" ? (
                      <>
                        <Globe className="w-7 h-7 text-accent" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                      </>
                    ) : (
                      <Building2 className="w-7 h-7 text-accent" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-muted-foreground font-medium mt-1">
                      {exp.role}
                    </p>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-background/50 border border-border text-sm font-semibold text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              <p className="text-lg mb-8 leading-relaxed text-muted-foreground font-body">
                {exp.description}
              </p>

              <Accordion type="single" collapsible className="mb-8 border-none">
                <AccordionItem value="details" className="border-none">
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-2">
                    Responsabilidades e Competências Técnicas
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-xl bg-background border border-border/60 text-muted-foreground"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {exp.featured && (
                <div className="mt-8 pt-8 border-t border-border/40 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-accent">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm font-bold uppercase tracking-tighter">Foco: Colaboração Estratégica Global</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;