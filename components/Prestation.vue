<template>
  <section  id="prestation" class="bg-[#e2dbd1] py-16 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-800">Mes Prestations</h2>
      <p class="text-gray-600 mt-4">Sublimez votre beauté avec un maquillage sur-mesure, pensé pour révéler tout votre éclat en toute occasion.</p>
    </div>

    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div 
        v-for="service in services" 
        :key="service.id" 
        class="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
      >
        <img 
          :src="service.image" 
          :alt="service.title" 
          loading="lazy" 
          class="w-full h-48 object-cover rounded-lg mb-4"
        >
        <h3 class="text-xl font-semibold text-gray-800">{{ service.title }}</h3>
        
        <p class="text-lg font-bold text-gray-800 mt-4">
          ₪{{ service.price }} 
        </p>
        <button 
          @click="openModal(service)" 
          class="mt-4 inline-block rounded-md bg-[#c4b8aa] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#b3a495] focus:outline-none focus:ring-2 focus:ring-[#c4b8aa]"
          aria-label="En savoir plus sur {{ service.title }}"
        >
          En savoir plus
        </button>
      </div>
    </div>

    <transition name="fade">
      <div v-show="selectedService" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" role="dialog" aria-modal="true">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <div v-if="selectedService?.video">
            <video 
              :src="selectedService?.video" 
              autoplay 
              loop 
              muted 
              class="w-full h-48 object-cover rounded-lg mb-4"
              aria-label="Vidéo de {{ selectedService?.title }}"
            ></video>
          </div>
          <div v-else>
            <img 
              :src="selectedService?.image" 
              :alt="selectedService?.title" 
              loading="lazy" 
              class="w-full h-48 object-cover rounded-lg mb-4"
            >
          </div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ selectedService?.title }}</h2>
          <p class="text-gray-600 mb-4">{{ selectedService?.description }}</p>
          <p class="text-lg font-bold text-gray-800">
            ₪{{ selectedService?.price }} 
          </p>
          <button 
            @click="closeModal" 
            class="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label="Fermer la fenêtre"
          >
            Fermer
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedService: null,
      services: [
        {
          id: 1,
          title: "Maquillage Mariée",
          description: "Sublimez votre grand jour avec un maquillage élégant et raffiné qui tient toute la journée. Soyez la plus belle version de vous-même !",
          price: 1000,
          image: './img/Mariage.jpg',
          video: './video/vid1.mov'
        },
        {
          id: 2,
          title: "Maquillage de Soirée",
          description: "Brillez sous les projecteurs avec un maquillage intense et sophistiqué, conçu pour illuminer votre soirée et captiver tous les regards !",
          price: 400,
          image: './img/soiree.jpg',
          video: './video/vid2.mp4'
        },
        {
          id: 3,
          title: "Maquillage Événementiel",
          description: "Que ce soit pour un shooting, un gala ou une cérémonie, laissez-moi créer un maquillage sur-mesure qui vous mettra en lumière avec élégance et assurance !",
          price: 400,
          image: 'img/britmilah.jpg',
          video: '/video/vid2.mp4'
        },
        {
          id: 4,
          title: "Cours d'Auto-maquillage",
          description: "Maîtrisez l'art du maquillage et apprenez les astuces des pros pour un look impeccable au quotidien ! Un moment ludique et enrichissant rien que pour vous.",
          price: 400,
          image: '/img/cours.jpg',
          video: '/video/vid2.mp4'
        },
        {
          id: 5,
          title: "Pose de Faux Cils",
          description: "Offrez à votre regard une intensité irrésistible avec une pose de faux cils naturelle ou glamour, pour une tenue parfaite du matin jusqu’au soir !",
          price: 150,
          image: '/img/cils.webp',
          video: '/video/vid2.mp4'
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyPress);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeyPress);
  },
  methods: {
    openModal(service) {
      this.selectedService = service;
    },
    closeModal() {
      this.selectedService = null;
    },
    handleKeyPress(event) {
      if (event.key === "Escape") {
        this.closeModal();
      }
    }
  }
};
</script>