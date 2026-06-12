"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FadeIn } from "./motion/FadeIn";

const Contact = () => {
  return (
    <section id="contact" className="bg-muted overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Mettiamoci in Contatto</h2>
              <p className="text-secondary text-lg mb-10 leading-relaxed">
                Hai un progetto interessante in mente o vuoi semplicemente fare un saluto? 
                Compila il modulo o utilizza i miei contatti diretti. Ti risponderò entro 24 ore.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-background rounded-lg border border-border text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-secondary">simorizz569@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-background rounded-lg border border-border text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Telefono</h4>
                    <p className="text-secondary">+39 347 946 7266</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-background rounded-lg border border-border text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Sede</h4>
                    <p className="text-secondary">Forlì, Italia</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-background p-8 md:p-10 rounded-2xl border border-border shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-foreground">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Mario Rossi"
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-foreground">Indirizzo Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="mario@email.it"
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-foreground">Oggetto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Collaborazione Progetto"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-foreground">Messaggio</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Raccontami del tuo progetto..."
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all group"
                >
                  Invia Messaggio
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
