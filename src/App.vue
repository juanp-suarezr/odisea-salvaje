<template>
  <div class="overflow-x-hidden">

    <div class="fondo flex flex-col">
      <nav class="w-full flex justify-between px-4 py-4 bg-transparent">

        <div class="logo">
          <h2 class="text-white text-4xl font-bold">ODISEA SALVAJE</h2>
        </div>

        <div class="justify-end my-auto hidden sm:block text-white text-xl">
          <router-link class="px-4 hover:underline" to="/">Inicio</router-link>
          <router-link class="px-4 hover:underline" to="/canchas">Quienes somos</router-link>
          <router-link class="px-4 hover:underline" to="/about">Contáctenos</router-link>
          <router-link class="px-4 hover:underline" to="/register">Blog</router-link>
        </div>

      </nav>

      <div class="m-auto justify-center w-full flex flex-col">
        <h1 class="text-[80px] text-center text-white mx-auto w-3/6 font-bold leading-none">Colombia Extrema</h1>
        <h2 class="text-xl mt-4 text-center text-white mx-auto w-[50%]">Donde la adrenalina y el potencial se unen en deportes extremos que te dejarán sin aliento.</h2>

        <div class="mt-8 flex justify-center gap-6">
          <button class="bg-secondary p-4 text-white">
            Conoce Colombia
          </button>
          <button class="border-white border-2 p-4 text-white">
            Contactenos
          </button>
        </div>

      </div>

      



    </div>


    <router-view />
  </div>
</template>

<script setup>
import { UserCircleIcon } from '@heroicons/vue/24/solid';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();


</script>

<style scoped>
#app {
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: Poppins, Helvetica, Arial, Sans-Serif, serif;
}

.fondo {
  background-image: url('/src/assets/img/fondo.jpg');
  background-size: cover;

  /* Ajusta la imagen para cubrir todo el contenedor */
  background-position: center;
  /* Centra la imagen */
  height: 100vh;
  /* Altura igual al 100% de la altura de la ventana del navegador */
  z-index: -1;
}




/* Estilos adicionales personalizados */
</style>
