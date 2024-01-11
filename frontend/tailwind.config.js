/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: 'Lobster, sans-serif',
        poppins: 'Poppins, sans-serif',
        Roboto: 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}

