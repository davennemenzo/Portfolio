import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import "./styles/main.css";
import "preline/preline"; // Import Preline globally
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";



const app = createApp(App);
app.component("VueFlicking", Flicking);

app.use(router);


app.mount('#app');
