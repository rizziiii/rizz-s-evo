"use client";

import { 
  Layout, 
  Database, 
  Server, 
  Smartphone, 
  Cloud, 
  ShieldCheck 
} from "lucide-react";
import { FadeIn } from "./motion/FadeIn";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout size={24} className="text-accent" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    title: "Backend Development",
    icon: <Server size={24} className="text-accent" />,
    skills: ["Node.js", "Express", "Python", "FastAPI", "Go"]
  },
  {
    title: "Database & Storage",
    icon: <Database size={24} className="text-accent" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"]
  },
  {
    title: "Mobile & Cross-Platform",
    icon: <Smartphone size={24} className="text-accent" />,
    skills: ["React Native", "Flutter", "PWA"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={24} className="text-accent" />,
    skills: ["AWS", "Docker", "CI/CD", "Vercel", "Linux"]
  },
  {
    title: "Security & QA",
    icon: <ShieldCheck size={24} className="text-accent" />,
    skills: ["JWT", "OAuth 2.0", "Jest", "Cypress", "System Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-4 md:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Competenze Tecniche</h2>
            <p className="text-secondary text-lg">
              Utilizzo le tecnologie più moderne e affidabili per garantire risultati eccellenti in ogni fase dello sviluppo.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} direction="up" delay={index * 0.1}>
              <div 
                className="bg-background border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:border-accent/30 group h-full"
              >
                <div className="mb-6 inline-flex p-3 rounded-lg bg-accent/5 group-hover:bg-accent/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-muted text-secondary text-sm font-medium rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
