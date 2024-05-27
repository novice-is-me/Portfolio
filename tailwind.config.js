/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Mono: "sf"
      },
      colors:{
        headers: "#CBD7FA",
        text: "#8892b0",
        highlight: "#64ffda"
      }
    },
  },
  plugins: [],
}