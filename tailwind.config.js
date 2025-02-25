/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        paleGreen: '#d8b9ab', // Ajoutez votre couleur ici
      },
    },
  },
}