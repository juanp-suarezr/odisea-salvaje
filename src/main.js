import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'primevue/resources/themes/aura-light-blue/theme.css';
import PrimeVue from 'primevue/config';

import "@/assets/css/tailwind.css";

createApp(App).use(store).use(router).use(PrimeVue).mount("#app");
