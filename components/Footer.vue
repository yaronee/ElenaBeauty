<template>
  <footer class="bg-[#c4b8aa] text-white py-8">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 text-center gap-8 md:grid-cols-3 md:text-left">
        <!-- Colonne 1 : Nom et Description -->
        <div>
          <h3 class="text-2xl font-semibold mb-4">ElenaBeauty</h3>
          <p class="text-white text-sm md:text-base">Sublimez votre beauté avec des prestations de maquillage sur-mesure.</p>
        </div>

        <!-- Colonne 2 : Navigation -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li><a href="index.html" class="text-white hover:opacity-80">Accueil</a></li>
            <li><a href="prestations.html" class="text-white hover:opacity-80">Prestations</a></li>
            <li><a href="contact.html" class="text-white hover:opacity-80">Contact</a></li>
          </ul>
        </div>

        <!-- Colonne 3 : Contact et Réseaux Sociaux -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <p class="text-white text-sm md:text-base">📧 elena.cohen08@gmail.com</p>
          <p class="text-white text-sm md:text-base">📞 +972 54-897-8324</p>
          <div class="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://www.instagram.com" target="_blank" class="hover:opacity-80 transition">
              <img src="public/img/insta.png" alt="Instagram" class="w-8 h-8">
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center text-white opacity-80 text-sm">
        <p>© 2024 ElenaBeauty. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>