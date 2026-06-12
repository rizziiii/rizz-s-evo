import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Abilita l'esportazione statica per Netlify
  images: {
    unoptimized: true, // Necessario per l'export statico se si usa next/image
  },
};

export default nextConfig;
