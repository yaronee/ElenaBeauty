<template>
  <section class="bg-[#d8b9ab] py-16 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Faites-nous part de vos besoins futurs</h2>
      <p class="text-gray-600 mt-4 text-lg">Indiquez la prestation souhaitée, la ville et le nombre de personnes pour mieux comprendre vos besoins à venir. Nous vous contacterons via WhatsApp pour plus de détails.</p>
    </div>

    <!-- Formulaire -->
    <div class="mt-10 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form @submit.prevent="redirectToWhatsApp">
        <!-- Prestation -->
        <div class="mb-4">
          <label class="block text-gray-700 text-lg font-semibold">Quel type de prestation souhaitez-vous ?</label>
          <div class="mt-2 space-y-2">
            <label v-for="option in options" :key="option" class="flex items-center space-x-2">
              <input type="checkbox" v-model="selectedOptions" :value="option" class="form-checkbox text-[#e2dbd1]" />
              <span class="text-gray-700">{{ option }}</span>
            </label>
          </div>
          <p v-if="errorMessage" class="text-red-500 text-sm mt-2">Veuillez sélectionner au moins une prestation.</p>
        </div>

        <!-- Ville -->
        <div class="mb-4">
          <label for="city" class="block text-gray-700 text-lg font-semibold">Ville où vous prévoyez votre événement</label>
          <input v-model="city" id="city" type="text" placeholder="Entrez votre ville" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e2dbd1]" required />
        </div>

        <!-- Nombre de personnes -->
        <div class="mb-4">
          <label for="numPeople" class="block text-gray-700 text-lg font-semibold">Nombre de personnes concernées</label>
          <input v-model="numPeople" id="numPeople" type="number" min="1" placeholder="Nombre de personnes" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e2dbd1]" required />
        </div>

        <!-- Bouton avec icône WhatsApp -->
        <button type="submit" class="w-full bg-[#d8b9ab] text-white py-3 rounded-md shadow-lg flex items-center justify-center hover:bg-[#e2dbd1] transition duration-300">
          <i class="fab fa-whatsapp mr-3 text-2xl"></i> Envoyer via WhatsApp
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      numPeople: "",
      selectedOptions: [], // Stocke les prestations sélectionnées
      options: [
        "Maquillage Mariage",
        "Maquillage Soirée",
        "Cours de Maquillage",
        "Autre (merci de préciser)"
      ],
      errorMessage: false // Gère l'affichage de l'erreur
    };
  },
  methods: {
    redirectToWhatsApp() {
      if (this.selectedOptions.length === 0) {
        this.errorMessage = true;
        return;
      }
      
      const prestationText = this.selectedOptions.join(", ");
      const message = `Bonjour, j'aimerais en savoir plus sur la prestation suivante : ${prestationText} pour ${this.numPeople} personne(s) dans la ville de ${this.city}.`;
      const whatsappUrl = `https://wa.me/972548978324?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  }
};
</script>

<style scoped>
input:checked {
  accent-color: #e2dbd1;
}
</style>
