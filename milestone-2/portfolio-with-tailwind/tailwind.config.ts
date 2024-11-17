import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F2F5F9",
        linear: "#DE6E24",
        customBlack: "#000000",
        customWhite: "#F2F7FC",
        navFont: "#FFFFFF",
        iconsBg: "#E1E8EF",
        lineBg: "#E3E3E3",
        silver: "#B2AFAC",
        pink: "#FFEBD1",
        iconsColor: "#1A1003"
      },
    },
  },
  plugins: [],
} satisfies Config;

