"use client";

import { FadeIn } from "./motion/FadeIn";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Presente",
    description: "Lead developer per la modernizzazione di sistemi legacy. Architettura basata su microservizi e implementazione di Next.js per il frontend."
  },
  {
    role: "Web Developer",
    company: "Creative Agency",
    period: "2018 - 2021",
    description: "Sviluppo di siti e-commerce ad alte prestazioni e applicazioni web interattive per clienti internazionali."
  },
  {
    role: "Junior Developer",
    company: "Software Startup",
    period: "2016 - 2018",
    description: "Sviluppo frontend con React e gestione database SQL/NoSQL. Collaborazione in team Agile."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="overflow-hidden">
      <div className="container px-4 md:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Esperienza Professionale</h2>
            <p className="text-secondary text-lg">
              Un percorso di crescita costante nel mondo dello sviluppo software, 
              affrontando sfide tecniche sempre più ambiziose.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <div className="relative pl-10 md:pl-0">
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-[11px] md:left-1/2 top-10 w-[2px] h-[calc(100%+3rem)] bg-border -translate-x-1/2 hidden md:block" />
                  )}
                  
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full border-4 border-primary bg-background -translate-x-[7px] md:-translate-x-1/2 z-10" />
                    
                    {/* Content Card */}
                    <div className="w-full md:w-[45%]">
                      <div className="bg-muted p-8 rounded-xl border border-border shadow-sm hover:border-accent/30 transition-all">
                        <span className="text-sm font-bold text-accent uppercase tracking-widest">{exp.period}</span>
                        <h3 className="text-xl font-bold text-foreground mt-2">{exp.role}</h3>
                        <p className="text-primary font-semibold mb-4">{exp.company}</p>
                        <p className="text-secondary leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Spacer for MD screens */}
                    <div className="hidden md:block md:w-[10%]" />
                    <div className="hidden md:block md:w-[45%]" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
