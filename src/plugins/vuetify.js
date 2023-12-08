/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import colors from 'vuetify/lib/util/colors'

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    iconfont: 'md' || 'fa'
  },
  theme: {
    themes: {
      dark: {
        background: colors.grey.lighten3, // Not automatically applied
      },
      light: {
        background: colors.shades.white, // If not using lighten/darken, use base to return hex
        colors: {
          primary: "#fffdfa",
          secondary: "#5CBBF6",
        },
      },
    },
  },
});
