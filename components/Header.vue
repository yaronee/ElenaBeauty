<template>
  <header class="bg-[#d8b9ab] px-6 py-4">
    <nav class="mx-auto flex max-w-7xl items-center justify-between">
      <!-- Nom ElenaBeauty -->
      <a href="#" class="text-xl font-bold text-gray-900">ElenaBeauty</a>

      <!-- Menu Desktop -->
      <div class="hidden lg:flex gap-x-8">
        <a 
          v-for="item in navigation" 
          :key="item.name" 
          :href="item.href" 
          class="text-sm font-semibold text-gray-900"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Bouton Menu Mobile -->
      <button type="button" class="lg:hidden text-gray-900" @click="mobileMenuOpen = true">
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
    </nav>

    <!-- Menu Mobile -->
    <Dialog class="lg:hidden fixed inset-0 z-50" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 bg-black opacity-50" @click="mobileMenuOpen = false"></div>
      <DialogPanel class="fixed right-0 top-0 w-64 h-full bg-white shadow-lg p-6">
        <button type="button" class="mb-6 text-gray-900" @click="mobileMenuOpen = false">
          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex flex-col gap-y-4">
          <a 
            v-for="item in navigation" 
            :key="item.name" 
            :href="item.href" 
            class="text-base font-semibold text-gray-900"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </a>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Accueil', href: '#main' },
  { name: 'Prestation', href: '#prestation' },
  { name: 'Contact', href: '#contact' },
]

const mobileMenuOpen = ref(false)

// Ferme le menu mobile lorsqu'un lien est cliqué
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style>
/* Ajout du défilement fluide */
html {
  scroll-behavior: smooth;
}
</style>