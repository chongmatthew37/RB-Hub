import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#1b5e20',
        secondary: '#ffe082',
      },
      dark: {
        primary: '#1b5e20',
        secondary: '#ffe082',
      }
    },
  },
});
