<template>
  <header class="bg-[#d8b9ab]">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <!-- Nom de la maquilleuse à gauche -->
      <div class="flex items-center space-x-12">
        <a href="#" class="text-xl font-bold text-gray-900">ElenaBeauty</a> <!-- Nom affiché à gauche -->
      </div>

      <!-- Navigation centrale -->
      <div class="flex gap-x-12">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold text-gray-900">{{ item.name }}</a>
      </div>
    </nav>

    <!-- Menu mobile -->
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Fermer le menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
            </div>
          </div>
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
  { name: 'Acceuil', href: '/Main' },
  { name: 'Prestation', href: '/Prestation' },
  { name: 'Contact', href: '/Contact' },
]

const mobileMenuOpen = ref(false)
</script>