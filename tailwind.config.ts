import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#04070f",
        card: "rgba(6, 11, 24, 0.72)",
        cyan: {
          400: "#58c4ff",
          500: "#3daeff",
          600: "#0091ff",
        },
        giga: {
          orange: "#ff5500",
          blue: "#0082f3",
          green: "#00e878",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        heading: ["var(--font-space)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
