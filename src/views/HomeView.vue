<template>
  <div class="home">

    <div class="bg-black">

      <!-- next prev -->
      <div class="buttons flex justify-center py-2 gap-4">
        <!-- ANDINA -->
        <button @click="carrousel(1)" class="bg-option3 rounded-md p-2 shadow-xl text-white hover:scale-125"
          :class="region == 'and' ? '!bg-option2' : ''">
          Andina
        </button>
        <!-- AMAZONÍA -->
        <button @click="carrousel(2)" class="bg-option3 rounded-md p-2 shadow-xl text-white hover:scale-125"
          :class="region == 'amz' ? '!bg-option2' : ''">
          Amazonía
        </button>
        <!-- CARIBE -->
        <button @click="carrousel(3)" class="bg-option3 rounded-md p-2 shadow-xl text-white hover:scale-125"
          :class="region == 'car' ? '!bg-option2' : ''">
          Caribe
        </button>
        <!-- INSULAR -->
        <button @click="carrousel(4)" class="bg-option3 rounded-md p-2 shadow-xl text-white hover:scale-125"
          :class="region == 'ins' ? '!bg-option2' : ''">
          Insular
        </button>
        <!-- ORINOQUIA -->
        <button @click="carrousel(5)" class="bg-option3 rounded-md p-2 shadow-xl text-white hover:scale-125"
          :class="region == 'orin' ? '!bg-option2' : ''">
          Orinoquía
        </button>
        <!-- Pacifico -->
        <button @click="carrousel(6)" class="bg-option3 rounded-md p-2 shadow-xl text-white hover:scale-125"
          :class="region == 'pac' ? '!bg-option2' : ''">
          Pacífico
        </button>
      </div>

      <!-- carousel Andina -->
      <div class="carousel slide slide1">
        <!-- list item -->
        <div class="list">
          <!-- parapente -->
          <div class="item deporte item1">
            <img src="../../src/assets/img/andina/parapente.jpg">
            <div class="content">
              <div class="author text-secondary">REGIÓN</div>
              <div class="title text-secondary">ANDINA</div>
              <div class="topic !text-white">Parapente</div>
              <div class="des bg-secondary py-1 px-2">
                <!-- lorem 50 -->
                Deporte en el que una persona despega desde una pendiente con una vela especialmente diseñada y planea
                en el aire utilizando corrientes térmicas y ascendentes. Disfrutando de vistas panorámicas y la
                sensación de libertad que ofrece volar.

              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- escalada -->
          <div class="item deporte item2 hidden">
            <img src="../../src/assets/img/andina/escalar1.jpg">
            <div class="content">
              <div class="author !text-white">REGIÓN</div>
              <div class="title text-secondary font-bold">ANDINA</div>
              <div class="topic !text-white">Escalada en roca</div>
              <div class="des">
                consiste en ascender superficies rocosas utilizando técnicas de equilibrio, fuerza y concentración. En
                la región andina, hay una gran variedad de lugares para practicar la escalada en roca, desde imponentes
                picos de montañas hasta formaciones rocosas únicas.
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- senderismo -->
          <div class="item deporte item3 hidden">
            <img src="../../src/assets/img/andina/senderismo.jpg">
            <div class="content">
              <div class="author !text-primary">REGIÓN</div>
              <div class="title text-option3">ANDINA</div>
              <div class="topic !text-option2">Senderismo</div>
              <div class="des bg-primary py-1 px-2">
                ofrece una experiencia única en la naturaleza. Los senderos serpentean a través de paisajes
                impresionantes, desde valles hasta cumbres, con opciones para todos los niveles. Es una forma
                emocionante de conectar con la naturaleza y explorar uno de los entornos más diversos del país.
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>

        </div>
        <!-- list thumnail -->
        <div class="thumbnail justify-end">
          <div class="item" @click="changeDeporte(1)">
            <img src="../../src/assets/img/andina/parapente2.jpg">
            <div class="content">
              <div class="title">
                Parapente
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(2)">
            <img src="../../src/assets/img/andina/escalar.jpg">
            <div class="content">
              <div class="title">
                Escalada en roca
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(3)">
            <img src="../../src/assets/img/andina/senderismo1.jpg">
            <div class="content">
              <div class="title">
                Senderismo
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>

        </div>


      </div>

      <!-- carousel AMAZONÍA -->
      <div class="carousel slide slide2 hidden">
        <!-- list item -->
        <div class="list">
          <!-- lucha tradicional -->
          <div class="item deporte item1">
            <img src="../../src/assets/img/amazonia/lucha.jpg">
            <div class="content">
              <div class="author text-white">REGIÓN</div>
              <div class="title text-secondary">AMAZONÍA</div>
              <div class="topic !text-white">Lucha tradicional</div>
              <div class="des bg-secondary py-1 px-2">

                Algunas comunidades indígenas practican estilos de lucha tradicionales que forman parte de su cultura
                ancestral.

              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- Tiro con arco -->
          <div class="item deporte item2 hidden">
            <img src="../../src/assets/img/amazonia/Tiro_con_arco.jpg">
            <div class="content">
              <div class="author">REGION</div>
              <div class="title text-option3">AMAZONÍA</div>
              <div class="topic !text-white">Tiro con arco</div>
              <div class="des bg-primary py-1 px-2">

                El tiro con arco es una habilidad importante para la caza y la pesca en la Amazonía, y a menudo se
                convierte en un deporte de competición entre las comunidades.

              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- Caza y pesca deportiva -->
          <div class="item deporte item3 hidden">
            <img src="../../src/assets/img/amazonia/caza.jpg">
            <div class="content">
              <div class="author">REGION</div>
              <div class="title font-bold">AMAZONÍA</div>
              <div class="topic !text-secondary font-bold">Caza y pesca</div>
              <div class="des bg-option3 py-1 px-2">
                Aunque no son deportes convencionales, la caza y la pesca son actividades fundamentales para muchas
                comunidades amazónicas y también pueden ser practicadas como deportes recreativos.
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
        </div>
        <!-- list thumnail -->
        <div class="thumbnail justify-end">
          <div class="item" @click="changeDeporte(1)">
            <img src="../../src/assets/img/amazonia/lucha.jpg">
            <div class="content">
              <div class="title">
                Lucha tradicional
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(2)">
            <img src="../../src/assets/img/amazonia/Tiro_con_arco.jpg">
            <div class="content">
              <div class="title">
                Tiro con arco
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(3)">
            <img src="../../src/assets/img/amazonia/caza.jpg">
            <div class="content">
              <div class="title">
                Caza y pesca deportiva
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>

        </div>


      </div>

      <!-- carousel caribe -->
      <div class="carousel slide slide3 hidden">
        <!-- list item -->
        <div class="list">
          <!-- kitesurf -->
          <div class="item deporte item1">
            <img src="../../src/assets/img/caribe/kitesurf.jpg">
            <div class="content">
              <div class="author text-white">REGIÓN</div>
              <div class="title text-secondary">CARIBE</div>
              <div class="topic !text-option3">Kitesurf</div>
              <div class="des bg-secondar py-1 px-2">
                <!-- lorem 50 -->
                Deporte acuático que combina el surf con una cometa de tracción. Los practicantes son impulsados por el
                viento mientras se deslizan sobre el agua en una tabla especial, utilizando la cometa para controlar la
                velocidad y la dirección.

              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- Windsurf -->
          <div class="item deporte item2 hidden">
            <img src="../../src/assets/img/caribe/windsurf.jpg">
            <div class="content">
              <div class="author text-primary font-bold">REGION</div>
              <div class="title text-secondary">CARIBE</div>
              <div class="topic !text-option3">Windsurf</div>
              <div class="des bg-primary">
                Deporte acuático en el que los participantes se deslizan sobre el agua en una tabla impulsada por el
                viento. Utilizan una vela montada en un mástil para aprovechar la fuerza del viento y controlar la
                dirección y la velocidad.
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- canyoning -->
          <div class="item deporte item3 hidden">
            <img src="../../src/assets/img/caribe/canyoning.jpg">
            <div class="content">
              <div class="author text-secondary font-bold">REGION</div>
              <div class="title">CARIBE</div>
              <div class="topic !text-option3 !font-bold">Canyoning</div>
              <div class="des bg-primary">
                Deporte que consiste en descender por cañones y gargantas utilizando técnicas como rappel, saltos,
                natación y caminatas. En el Caribe colombiano, esta actividad puede llevarse a cabo en entornos
                naturales impresionantes, como cascadas y cañones.
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>

        </div>
        <!-- list thumnail -->
        <div class="thumbnail justify-end">
          <div class="item" @click="changeDeporte(1)">
            <img src="../../src/assets/img/caribe/kitesurf.jpg">
            <div class="content">
              <div class="title">
                Kitesurf
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(2)">
            <img src="../../src/assets/img/caribe/windsurf.jpg">
            <div class="content">
              <div class="title">
                Windsurf
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(3)">
            <img src="../../src/assets/img/caribe/canyoning.jpg">
            <div class="content">
              <div class="title">
                Caza y pesca deportiva
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>

        </div>


      </div>

      <!-- carousel insular -->
      <div class="carousel slide slide4 hidden">
        <!-- list item -->
        <div class="list">
          <!-- Exploración de cuevas -->
          <div class="item deporte item1">
            <img src="../../src/assets/img/insular/Cuevas.jpg">
            <div class="content">
              <div class="author text-white">REGIÓN</div>
              <div class="title text-secondary">INSULAR</div>
              <div class="topic !text-option3">Exploración de cuevas</div>
              <div class="des bg-secondar py-1 px-2">
                <!-- lorem 50 -->
                La exploración de cuevas en Colombia presenta desafíos únicos debido a la diversidad geográfica y
                climática del país, así como a la necesidad de cuidar el frágil ecosistema subterráneo. Los espeleólogos
                deben estar bien preparados y equipados para enfrentar condiciones adversas y respetar las regulaciones
                locales para preservar estos valiosos entornos naturales.

              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- Saltos -->
          <div class="item deporte item2 hidden">
            <img src="../../src/assets/img/insular/Salto.png">
            <div class="content">
              <div class="author text-primary font-bold">REGION</div>
              <div class="title text-secondary">INSULAR</div>
              <div class="topic !text-option3">SALTOS DE ACANTILADOS</div>
              <div class="des bg-primary">
                Los saltos de acantilados en Colombia no solo ofrecen la emoción de lanzarse al vacío desde alturas
                impresionantes, sino también la oportunidad de disfrutar de vistas panorámicas espectaculares y de
                sumergirse en aguas cristalinas. Muchos de estos sitios son destinos turísticos populares, donde los
                visitantes pueden experimentar la combinación única de aventura y belleza natural que ofrece Colombia.
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- esclar -->
          <div class="item deporte item3 hidden">
            <img src="../../src/assets/img/insular/escalar.jpg">
            <div class="content">
              <div class="author text-secondary font-bold">REGION</div>
              <div class="title">INSULAR</div>
              <div class="topic !text-option3 !font-bold">ESCALAR</div>
              <div class="des bg-primary">
                Los escaladores pueden encontrar una variedad de estilos de escalada, desde rutas deportivas bien
                equipadas hasta desafiantes ascensos tradicionales en grietas y fisuras naturales. Además, muchos
                lugares de escalada en Colombia ofrecen opciones para escaladores de todos los niveles, desde
                principiantes hasta expertos.
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>

        </div>
        <!-- list thumnail -->
        <div class="thumbnail justify-end">
          <div class="item" @click="changeDeporte(1)">
            <img src="../../src/assets/img/insular/Cuevas.jpg">
            <div class="content">
              <div class="title">
                Kitesurf
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(2)">
            <img src="../../src/assets/img/insular/Salto.png">
            <div class="content">
              <div class="title">
                Windsurf
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(3)">
            <img src="../../src/assets/img/insular/escalar.jpg">
            <div class="content">
              <div class="title">
                Caza y pesca deportiva
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>

        </div>


      </div>

      <!-- carousel orinoquia -->
      <div class="carousel slide slide5 hidden">
        <!-- list item -->
        <div class="list">
          <!-- Rafting en aguas bravas: -->
          <div class="item deporte item1">
            <img src="../../src/assets/img/orinoquia/rafting.jpg">
            <div class="content">
              <div class="author text-white">REGIÓN</div>
              <div class="title text-secondary">ORINOQUIA</div>
              <div class="topic !text-option3">Rafting en aguas bravas</div>
              <div class="des bg-secondar py-1 px-2">
                <!-- lorem 50 -->
                Los ríos de la región, como el Meta, el Guaviare y el Orinoco, ofrecen
                emocionantes tramos de aguas rápidas ideales para el rafting. Esta actividad permite a los participantes
                navegar por rápidos y desafiantes tramos de río en balsas inflables, brindando una experiencia
                emocionante en medio de paisajes naturales impresionantes.

              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- Pesca -->
          <div class="item deporte item2 hidden">
            <img src="../../src/assets/img/orinoquia/pesca.png">
            <div class="content">
              <div class="author text-primary font-bold">REGION</div>
              <div class="title text-secondary">ORINOQUIA</div>
              <div class="topic !text-option3">Pesca deportiva</div>
              <div class="des bg-primary">
                La Orinoquia es conocida por sus ríos ricos en peces, como el dorado, el pavón y el bagre. La pesca
                deportiva en esta región ofrece la oportunidad de pescar especies de agua dulce en un entorno natural
                único, proporcionando una experiencia desafiante y gratificante para los amantes de la pesca.
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- Caminatas -->
          <div class="item deporte item3 hidden">
            <img src="../../src/assets/img/orinoquia/Caminatas.jpg">
            <div class="content">
              <div class="author text-secondary font-bold">REGION</div>
              <div class="title">ORINOQUIA</div>
              <div class="topic !text-option3 !font-bold">Caminatas y expediciones en la sabana</div>
              <div class="des bg-primary">
                Las extensas llanuras de la Orinoquia ofrecen oportunidades para
                realizar caminatas y expediciones a pie en un entorno natural único. Los viajeros pueden explorar la
                sabana, observar la vida silvestre y disfrutar de la tranquilidad y la belleza de los paisajes abiertos
                de la región.
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>

        </div>
        <!-- list thumnail -->
        <div class="thumbnail justify-end">
          <div class="item" @click="changeDeporte(1)">
            <img src="../../src/assets/img/orinoquia/rafting.jpg">
            <div class="content">
              <div class="title">
                Kitesurf
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(2)">
            <img src="../../src/assets/img/orinoquia/pesca.png">
            <div class="content">
              <div class="title">
                Windsurf
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(3)">
            <img src="../../src/assets/img/orinoquia/Caminatas.jpg">
            <div class="content">
              <div class="title">
                Caza y pesca deportiva
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>

        </div>


      </div>

      <!-- carousel Pacifico -->
      <div class="carousel slide slide6 hidden">
        <!-- list item -->
        <div class="list">
          <!-- ballenas -->
          <div class="item deporte item1">
            <img src="../../src/assets/img/pacifico/ballenas.jpg">
            <div class="content">
              <div class="author text-white">REGIÓN</div>
              <div class="title text-secondary">PACIFICA</div>
              <div class="topic !text-option3"> Avistamiento de ballenas</div>
              <div class="des bg-secondar py-1 px-2">
                <!-- lorem 50 -->
                Durante los meses de julio a octubre, las aguas del Pacífico colombiano son
                visitadas por ballenas jorobadas que migran desde el hemisferio sur en busca de aguas más cálidas para
                reproducirse. El avistamiento de ballenas es una actividad emocionante y única que permite a los
                visitantes presenciar de cerca a estos majestuosos mamíferos marinos.

              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- surf -->
          <div class="item deporte item2 hidden">
            <img src="../../src/assets/img/pacifico/surf.jpg">
            <div class="content">
              <div class="author text-primary font-bold">REGION</div>
              <div class="title text-secondary">PACIFICA</div>
              <div class="topic !text-option3">Surf de olas grandes</div>
              <div class="des bg-primary">
                La costa del Pacífico colombiano es conocida por sus olas grandes y poderosas, lo
                que la convierte en un destino ideal para los surfistas intrépidos que buscan emociones fuertes. Lugares
                como El Valle del Cauca, Chocó y Nariño son populares entre los surfistas que buscan desafiar las olas
                del Pacífico..
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>
          <!-- senderismo -->
          <div class="item deporte item3 hidden">
            <img src="../../src/assets/img/pacifico/senderismo.jpeg">
            <div class="content">
              <div class="author text-secondary font-bold">REGION</div>
              <div class="title">PACIFICA</div>
              <div class="topic !text-option3 !font-bold">Senderismo en la selva</div>
              <div class="des bg-primary">
                La región del Pacífico colombiano alberga una exuberante selva tropical llena de
                biodiversidad. Realizar senderismo en la selva es una forma única de explorar este ecosistema único,
                descubriendo cascadas, ríos, flora y fauna impresionantes en el proceso.
              </div>
              <div class="buttons">
                <button class="bg-primary rounded-md p-2 mt-4 hover:scale-125"><p>RESERVACIÓN</p></button>
              </div>
            </div>
          </div>

        </div>
        <!-- list thumnail -->
        <div class="thumbnail justify-end">
          <div class="item" @click="changeDeporte(1)">
            <img src="../../src/assets/img/pacifico/ballenas.jpg">
            <div class="content">
              <div class="title">
                Kitesurf
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(2)">
            <img src="../../src/assets/img/pacifico/surf.jpg">
            <div class="content">
              <div class="title">
                Windsurf
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>
          <div class="item" @click="changeDeporte(3)">
            <img src="../../src/assets/img/pacifico/senderismo.jpeg">
            <div class="content">
              <div class="title">
                Caza y pesca deportiva
              </div>
              <div class="description">
                Ver
              </div>
            </div>
          </div>

        </div>


      </div>

    </div>

  </div>
