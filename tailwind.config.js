/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        lightBlue:'#5964E0',
        white:'#FFFFFF',
        // gray:'#96999e'
      },
    },
  },
  plugins: [],
}