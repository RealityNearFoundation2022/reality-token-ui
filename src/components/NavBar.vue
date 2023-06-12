<template>
  <v-app-bar :elevation="2" color="black" app>
    <v-toolbar-title>
      <img src="/assets/logos/logo_letter_white_reality.png" :width="80"
      @click="scrollToSection('#description')" 
      alt="Descripción de la imagen" />

    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn  v-for="item in menuItems" :key="item.id" text @click="scrollToSection(item.path)">
        {{ item.label }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
  
<script>
export default {
  name: 'NavBar',
  props: [ 'layoutView' ],
  data() {
    return {
      menuItems: [
        { id: 1, label: 'Reality Token', path: '#description' },
        { id: 2, label: '¿What is Reality Near?', path: '#about' },
        { id: 3, label: 'Purchase Realities', path: '#purchase' },
        { id: 4, label: 'Contact us', path: '#contact' },
      ],
    };
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
  