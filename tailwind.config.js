/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "0px", max: "480px" },
      md: { min: "481px", max: "768px" },
      lg: { min: "769px", max: "1024px" },
      xl: { min: "1025px", max: "1280px" },
      "2xl": { min: "1281px", max: "1356px" },
      "3xl": { min: "1356px" },
    },
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
