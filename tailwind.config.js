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
        custom: ['Roboto-Condensed', 'sans-serif'], // 'Roboto' is the imported font
      },
    }
  },
  plugins: [],
}

