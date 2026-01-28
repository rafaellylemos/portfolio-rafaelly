"use client"

import React from "react"
import { motion } from "framer-motion"

const skills = [
  { name: "Metodologias Ágeis & Git Flow (PRs / Conflitos)", percentage: 95 },
  { name: "QA: Análise Funcional & Ciclo de Bugs", percentage: 90 },
  { name: "Frontend Development (React / Next.js)", percentage: 85 },
  { name: "Visão de Produto & Propostas de Valor", percentage: 80 },
  { name: "UI/UX Design (Domínio de Figma)", percentage: 75 },
  { name: "Inglês Técnico (Leitura & Escuta)", percentage: 65 },
  { name: "Angular Framework (Base Prática)", percentage: 55 },
]

export function SkillsMetrics() {
  return (
    <div className="w-full space-y-6 p-2 font-body">
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-sm font-medium text-foreground/90 tracking-tight">
              {skill.name}
            </span>
            <span className="text-xs font-mono text-accent/90 font-bold">
              {skill.percentage}%
            </span>
          </div>
          
          <div className="h-1.5 w-full bg-secondary/30 rounded-full overflow-hidden border border-white/5 shadow-sm">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-accent rounded-full"
              style={{
                boxShadow: "0 0 12px -2px hsl(var(--accent) / 0.4)"
              }}
            />
          </div>
        </div>
      ))}
      
      <div className="mt-8 p-5 rounded-2xl bg-secondary/15 border border-border/40 border-dashed backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-accent font-bold uppercase tracking-widest">
            Expertise de Squad
          </span>
        </div>
        <p className="text-[12px] text-muted-foreground leading-relaxed">
          Atuo como uma desenvolvedora <strong>Frontend Júnior High-Level</strong>, com domínio total de 
          fluxos colaborativos (Git Flow). Tenho autonomia para gerenciar branches, resolver conflitos de merge 
          e garantir a qualidade da entrega via PRs, sempre alinhada a 
          metodologias ágeis e ao rigor técnico de QA.
        </p>
      </div>
    </div>
  )
}