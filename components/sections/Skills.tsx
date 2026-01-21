import { Layers, Code, ShieldCheck, Globe, Rocket, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Core",
      icon: Layers,
      skills: ["React", "Next.js", "TypeScript", "JavaScript ES6+"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Garantia de Qualidade",
      icon: ShieldCheck,
      skills: ["QA & Testes", "Clean Code", "Bug Hunting", "Manutenção Crítica"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Estilização & UI",
      icon: Code,
      skills: ["Tailwind CSS", "SCSS/SASS", "Styled Components", "Figma Design System"],
      color: "from-pink-500/20 to-purple-500/20",
    },
    {
      title: "Ecossistema",
      icon: Globe,
      skills: ["Git / GitHub", "REST APIs", "Squads Internacionais", "Metodologias Ágeis"],
      color: "from-amber-500/20 to-orange-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/10">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Skills
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Meu arsenal tecnológico
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Equilibrando rigor técnico em QA com desenvolvimento moderno de interfaces de alta performance.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary/50 text-foreground text-sm font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-all cursor-default border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Impact Section */}
<div className="mt-16 p-8 md:p-12 bg-transparent border border-border/60 rounded-3xl animate-slide-up backdrop-blur-sm shadow-sm">
  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
    <div className="flex-[1.5]">
      <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-foreground">
        Diferenciais Estratégicos
      </h3>
      <p className="text-muted-foreground mb-8 font-body text-lg">
        Minha atuação vai além da entrega de código; foco na longevidade e saúde do produto.
      </p>
      
      <div className="grid sm:grid-cols-2 gap-8">
        {[
          {
            icon: Rocket,
            title: "Transição V1 ➔ V2",
            desc: "Experiência real em migração e estabilização de arquiteturas em escala."
          },
          {
            icon: Zap,
            title: "Autonomia Decisória",
            desc: "Capacidade de gerenciar tasks e UX sob confiança direta de C-Levels."
          }
        ].map((item) => (
          <div key={item.title} className="flex gap-4 group">
            <div className="p-3 h-fit bg-accent/10 rounded-xl border border-accent/20 transition-colors group-hover:bg-accent/20">
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
    
    {/* Divisor Visual */}
    <div className="w-px h-32 bg-border/60 hidden md:block" />
    
    <div className="flex-1">
      <div className="relative">
        {/* Aspas decorativas para o Quote */}
        <span className="absolute -top-6 -left-4 text-6xl text-accent/10 font-serif leading-none">"</span>
        <p className="italic text-lg text-muted-foreground leading-relaxed relative z-10">
          "Atuar em squads internacionais me ensinou que a comunicação clara e a 
          <span className="text-foreground font-medium"> estabilidade do código</span> são tão importantes quanto a velocidade de entrega."
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Skills;