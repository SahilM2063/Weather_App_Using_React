/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Popin': ['Poppins', 'sans-serif'],
      },
      screens: {
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xs': '360px',
      }
    },
  },
  plugins: [],
}

