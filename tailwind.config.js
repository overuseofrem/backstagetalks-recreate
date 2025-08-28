/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,css,js}"],
  theme: {
    extend: {
      // Typography!
      // Font Family
      fontFamily: {
        font: ['Roboto Condensed', 'sans serif'],   // All fonts
      },
      fontWeight: {
        weight: 'bold',
      },
    },
  },
  plugins: [],
}