</template>

<script setup>
import $ from 'jquery';
import { ref, watch } from 'vue';

const region = ref('and');
let numSlide = 0;

watch(region, (value) => {

  region.value = value;
  console.log(region.value);


});

//cambiar slide regiones
const carrousel = num => {
  console.log("entro");

  $('.slide').addClass('hidden');
  $('.deporte').addClass('hidden');
  $('.item1').removeClass('hidden');

  switch (num) {
    case 1:
      $('.slide1').removeClass('hidden');
      region.value = 'and';
      break;

    case 2:
      $('.slide2').removeClass('hidden');
      region.value = 'amz';
      break;

    case 3:
      $('.slide3').removeClass('hidden');
      region.value = 'car';
      break;

    case 4:
      $('.slide4').removeClass('hidden');
      region.value = 'ins';
      break;

    case 5:
      $('.slide5').removeClass('hidden');
      region.value = 'orin';
      break;

    case 6:
      $('.slide6').removeClass('hidden');
      region.value = 'pac';
      break;

    default:
      break;
  }

}


//cambiar slide deportes
const changeDeporte = num => {
  console.log("entro");

  $('.deporte').addClass('hidden');

  switch (num) {
    case 1:
      $('.item1').removeClass('hidden');

      break;

    case 2:
      $('.item2').removeClass('hidden');

      break;

    case 3:
      $('.item3').removeClass('hidden');
      break;

    default:
      break;
  }

}







