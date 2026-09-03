/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

module.exports = withUt({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ReeBolly Brand Colors
        terracotta: {
          DEFAULT: "#B85C5C", // Primary - Warm Terracotta
          light: "#C97373",
          dark: "#A04848",
        },
        champagne: {
          DEFAULT: "#E8D5C4", // Secondary - Soft Champagne
          light: "#F0E2D6",
          dark: "#D9C4B0",
        },
        espresso: {
          DEFAULT: "#302421", // Tertiary - Deep Espresso
          light: "#4A3835",
          dark: "#1A1311",
        },
        ivory: {
          DEFAULT: "#FAF7F2", // Primary Background - Warm Ivory
          light: "#FFFFFF",
          dark: "#F0EDE8",
        },
        rose: {
          DEFAULT: "#D9A6A0", // Supporting Accent - Dusty Rose
          light: "#E5B8B3",
          dark: "#C98F88",
        },
        gold: {
          DEFAULT: "#B99A68", // Optional Accent - Antique Gold
          light: "#C9AA7D",
          dark: "#A58956",
        },
        
        // Shadcn UI compatibility
        primary: {
          DEFAULT: "#B85C5C",
          foreground: "#FAF7F2",
        },
        secondary: {
          DEFAULT: "#E8D5C4",
          foreground: "#302421",
        },
        background: "#FAF7F2",
        foreground: "#302421",
        
        border: "#E8D5C4",
        input: "#E8D5C4",
        ring: "#B85C5C",
        
        destructive: {
          DEFAULT: "#B85C5C",
          foreground: "#FAF7F2",
        },
        muted: {
          DEFAULT: "#E8D5C4",
          foreground: "#302421",
        },
        accent: {
          DEFAULT: "#D9A6A0",
          foreground: "#302421",
        },
        popover: {
          DEFAULT: "#FAF7F2",
          foreground: "#302421",
        },
        card: {
          DEFAULT: "#FAF7F2",
          foreground: "#302421",
        },
      },
      fontFamily: {
        // Editorial serif for headings
        serif: ["var(--font-serif)"],
        // Modern sans-serif for body
        sans: ["var(--font-sans)"],
        // Legacy support
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "dotted-pattern": "url('/assets/images/dotted-pattern.png')",
        "hero-img": "url('/assets/images/hero.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
