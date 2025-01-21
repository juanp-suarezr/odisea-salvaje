<template>
  <div class="main pb-6">
    <div class="w-full fondo1 flex px-4">
      <div class="my-auto w-full mx-4">
        <Fieldset class="sm:text-2xl md:text-4xl bg-option2 border-2" legend="Quiénes somos" :toggleable="true">
          <p class="m-0 p-4 text-base sm:text-lg md:text-2xl text-white">
            Odisea Salvaje es mucho más que una empresa. Somos los exploradores intrépidos de los rincones más remotos y
            emocionantes de Colombia, dedicados a desentrañar la esencia del deporte extremo en este país lleno de
            diversidad y belleza natural.
          </p>
        </Fieldset>

      </div>
    </div>

    <div class="px-4 sm:grid grid-cols-2 flex flex-col sm:flex-row mt-4">

      <div class="w-11/12">
        <figure class="w-full mx-4 shadow-xl image-3d">
          <img
            class="rounded-xl cover shadow-2xl transition-transform duration-500 ease-in-out transform hover:rotate-y-3 hover:rotate-x-3 hover:scale-105"
            src="../assets/img/conocenos1.jpeg">
          <figcaption></figcaption>
        </figure>
      </div>

      <div class="w-full flex">
        <h2 class="text-xl sm:text-2x md:text-4xl m-auto">
          <span class="text-2xl sm:text-4xl md:text-5xl">E</span>n <span class="text-option3 font-bold">Odisea
            Salvaje</span>, no solo facilitamos la aventura, sino que también actuamos como curadores expertos,
          seleccionando cuidadosamente las <span class="text-option3 font-bold">experiencias</span> que desafían los
          límites y ofrecen una conexión auténtica con la
          naturaleza y la <span class="text-option3 font-bold">cultura colombiana.</span>
        </h2>
      </div>

    </div>

    <div class="w-full sm:grid grid-cols-2 flex flex-col sm:flex-row mt-4 px-4">

      <div class="w-full flex pe-4 sm:ms-5">
        <h2 class="text-xl sm:text-2x md:text-4xl m-auto">
          <span class="text-2xl sm:text-4xl md:text-5xl">N</span>uestro equipo está compuesto por apasionados del <span
            class="text-option3 font-bold">deporte extremo</span>, y amantes de la naturaleza, comprometidos con brindar
          <span class="text-option3 font-bold">experiencias seguras, emocionantes y transformadoras.</span> Cada miembro
          de nuestro equipo está dedicado a garantizar que cada viaje con nosotros sea inolvidable, desde la
          planificación
          hasta la ejecución.
        </h2>
      </div>

      <div class="w-11/12">
        <figure class="w-full mx-4 shadow-xl image-3d">
          <img
            class="rounded-xl cover shadow-2xl transition-transform duration-500 ease-in-out transform hover:rotate-y-3 hover:rotate-x-3 hover:scale-105"
            src="../assets/img/conocenos2.jpg">
          <figcaption></figcaption>
        </figure>
      </div>

    </div>

    <div class="w-full px-2 mt-6">
      <h2 class="text-xl sm:text-2x md:text-4xl m-auto">
        En Odisea Salvaje, no solo te llevamos a la aventura; te llevamos a descubrir una parte de ti mismo que nunca
        supiste que existía. Únete a nosotros mientras exploramos los límites de lo posible en las tierras salvajes de
        Colombia.
      </h2>
    </div>

    <!-- conocenos AQUI FALTA INFO DE CRISTIAN, HOOVER, FOTO DE DANIELA, CRISTAN Y HOOVER -->
    <div class="w-full flex flex-col mt-8 px-2">
      <h3 class="text-2xl sm:text-4x md:text-6xl m-auto text-primary font-bold">
        Nuestro Equipo
      </h3>

      <div class="w-full px-6 sm:grid sm:grid-cols-2 gap-4 mt-6">
        
        <!-- hoover -->
        <Fieldset class="border-2 px-4 mb-4">
          <template #legend>
            <div class="flex align-items-center pl-2">
              <Avatar :image="hoover" shape="circle" />
              <span class="font-bold">Valery Orozco</span>
            </div>
          </template>
          <p class="m-0 text-lg sm:text-xl md:text-2xl">
            <b class="text-base sm:text-lg md:text-xl text-gray-500">Diseñadora gráfica</b>
            <br>
            Capaz de trabajar tanto de manera independiente como en equipo, colaborando estrechamente con otros
            profesionales
            para alcanzar los objetivos establecidos. Su curiosidad innata, creatividad y autenticidad dan vida a cada uno de sus proyectos.
          </p>
        </Fieldset>
        
        <!-- JuanP -->
        <Fieldset class="border-2 px-4 mb-4">
          <template #legend>
            <div class="flex align-items-center pl-2">
              <Avatar :image="jp" shape="circle" />
              <span class="font-bold">Juan Pablo Suarez Ramirez</span>
            </div>
          </template>
          <p class="m-0 text-lg sm:text-xl md:text-2xl">
            <b class="text-base sm:text-lg md:text-xl text-gray-500">Administrador de empresas  -- tecnología en análisis y desarrollo de software, con más de 5 años de experiencia en el sector tic</b>
            <br>
            Creativo, solidario, determinante, freelancer, responsable, capacidad de trabajar en equipo y liderar
            procesos de
            innovación. apasionado por el futbol y los deportes extremos.
          </p>
        </Fieldset>
      </div>


    </div>

  </div>

</template>

<script setup>
import InputText from 'primevue/inputtext';
import Fieldset from 'primevue/fieldset';
import Avatar from 'primevue/avatar';
import brayan from '/src/assets/img/avatar/brayan.jpg';
import nata from '/src/assets/img/avatar/nata.jpg'
import hoover from '/src/assets/img/avatar/hoover.jpeg'
import cris from '/src/assets/img/avatar/cris.jpeg'

import dani from '/src/assets/img/avatar/daniela.jpeg'

import jp from '/src/assets/img/avatar/jp.png'

</script>

<style scoped>
.fondo1 {
  background-image: url('/src/assets/img/fondo1.jpg');
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
