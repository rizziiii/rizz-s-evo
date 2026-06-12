"use client";

import { ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./motion/FadeIn";

const projects = [
  {
    title: "Enterprise ERP System",
    description: "Una piattaforma completa per la gestione delle risorse aziendali, con moduli per fatturazione, magazzino e risorse umane.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  },
  {
    title: "E-commerce Scalabile",
    description: "Negozio online ad alte prestazioni con integrazione Stripe, gestione carrello avanzata e pannello admin personalizzato.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  },
  {
    title: "AI Dashboard Analytics",
    description: "Dashboard interattiva per l'analisi dei dati in tempo reale, integrata con modelli di intelligenza artificiale per previsioni di vendita.",
    tech: ["Python", "FastAPI", "React", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-muted overflow-hidden">
      <div className="container px-4 md:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Progetti Selezionati</h2>
              <p className="text-secondary text-lg">
                Una raccolta dei lavori più significativi che ho realizzato recentemente. 
                Ogni progetto è stato sviluppato con un focus particolare su performance e scalabilità.
              </p>
            </div>
            <Link 
              href="#" 
              className="text-primary font-bold hover:text-accent transition-colors flex items-center mt-6 md:mt-0"
            >
              Vedi tutti i progetti <ExternalLink size={18} className="ml-2" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <FadeIn key={project.title} direction="up" delay={index * 0.1}>
              <div 
                className="bg-background rounded-xl overflow-hidden border border-border flex flex-col group hover:border-accent/30 transition-all hover:shadow-xl h-full"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                     <Link href={project.link} className="p-3 bg-white rounded-full text-primary hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                     </Link>
                     <Link href={project.github} className="p-3 bg-white rounded-full text-primary hover:scale-110 transition-transform">
                        <Mail size={20} />
                     </Link>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-secondary mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-bold text-accent uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
