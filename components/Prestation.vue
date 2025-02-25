<template>
    <section class="bg-[#e2dbd1] py-16 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-800">Mes Prestations</h2>
        <p class="text-gray-600 mt-4">Sublimez votre beauté avec un maquillage sur-mesure adapté à toutes vos occasions.</p>
      </div>
  
      <div class="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Carte 1 : Maquillage Mariage -->
        <div class="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="https://lauriefeligioni-makeup.eu/cdn/shop/products/maquillage-mariee-occidentale-888690.jpg?v=1701260388://www.ayshglamm.fr/shop/produit/maquillage-mariee/://www.ayshglamm.fr/shop/wp-content/uploads/2022/09/PHOTO-2022-10-30-15-58-31-2-600x600.png://via.placeholder.com/300x200" alt="Maquillage Mariage" class="w-full h-48 object-cover rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Maquillage Mariage</h3>
          <p class="text-gray-600 mt-2">Un maquillage élégant et longue tenue pour le plus beau jour de votre vie.</p>
          <p class="text-lg font-bold text-gray-800 mt-4">₪350</p>
          <button @click="openModal = true" class="mt-4 inline-block rounded-md bg-[#c4b8aa] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#b3a495]">
            En savoir plus
          </button>
        </div>
  
        <!-- Carte 2 : Maquillage de Soirée -->
        <div class="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="https://lauriefeligioni-makeup.eu/cdn/shop/products/maquillage-mariee-occidentale-888690.jpg?v=1701260388://www.ayshglamm.fr/shop/produit/maquillage-mariee/://www.ayshglamm.fr/shop/wp-content/uploads/2022/09/PHOTO-2022-10-30-15-58-31-2-600x600.png://via.placeholder.com/300x200" alt="Maquillage de Soirée" class="w-full h-48 object-cover rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Maquillage de Soirée</h3>
          <p class="text-gray-600 mt-2">Brillez sous les projecteurs avec un maquillage intense et sophistiqué.</p>
          <p class="text-lg font-bold text-gray-800 mt-4">₪250</p>
          <button @click="openModal = true" class="mt-4 inline-block rounded-md bg-[#c4b8aa] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#b3a495]">
            En savoir plus
          </button>
        </div>
  
        <!-- Carte 3 : Cours de Maquillage -->
        <div class="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="https://lauriefeligioni-makeup.eu/cdn/shop/products/maquillage-mariee-occidentale-888690.jpg?v=1701260388://www.ayshglamm.fr/shop/produit/maquillage-mariee/://www.ayshglamm.fr/shop/wp-content/uploads/2022/09/PHOTO-2022-10-30-15-58-31-2-600x600.png://via.placeholder.com/300x200" alt="Cours de Maquillage" class="w-full h-48 object-cover rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Cours de Maquillage</h3>
          <p class="text-gray-600 mt-2">Apprenez les techniques pro pour un maquillage parfait au quotidien.</p>
          <p class="text-lg font-bold text-gray-800 mt-4">₪180</p>
          <button @click="openModal = true" class="mt-4 inline-block rounded-md bg-[#c4b8aa] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#b3a495]">
            En savoir plus
          </button>
        </div>
      </div>
  
      
  
      <!-- Modal (Carte ouverte) -->
      <div v-if="openModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96">
          <img src="https://lauriefeligioni-makeup.eu/cdn/shop/products/maquillage-mariee-occidentale-888690.jpg?v=1701260388://www.ayshglamm.fr/shop/produit/maquillage-mariee/://www.ayshglamm.fr/shop/wp-content/uploads/2022/09/PHOTO-2022-10-30-15-58-31-2-600x600.png://www.ayshglamm.fr/shop/wp-content/uploads/2022/09/PHOTO-2022-10-30-15-58-31-2-600x600.png" alt="Détails Maquillage Mariage" class="w-full h-48 object-cover rounded-lg mb-4">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Détails du Maquillage Mariage</h2>
          <p class="text-gray-600 mb-4">Un maquillage élégant et longue tenue pour le plus beau jour de votre vie. Nous adaptons la couleur et les techniques selon vos préférences pour garantir un résultat parfait.</p>
          <p class="text-lg font-bold text-gray-800">₪350</p>
          <button @click="openModal = false" class="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">
            Fermer
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        openModal: false,
      };
    },
  };
  </script>