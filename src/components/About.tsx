"use client";

import { FadeIn } from "./motion/FadeIn";

const About = () => {
  return (
    <section id="about" className="bg-muted overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Passione per il Codice, <br />
                <span className="text-primary">Visione Aziendale.</span>
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed text-lg">
                <p>
                  Sono uno sviluppatore senior appassionato di tecnologie web con sede a Forlì. La mia missione è aiutare le aziende a 
                  digitalizzarsi fornendo soluzioni robuste, sicure e facili da usare.
                </p>
                <p>
                  Non mi limito a scrivere codice: analizzo i processi aziendali per proporre la migliore architettura 
                  possibile. Credo fermamente che un buon software debba risolvere problemi reali, non crearne di nuovi.
                </p>
                <p>
                  Nel corso degli anni ho collaborato con startup innovative e grandi multinazionali, 
                  portando a termine progetti complessi con successo e puntualità.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-10">
                <div>
                  <h4 className="text-3xl font-bold text-primary">50+</h4>
                  <p className="text-sm text-secondary uppercase font-semibold">Progetti Completati</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary">15+</h4>
                  <p className="text-sm text-secondary uppercase font-semibold">Clienti Soddisfatti</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 -z-10" />
                <div className="absolute inset-0 bg-accent/20 rounded-2xl -rotate-3 -z-10" />
                <div className="w-full h-full bg-border rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="Rizz's Evo Professional Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
