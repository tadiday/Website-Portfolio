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
        display: ["Agbalumo", "cursive"],
        display2: ["Rubik Doodle Shadow", "cursive"],
      },

      gridTemplateColumns: {
        '25': 'repeat(25, 1fr)',
      },

    }
  },
  plugins: [],
}

