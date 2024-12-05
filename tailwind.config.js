/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#749B3F",
          orange: "#FF6A1A",
        },
        black: "#212337",
        grey: {
          grey100: "#4A4A52",
          grey80: "#A6A6A6",
          grey50: "#D9D9D9",
          grey20: "#F4F6F6",
        },
      },
      fontFamily: { questrial: ["Questrial", "sans-serif"] },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      questrial: ["Questrial", "sans-serif"],
    },
  },
  plugins: [],
};
