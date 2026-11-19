import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fervo: {
          black: "#0a0a0a",
          red: "#dc2626",
          orange: "#ea580c",
          yellow: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        "fire-flicker": "fire-flicker 2s ease-in-out infinite",
        "spark": "spark 1.5s ease-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        "fire-flicker": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "spark": {
          "0%": { opacity: "0", transform: "translateY(0) scale(0)" },
          "50%": { opacity: "1", transform: "translateY(-20px) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(-40px) scale(0.5)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
