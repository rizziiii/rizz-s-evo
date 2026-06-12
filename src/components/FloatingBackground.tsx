"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const FloatingBackground = () => {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Trasformazione del colore di sfondo in base allo scorrimento e al tema
  const lightColors = ["#ffffff", "#f0f7ff", "#f5f3ff", "#ffffff"];
  const darkColors = ["#0f172a", "#1e293b", "#0f172a", "#1e1b4b"];
  
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    theme === "dark" ? darkColors : lightColors
  );

  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.05, 0.15]);
  const gridTranslateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  if (!mounted) return null;

  return (
    <motion.div 
      style={{ backgroundColor: bgColor }}
      className="fixed inset-0 -z-20 transition-colors duration-700"
    >
      {/* Cerchi sfocati animati */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square bg-primary/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-accent/10 rounded-full blur-[100px]"
      />

      {/* Grid decorativa sottile che si muove con lo scroll */}
      <motion.div 
        style={{ 
          opacity: gridOpacity,
          translateY: gridTranslateY
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
      />
    </motion.div>
  );
};

export default FloatingBackground;
