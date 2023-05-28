<template>
    <v-app-bar :elevation="2" color="black" app>
      <v-toolbar-title>
        <img src="/assets/logos/logo_letter_white_reality.png" :width="80" alt="Descripción de la imagen" />

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="item in menuItems"
          :key="item.id"
          text
        >
          {{ item.label }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        menuItems: [
          { id: 1, label: 'Reality Token' },
          { id: 2, label: '¿What is Reality Near?' },
          { id: 3, label: 'Purchase Realities' },
          { id: 4, label: 'Contact us' },
        ],
      };
    },
  };
  </script>
  