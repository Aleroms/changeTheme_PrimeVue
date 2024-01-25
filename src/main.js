import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primevue/resources/themes/lara-dark-green/theme.css";
import App from "./App.vue";

const app = createApp(App);
app.use(PrimeVue);
app.mount("#app");
