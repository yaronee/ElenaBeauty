<template>
  <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-0">
    <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true"></div>

    <div class="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center lg:grid lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <!-- TITRE -->
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Sublimez chaque instant avec un maquillage à votre image ! 💄✨
        </h1>

        <!-- DESCRIPTION & BOUTON -->
        <div class="mt-6 max-w-lg mx-auto lg:mx-0">
          <p class="text-lg font-medium text-gray-600 sm:text-xl">
            Avec Elena, un maquillage sur-mesure pour toutes vos occasions !
          </p>
          <div class="mt-6 flex justify-center lg:justify-start">
            <a href="#Prestation" class="rounded-md bg-[#d8b9ab] px-4 py-3 text-sm font-semibold text-black shadow-md hover:bg-[#c9a89b]">
              Voir Les Prestations
            </a>
          </div>
        </div>

        <!-- VIDÉO (adaptée pour mobile) -->
        <div class="mt-10 flex justify-center lg:justify-end">
          <video class="w-full max-w-[200px] sm:max-w-sm lg:max-w-lg rounded-2xl object-cover" autoplay muted loop>
            <source src="/video/vid2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
  </div>
</template>