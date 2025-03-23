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
          title: ["Major Mono Display" ,"Montserrat Subrayada", "Fjalla One", "sans-serif"],
          header: ["Montserrat Subrayada", "Fjalla One", "sans-serif"],
          rale: ["Raleway", "sans-serif"]
        },
  
        gridTemplateColumns: {
          '25': 'repeat(25, 1fr)',
        },
      }
    },
    plugins: [],
  }
  
  
  