"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./motion/FadeIn";
import { AnimatedText } from "./motion/AnimatedText";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Elementi 3D/Floating di sfondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[5%] w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <FadeIn direction="down" delay={0.2}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black tracking-widest mb-8 border border-primary/20 backdrop-blur-sm">
              DISPONIBILE PER NUOVI PROGETTI
            </div>
          </FadeIn>
          
          <div className="mb-10">
            <AnimatedText 
              text="Costruisco Soluzioni Digitali di Livello Enterprise."
              className="text-6xl md:text-9xl font-black text-foreground leading-[0.95] tracking-tightest"
            />
          </div>

          <FadeIn direction="up" delay={0.6}>
            <p className="text-xl md:text-3xl text-secondary leading-relaxed mb-12 max-w-2xl font-medium">
              Sviluppatore Full-Stack specializzato nella creazione di applicazioni web moderne e scalabili.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="#projects" 
                className="relative overflow-hidden bg-primary text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center hover:scale-105 transition-all group shadow-2xl shadow-primary/40"
              >
                <span className="relative z-10">Guarda i miei lavori</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform relative z-10" size={24} />
              </Link>
              <Link 
                href="#contact" 
                className="group border-2 border-foreground text-foreground px-10 py-5 rounded-full font-black text-lg hover:bg-foreground hover:text-background transition-all flex items-center justify-center"
              >
                Parliamo ora
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
