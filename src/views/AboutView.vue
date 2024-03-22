<template>
  <div class="about">
    <div class="w-full sm:grid sm:grid-cols-2 gap-2 flex sm:flex-row flex-col justify-center mt-14">
      <!-- Left side -->
      <div class="w-full m-auto px-4 mb-8">
        <label for="nombre" class="flex justify-start block text-900 font-medium mb-2">Nombre</label>
        <InputText id="nombre" type="text" class="w-full flex mb-3 rounded-md shadow-xl" />

        <label for="email1" class="flex block text-900 font-medium mb-2 mt-6">Correo electronico</label>
        <InputText id="email1" type="text" class="w-full flex mb-3 rounded-md shadow-xl" />

        <label for="celular" class="flex block text-900 font-medium mb-2 mt-6">Celular</label>
        <InputText id="celular" type="text" class="w-full flex mb-3 rounded-md shadow-xl" />

        <Button class="w-full bg-emerald-800 rounded-md shadow-md p-2 mt-4 text-emerald-400">Enviar Mensaje</Button>
      </div>
      <div class="w-full mx-auto px-4">
        <h1 class="flex align-start text-xl lg:text-2xl">Contactenos</h1>
        <p class="mt-8 flex align-start text-left text-xs lg:text-base text-gray-600">Si quiere alquilar la cancha para entrenar su
          equipo de
          futbol o
          club deportivo
        </p>
        <p class="mt-2 flex align-start text-left text-xs lg:text-base text-gray-600">
          Si quiere alquilar la cancha para realizar un torneo amateur
        </p>
        <p class="mt-2 flex align-start text-left text-xs lg:text-base text-gray-600">
          Si quiere celebrar un evento especial
        </p>

        <a href="https://www.google.com/maps/place/Club+Deportivo+Cana%C3%A1n+-+Canchas+Sint%C3%A9ticas+F%C3%BAtbol,+Tenis,+Padel./@4.7899041,-75.6955485,17z/data=!4m6!3m5!1s0x8e388772115be459:0x3e2d716b4714bb0c!8m2!3d4.7898988!4d-75.6929736!16s%2Fg%2F11dxdj2lgp?entry=ttu"
          class="flex align-items-start text-blue-600 font-bold no-underline cursor-pointer mt-12"><span
            class="mr-3 text-sm lg:text-base">Ir a google Maps -></span></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
</script>
