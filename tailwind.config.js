// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        mainLarge: "3.125rem, 16.6875rem, auto, 16.6875rem",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        lightText: "#444444",
        lightBackground: "#FFFFFF",
        lightGrayBackground: "#F3F3F3",
        lightBorder: "#E7E7E7",
      },
      fontSize: {
        12: ".75rem",
      },
    },
  },
  plugins: [],
};
