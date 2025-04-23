import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Major Mono Display', 'Montserrat Subrayada', 'Fjalla One', 'sans-serif'],
        header: ['Montserrat Subrayada', 'Fjalla One', 'sans-serif'],
        rale: ['Raleway', 'sans-serif'],
      },
      gridTemplateColumns: {
        '25': 'repeat(25, 1fr)',
      },
    },
  },
  plugins: [],
};

export default config;