<template>
  <v-app-bar :elevation="2" color="black" app>
    <v-toolbar-title>
      <img src="/assets/logos/LogoOnelineWhite.png" :width="200" @click="scrollToSection('#description')"
        alt="Descripción de la imagen" />

    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-for="item in menuItems" :key="item.id" text @click="scrollToSection(item.path)">
        {{ item.label }}
      </v-btn>
    </v-toolbar-items>
      <LoginButton></LoginButton>
  </v-app-bar>
</template>
  
<script>
import LoginButton from './LoginButton.vue'

export default {
  name: 'NavBar',
  props: ['layoutView'],
  components: { LoginButton },
  data() {
    return {
      menuItems: [
        { id: 1, label: 'Reality Token', path: '#description' },
        { id: 2, label: '¿What is Reality Near?', path: '#about' },
        { id: 3, label: 'Swap Realities', path: '#purchase' },
        { id: 4, label: 'Contact us', path: '#contact' },
      ],
    };
  },

  computed: {
    buttonLogin() {
      return this.signIn ? 'Sign out' : 'Log in'
    }
  },
  methods: {

    scrollToSection(path) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
 
};
</script>
