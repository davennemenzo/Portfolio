import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import vuetify from './vuetify'; // Import the Vuetify configuration

const app = createApp(App);

app.use(router);
app.use(vuetify); // Use Vuetify

app.mount('#app');
