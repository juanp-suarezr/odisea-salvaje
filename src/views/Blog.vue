<template>
  <div class="container mx-auto py-8">
    <div v-if="isLoading" class="text-center">
      Cargando...
    </div>
    <div v-else>
      <div v-for="(region, index) in regions" :key="index" class="mb-8">
        <h2 class="text-3xl font-bold mb-4">{{ region.nombre }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(info, key) in region.info" :key="key" class="p-4 bg-white shadow rounded-lg">
            <h3 class="text-xl font-semibold mb-2">{{ key }}</h3>
            <p>{{ info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const regions = ref([]);

onMounted(async () => {
  try {
    // Aquí puedes obtener los datos de las regiones desde tu API o un archivo local
    // Ejemplo de estructura de datos:
    regions.value = [
      {
        nombre: 'Región Caribe',
        info: {
          'Costumbres': 'La región Caribe de Colombia está influenciada por la cultura afro-caribeña y la herencia indígena...',
          'Deportes Extremos': 'Destinos como Santa Marta y San Andrés ofrecen actividades como buceo, snorkel, surf y kiteboarding...',
          'Geografía': 'La región está caracterizada por sus playas, islas, manglares y la Sierra Nevada de Santa Marta...',
          'Clima': 'Predominantemente cálido y tropical, con una temporada de lluvias entre mayo y noviembre...',
          'Cultura': 'Rica en folklore, música, danza y gastronomía costeña, incluyendo platos como el arroz con coco y el sancocho de pescado...'
        }
      },
      // Agrega más regiones aquí
    ];
    isLoading.value = false;
  } catch (error) {
    console.error('Error al obtener los datos de las regiones:', error);
    isLoading.value = false;
  }
});
</script>

<style>
/* Estilos Tailwind CSS */
</style>