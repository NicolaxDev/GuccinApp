/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Incluye todos tus archivos fuente
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom': '1000px',
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        black: "#141414",
        white: "#FFFFFF",
        letterGray: "#adb5bd",
        gray: "#2D2D2D",
        green: "#A8CA22",
        red: "#C1121F",
        yellow: "#FDC323",
      },
    },
  },
  plugins: [nextui()],
};
