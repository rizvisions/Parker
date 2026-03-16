/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'cream-dark': '#EDE8DC',
        parker: '#D94F2F',
        'forest-green': '#2B4A2B',
        'forest-green-light': '#3A6B3A',
        gold: '#E8B84B',
        'parker-purple': '#7C77BD',
        'parker-purple-dark': '#6B66A8',
        'sage-green': '#6DBF6A',
      },
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

