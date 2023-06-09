import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const myCustomDarkTheme = {
  dark: true,
  icons: {
    iconfont: 'mdi',
  },
  colors: {
    background: '#202125',
    surface: '#FFFFFF',
    primary: '#000000',
    'primary-darken-1': '#5CCC99',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  fontFamily: 'Source Sans Pro, sans-serif',
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomDarkTheme,
    },
  },
})
