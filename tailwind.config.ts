import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        swan: {
          blue: "#097CE7",       // Horizon Blue — Primary
          sky: "#8AB9FF",        // Sky Blue — Secondary accent
          lavender: "#E5E6FA",   // Ghost Lavender — Soft backgrounds
          sage: "#7FAE9E",       // Gentle Sage — Care/sustainability
          midnight: "#0D043B",   // Midnight Imperial — Dark backgrounds/text
          charcoal: "#121212",   // Charcoal Black — Footer/dark text
          ivory: "#FCFAF1",      // Ivory — Primary light background
          grey: "#EEEEEE",       // Light Grey — Alt light sections
        },
      },
      borderRadius: {
        swan: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
