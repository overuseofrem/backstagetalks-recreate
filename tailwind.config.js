/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure files to scan for Tailwind classes.
  content: ["./*.{html,css,js}"],
  
  theme: {
    extend: {
      // Define custom font families.
      fontFamily: {
        // 'font-sans' will now use 'Roboto Condensed'.
        // This is a more standard key than 'font-font'.
        sans: ['Roboto Condensed', 'sans-serif'],
      },
      // Note: Removed the custom fontWeight. It's better to use
      // Tailwind's built-in 'font-bold' class directly in the HTML
      // for more control and clarity.
    },
  },
  
  plugins: [],
}