/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: '#FF0000',
        dark: '#000000',
        grey:  '#171718',
      },
      container:{
        center: true,
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
  },
  plugins: [],
}

