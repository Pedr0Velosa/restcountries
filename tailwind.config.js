/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '12-autofit-350': 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      gridTemplateRows: {
        '2-auto': 'auto 1fr',
      },
      colors: {
        'darkblue-500': 'hsl(207, 26%, 10%)',
        'darkblue-300': 'hsl(209, 23%, 22%)',
        'darkgray-300': 'hsl(0, 0%, 52%)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};