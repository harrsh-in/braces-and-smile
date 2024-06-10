import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,jsx}", "./src/app/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      mac: "1440px",
      max: "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "40px",
        md: "48px",
        lg: "54px",
        xl: "60px",
        mac: "80px",
        max: "240px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", ...fontFamily.serif],
        body: ["var(--font-body)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
