<template>
    <footer class="bg-white">
      <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <!-- Navigation -->
        <nav class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
          <a v-for="item in navigation.main" :key="item.name" :href="item.href" class="text-gray-600 hover:text-gray-900">
            {{ item.name }}
          </a>
        </nav>
  
        <!-- Carte Google Maps -->
        <div class="mt-10 flex justify-center">
          <iframe
            class="w-full max-w-lg h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Har+Homa,Jerusalem"
            allowfullscreen
          ></iframe>
        </div>
  
        <!-- Réseaux sociaux -->
        <div class="mt-10 flex justify-center gap-x-10">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-600 hover:text-gray-800">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
  
        <!-- Copyright -->
        <p class="mt-10 text-center text-sm/6 text-gray-600">&copy; 2024 Ton Entreprise, Tous droits réservés.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { defineComponent, h } from 'vue'
  
  const navigation = {
    main: [
      { name: 'Accueil', href: '#' },
      { name: 'Prestation', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    social: [
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/',
        icon: defineComponent({
          render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                d: 'M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.756 0 8.334.012 7.052.07 5.659.133 4.292.344 3.17 1.466 2.048 2.588 1.837 3.955 1.774 5.348.716 6.63.703 8.05.703 12c0 3.95.013 5.37.07 6.652.063 1.393.274 2.76 1.396 3.882 1.122 1.122 2.489 1.333 3.882 1.396C8.334 23.987 8.756 24 12 24c3.244 0 3.666-.012 4.948-.07 1.393-.063 2.76-.274 3.882-1.396 1.122-1.122 1.333-2.489 1.396-3.882.058-1.282.07-1.704.07-4.948 0-3.244-.012-3.666-.07-4.948-.063-1.393-.274-2.76-1.396-3.882-1.122-1.122-2.489-1.333-3.882-1.396C15.666.012 15.244 0 12 0z',
              }),
              h('path', {
                d: 'M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z',
              }),
            ]),
        }),
      },
    ],
  }
  </script>