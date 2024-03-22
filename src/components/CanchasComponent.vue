<template>
  <div class="bg-gradient-to-tr from-emerald-800 via-emerald-900 to-emerald-700">
    <div class="relative items-center justify-center w-full" data-aos="fade-down-left" data-aos-duration="1000">
      <div class="sm:grid grid-cols-2 gap-2">

        <div class="flex justify-end">
          <img class="w-full" src="../assets/img/canchas.jpg">
        </div>
        <div class="flex flex-col justify-center m-auto">
          <h1 class="mx-auto text-2xl sm:text-4xl md:text-8xl font-bold text-emerald-400 drop-shadow-xl">
            CONOCE LAS CANCHAS
          </h1>
          <div class="mx-auto mt-6 flex">
            <a v-if="home" href="/canchas"
              class="flex p-2 bg-white rounded-md text-4xl text-emerald-800 hover:scale-125">Ubicación</a>
            <a v-else href="#map" class="flex px-5 py-2 bg-white rounded-full text-4xl hover:scale-125 animate-bounce">
              ↓
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center" id="map" v-if="home == false">
    <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=es&amp;q=Pereira,%20Risaralda+(direcci%C3%B3n)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
          href="https://www.gps.ie/car-satnav-gps/">GPS car tracker</a></iframe></div>
  </div>
</template>
<script>
import { ArrowDownCircleIcon } from '@heroicons/vue/24/solid';

export default {

  props: {
    home: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {



    return {
      ArrowDownCircleIcon,

    }
  }

}
</script>
<style lang="">
    
</style>