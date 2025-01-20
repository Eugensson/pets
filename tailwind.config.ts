import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "2rem", lg: "1rem" },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1210px",
    },
    fontFamily: {
      primary: ["var(--font-josefin-sans)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#062d3e",
          hover: "#021f2c",
        },
        orange: {
          DEFAULT: "#ed5c01",
          hover: "#e45a03",
        },
        teal: "#189cab",
        cream: "#ebe3cc",
        yellow: "#fbbd08",
      },
      backgroundImage: {
        hero: "url('/assets/hero/hero-bg.png')",
        pets: "url('/assets/pets/pets-bg.png')",
        services: "url('/assets/services/bg.png')",
        adoption: "url('/assets/adoption/bg.png')",
        newsletterYellow: "url('/assets/newsletter/bg-yellow.svg')",
        newsletterOrange: "url('/assets/newsletter/bg-orange.svg')",
        footer: "url('/assets/footer/bg.svg')",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
