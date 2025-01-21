<template>
  <div class="w-full h-full fondo2 p-4 flex">
    <div class="sm:grid grid-cols-2 gap-4 w-full flex flex-wrap m-auto">
      <div class="m-auto">
        <Fieldset class="sm:text-2xl md:text-2xl bg-option2" legend="Costumbres"  collapsed="true" :toggleable="true">
          <p class="m-0 p-4 text-sm sm:text-lg md:text-xl text-white">
            En las profundidades de las costumbres colombianas se encuentran la calidez y la solidaridad que
            caracterizan a su gente. Desde las montañas de la Sierra Nevada hasta las llanuras de los Llanos Orientales,
            la hospitalidad es una virtud sagrada. Invitar a un visitante a compartir un plato de sancocho o una arepa
            caliente es más que un gesto de cortesía; es una muestra de amor y respeto hacia el otro. En cada región del
            país, las tradiciones ancestrales se entrelazan con la modernidad, creando un mosaico cultural que refleja
            la diversidad y la riqueza de Colombia. En esta tierra de contrastes, donde lo ancestral y lo contemporáneo
            se funden en armonía, las costumbres colombianas inspiran a preservar la identidad propia mientras se abraza
            el mundo con los brazos abiertos.
          </p>
        </Fieldset>
      </div>
      <div class="m-auto">
        <Fieldset class="sm:text-2xl md:text-2xl bg-option1" legend="Clima" :toggleable="true"  collapsed="true">
          <p class="m-0 p-4 text-sm sm:text-lg md:text-xl text-white">
            En las variadas geografías de Colombia, el clima juega un papel fundamental en la vida diaria de sus
            habitantes. Desde las tierras cálidas de la costa caribeña hasta las frescas montañas de la cordillera de
            los Andes, cada región experimenta sus propias estaciones y fenómenos climáticos. En las tierras bajas del
            Magdalena, el sol tropical brilla con intensidad, creando un ambiente propicio para la vida exuberante de la
            selva y las playas de arena blanca. Sin embargo, en las alturas de Bogotá y otras ciudades andinas, el clima
            templado ofrece un respiro fresco de las altas temperaturas, con días soleados y noches frescas que invitan
            a pasear por las calles adoquinadas.
          </p>
        </Fieldset>
      </div>
      <div class="m-auto">
        <Fieldset class="sm:text-2xl md:text-2xl bg-option3" legend="Deportes extremos" :toggleable="true"  collapsed="true">
          <p class="m-0 p-4 text-sm sm:text-lg md:text-xl text-white">
            En Colombia, la pasión por los deportes extremos encuentra su máxima expresión en paisajes desafiantes y
            emocionantes. Desde escalar las cumbres de los Andes hasta surfear las olas del Caribe, cada rincón del país
            ofrece una aventura única. Ya sea lanzándose en parapente sobre valles verdes o surcando rápidos en kayak,
            la diversidad geográfica de Colombia es el escenario perfecto para aquellos que buscan emociones fuertes. En
            cada salto, cada remada, se encuentra una conexión especial con la naturaleza y una experiencia inolvidable
            que alimenta el espíritu aventurero de quienes se atreven a explorar sus límites.
          </p>
        </Fieldset>
      </div>
      <div class="m-auto">
        <Fieldset class="sm:text-2xl md:text-2xl bg-primary" collapsed="true" legend="Regiones" :toggleable="true">
          <p class="m-0 p-4 text-sm sm:text-lg md:text-xl text-white">

            Colombia se divide en seis principales regiones geográficas, cada una con características únicas y
            distintivas. Al norte, la Región Caribe, bañada por el Mar Caribe, es famosa por sus playas de arena blanca
            y ciudades como Cartagena y Barranquilla. En el centro del país, la Región Andina, dominada por la
            cordillera de los Andes, alberga ciudades importantes como Bogotá y Medellín, ofreciendo climas que varían
            desde templados hasta cálidos. Hacia el suroeste, la Región Pacífica cautiva con su densa selva tropical, su
            biodiversidad y su cultura afrocolombiana, siendo Cali y Buenaventura sus puntos destacados. Al este, la
            llana Región Orinoquía se destaca por su biodiversidad en los Llanos Orientales, con ciudades como
            Villavicencio y Yopal. Hacia el sureste, la Región Amazónica ofrece una selva tropical densa y rica
            biodiversidad, con Leticia como su principal centro urbano. Por último, la Región Insular, compuesta por
            islas en el Mar Caribe como San Andrés y Providencia, atrae con sus hermosas playas y aguas cristalinas.
            Esta diversidad geográfica, cultural y climática convierte a Colombia en un destino cautivador para
            explorar.
          </p>
        </Fieldset>
      </div>
    </div>
  </div>
</template>

<script setup>
import Fieldset from 'primevue/fieldset';


</script>

<style scoped>
.fondo2 {
  background-image: url('/src/assets/img/fondo2.png');
  background-size: cover;

  /* Ajusta la imagen para cubrir todo el contenedor */
  background-position: center;
  /* Centra la imagen */
  height: 100%;
  min-height: 400px;
  /* Altura igual al 100% de la altura de la ventana del navegador */
  z-index: -1;
}




/* Estilos adicionales personalizados */
</style>