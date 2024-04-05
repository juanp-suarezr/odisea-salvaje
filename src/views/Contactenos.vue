<template>
  <div class="container shadow-2xl rounded-lg mb-6 mx-auto p-4 max-w-xl mt-12">
    <h1 class="text-2xl font-bold mb-4">Formulario de Reservación</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre:</label>
        <input v-model="nombre" type="text" id="nombre" name="nombre"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
        <input v-model="email" type="email" id="email" name="email"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
      </div>
      <div class="mb-4">
        <label for="fecha" class="block text-sm font-medium text-gray-700">Fecha de Reservación:</label>
        <input v-model="fecha" type="date" id="fecha" name="fecha"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
      </div>
      <div class="mb-4">
        <label for="numero_personas" class="block text-sm font-medium text-gray-700">Número de Personas:</label>
        <input v-model.number="numeroPersonas" type="number" id="numero_personas" name="numero_personas" min="1"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
      </div>
      <div class="mb-4">
        <label for="comentarios" class="block text-sm font-medium text-gray-700">Comentarios:</label>
        <textarea v-model="comentarios" id="comentarios" name="comentarios" rows="3"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
      </div>
      <div class="w-full flex justify-center">
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white text-center rounded-md hover:bg-blue-600">Enviar
        Reservación</button>
      </div>
      
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const nombre = ref('');
const email = ref('');
const fecha = ref('');
const numeroPersonas = ref(1);
const comentarios = ref('');

const submitForm = () => {
  const formData = {
    nombre: nombre.value,
    email: email.value,
    fecha: fecha.value,
    numero_personas: numeroPersonas.value,
    comentarios: comentarios.value
  };
  console.log('Datos del formulario:', formData);
  // Aquí puedes enviar los datos del formulario a tu backend o hacer cualquier otra acción necesaria
};
</script>

<style>
/* Aquí puedes agregar estilos adicionales si es necesario */
</style>