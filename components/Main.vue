<template>
  <section id="main">
    <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-0">
      <div 
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right 
               skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 
               ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" 
        aria-hidden="true">
      </div>

      <div class="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-x-12 flex flex-col-reverse items-center lg:flex-row">
          
          <!-- Texte -->
          <div class="mt-6 max-w-md text-center lg:text-left lg:mt-0 xl:col-start-1">
            <h1 class="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Sublimez chaque occasion avec un maquillage à votre image ! 💄✨
            </h1>
            <p class="mt-3 text-base sm:text-lg lg:text-xl font-medium text-gray-500">
              Avec Elena, un maquillage sur-mesure et pour tous vos événements !
            </p>
            <div class="mt-6 flex justify-center lg:justify-start">
              <a href="#" class="rounded-md bg-[#d8b9ab] px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2dbd1]">
                Voir Les Prestations
              </a>
            </div>
          </div>

          <!-- Vidéo (taille intermédiaire) -->
          <div class="flex justify-center lg:justify-end w-full">
            <video class="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] rounded-xl object-cover sm:mt-8 lg:mt-0 xl:row-span-2 xl:row-end-2" autoplay muted loop>
              <source src="/video/vid2.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </div>

      <div class="absolute inset-x-0 bottom-0 -z-10 h-16 bg-gradient-to-t from-white sm:h-24"></div>
    </div>
  </section>
</template>