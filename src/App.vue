<template>
  <div class="overflow-x-hidden w-screen">
    <!-- Botón de WhatsApp -->
    <div class="fixed bottom-10 sm:right-10 right-2 z-10">
      <button @click="openWhatsApp"
        class="bg-green-500 hover:bg-green-600 text-white sm:p-2 rounded-full shadow-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-whatsapp hidden sm:block"
          viewBox="0 0 16 16">
          <path
            d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-whatsapp block sm:hidden"
          viewBox="0 0 16 16">
          <path
            d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </button>
    </div>

    <!-- Navegación -->
    <div class="flex flex-col" :class="isHomeRoute ? 'fondo' : ''">
      <nav class="w-full flex justify-between px-4 py-4 bg-transparent" :class="isHomeRoute ? '' : '!bg-option2'">
        <!-- Logo -->
        <div class="logo">
          <h2 class="text-white text-xs md:text-4xl font-bold">ODISEA SALVAJE</h2>
        </div>

        <!-- Menú de navegación -->
        <div class="justify-end my-auto hidden sm:block text-white text-xl">
          <router-link class="px-4 hover:underline" to="/">Inicio</router-link>
          <router-link class="px-4 hover:underline" :class="{ 'bg-secondary p-5': route.path === '/about' }"
            to="/about">Quienes somos</router-link>
          <router-link class="px-4 hover:underline" :class="{ 'bg-secondary p-5': route.path === '/contactenos' }"
            to="/contactenos">Reservación</router-link>
          <router-link class="px-4 hover:underline" :class="{ 'bg-secondary p-5': route.path === '/blog' }"
            to="/blog">Blog</router-link>
        </div>

        <!-- Botón de menú para móviles -->
        <div class="sm:hidden flex items-center">
          <button @click="toggleMenu" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Menú desplegable -->
      <div v-if="showMenu" class="sm:hidden bg-option2 text-white text-xl flex flex-col items-center menu-slide-responsive">
        
        <router-link
          class="px-4 py-2 hover:underline transition-all duration-200 ease-in-out hover:bg-secondary rounded-md" to="/"
          @click="toggleMenu">Inicio</router-link>
        <router-link
          class="px-4 py-2 hover:underline transition-all duration-200 ease-in-out hover:bg-secondary rounded-md"
          :class="{ 'bg-secondary p-5': route.path === '/about' }" to="/about" @click="toggleMenu">Quienes
          somos</router-link>
        <router-link
          class="px-4 py-2 hover:underline transition-all duration-200 ease-in-out hover:bg-secondary rounded-md"
          :class="{ 'bg-secondary p-5': route.path === '/contactenos' }" to="/contactenos"
          @click="toggleMenu">Reservación</router-link>
        <router-link
          class="px-4 py-2 hover:underline transition-all duration-200 ease-in-out hover:bg-secondary rounded-md"
          :class="{ 'bg-secondary p-5': route.path === '/blog' }" to="/blog" @click="toggleMenu">Blog</router-link>
      </div>

      <!-- Contenido de la página -->
      <div v-if="isHomeRoute" class="m-auto justify-center w-full flex flex-col">
        <h1 class="sm:text-[80px] text-4xl text-center text-white mx-auto sm:w-3/6 w-[95%] font-bold leading-none">Colombia Extrema</h1>
        <h2 class="sm:text-xl tex-sm mt-4 text-center text-white mx-auto sm:w-[50%] w-[90%]">Donde la adrenalina y el potencial se unen en
          deportes extremos que te dejarán sin aliento.</h2>

        <div class="mt-8 flex flex-wrap justify-center gap-6">
          <a href="/blog" class="bg-secondary p-4 text-white">Conoce Colombia</a>
          <a href="/contactenos" class="border-white border-2 p-4 text-white">Contactenos</a>
        </div>
      </div>
    </div>

    <router-view />

    <!-- Footer -->
    <footer>
      <div class="w-screen h-full bg-option2 flex flex-col">
        <h2 class="text-xl md:text-2xl text-white font-bold mt-6 mx-auto">Contactenos</h2>
        <p class="text-base md:text-lg text-neutral-400 mx-auto mt-4"><b>Email:</b> <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=odiseaSalvaje@gmail.com">odiseaSalvaje@gmail.com</a></p>
        <p class="text-base md:text-lg text-neutral-400 mx-auto mt-4"><b>Telefono:</b> 3146757570</p>
      </div>
    </footer>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isHomeRoute = ref(route.path === '/');
const showMenu = ref(false);

watch(route, (to) => {
  isHomeRoute.value = to.path === '/';
});

const openWhatsApp = () => {
  window.open('https://wa.me/+573146757570', '_blank');
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>


<style>
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

button {
  transition: transform 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}

/* Estilos para la animación del menú */
.menu-slide-responsive {
  animation: slideDown1 0.3s ease-out;
  position: relative;
}

@keyframes slideDown1 {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Estilo para los enlaces del menú */
.menu-slide-responsive a {
  width: 90%;
  text-align: center;
  margin: 5px 0;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}



/* Hover effect para los enlaces */
.menu-slide-responsive a:hover {
  background-color: rgba(0, 0, 0, 0.2);
}


/* Estilos adicionales personalizados */
</style>
