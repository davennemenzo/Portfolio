import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  icons: {
    iconfont: 'mdi', // Set the icon font to Material Design Icons
  },
});

export default vuetify;
