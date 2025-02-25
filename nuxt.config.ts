// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    './css/tailwind.css',  // Ton fichier CSS avec Tailwind
    '@fortawesome/fontawesome-free/css/all.min.css'  // Ajout de FontAwesome
  ],

  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-02-25'
})