</script>

<style scoped>
body {
  margin: 0;
  background-color: #000;
  color: #eee;
  font-family: Poppins;
  font-size: 12px;
}

a {
  text-decoration: none;
}

header {
  width: 1140px;
  max-width: 80%;
  margin: auto;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;
}

header a {
  color: #eee;
  margin-right: 40px;
}

/* carousel */
.carousel {
  height: 100vh;
  margin-top: 0px;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.carousel .list .item {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0 0 0 0;
}

.carousel .list .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel .list .item .content {
  position: absolute;
  top: 10%;
  width: 1140px;
  max-width: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding-right: 30%;
  box-sizing: border-box;
  color: #fff;
  text-shadow: 0 5px 10px #0004;
}

.carousel .list .item .author {
  font-weight: bold;
  letter-spacing: 10px;
}

.carousel .list .item .title,
.carousel .list .item .topic {
  font-size: 5em;
  font-weight: bold;
  line-height: 1.3em;
}

.carousel .list .item .topic {
  color: #f1683a;
}

.carousel .list .item .buttons button {
  border: none;
  letter-spacing: 3px;
  font-family: Poppins;
  font-weight: 500;
}

.carousel .list .item .buttons button:nth-child(2) {
  background-color: transparent;
  border: 1px solid #fff;
  color: #eee;
}

/* thumbail */
.thumbnail {
  position: absolute;
  bottom: 50px;
  right: 2%;
  width: max-content;
  z-index: 100;
  display: flex;
  gap: 20px;
}

.thumbnail .item {
  width: 150px;
  height: 220px;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
}

.thumbnail .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.thumbnail .item .content {
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.thumbnail .item .content .title {
  font-weight: 500;
}

.thumbnail .item .content .description {
  font-weight: 300;
}



/* animation text in first item */

.carousel .list .item:nth-child(1) .content .author,
.carousel .list .item:nth-child(1) .content .title,
.carousel .list .item:nth-child(1) .content .topic,
.carousel .list .item:nth-child(1) .content .des,
.carousel .list .item:nth-child(1) .content .buttons {
  transform: translateY(50px);
  filter: blur(20px);
  opacity: 0;
  animation: showContent .5s 1s linear 1 forwards;
}

@keyframes showContent {
  to {
    transform: translateY(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

.carousel .list .item:nth-child(1) .content .title {
  animation-delay: 1.2s !important;
}

.carousel .list .item:nth-child(1) .content .topic {
  animation-delay: 1.4s !important;
}

.carousel .list .item:nth-child(1) .content .des {
  animation-delay: 1.6s !important;
}

.carousel .list .item:nth-child(1) .content .buttons {
  animation-delay: 1.8s !important;
}

/* create animation when next click */
.carousel.next .list .item:nth-child(1) img {
  width: 150px;
  height: 220px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  border-radius: 30px;
  animation: showImage .5s linear 1 forwards;
}

@keyframes showImage {
  to {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

.carousel.next .thumbnail .item:nth-last-child(1) {
  overflow: hidden;
  animation: showThumbnail .5s linear 1 forwards;
}

.carousel.prev .list .item img {
  z-index: 100;
}

@keyframes showThumbnail {
  from {
    width: 0;
    opacity: 0;
  }
}

.carousel.next .thumbnail {
  animation: effectNext .5s linear 1 forwards;
}

@keyframes effectNext {
  from {
    transform: translateX(150px);
  }
}

/* running time */

.carousel .time {
  position: absolute;
  z-index: 1000;
  width: 0%;
  height: 3px;
  background-color: #f1683a;
  left: 0;
  top: 0;
}

.carousel.next .time,
.carousel.prev .time {
  animation: runningTime 3s linear 1 forwards;
}

@keyframes runningTime {
  from {
    width: 100%
  }

  to {
    width: 0
  }
}


/* prev click */

.carousel.prev .list .item:nth-child(2) {
  z-index: 2;
}

.carousel.prev .list .item:nth-child(2) img {
  animation: outFrame 0.5s linear 1 forwards;
  position: absolute;
  bottom: 0;
  left: 0;
}

@keyframes outFrame {
  to {
    width: 150px;
    height: 220px;
    bottom: 50px;
    left: 50%;
    border-radius: 20px;
  }
}

.carousel.prev .thumbnail .item:nth-child(1) {
  overflow: hidden;
  opacity: 0;
  animation: showThumbnail .5s linear 1 forwards;
}

.carousel.next .arrows button,
.carousel.prev .arrows button {
  pointer-events: none;
}

.carousel.prev .list .item:nth-child(2) .content .author,
.carousel.prev .list .item:nth-child(2) .content .title,
.carousel.prev .list .item:nth-child(2) .content .topic,
.carousel.prev .list .item:nth-child(2) .content .des,
.carousel.prev .list .item:nth-child(2) .content .buttons {
  animation: contentOut 1.5s linear 1 forwards !important;
}

@keyframes contentOut {
  to {
    transform: translateY(-150px);
    filter: blur(20px);
    opacity: 0;
  }
}

@media screen and (max-width: 678px) {
  .carousel .list .item .content {
    padding-right: 0;
  }

  .carousel .list .item .content .title {
    font-size: 30px;
  }
}
</style>
