/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Incluye todos tus archivos fuente
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'black': '#202020',
        'white': '#FFFFFF',
        'yellow': '#FDC323',
        'red': '#C1121F',
        'gray': '#6c757d',
        'green': '#00785D',
        'blueMate': '#539ba9',
      },
    },
  },
  plugins: [nextui()],
}
