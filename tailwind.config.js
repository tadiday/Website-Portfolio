/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      height: {
        
      },
      fontFamily: {
        title: ["Fjalla One", "sans-serif"]
      },

      gridTemplateColumns: {
        '25': 'repeat(25, 1fr)',
      },
    }
  },
  plugins: [],
}


