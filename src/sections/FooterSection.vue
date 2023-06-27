<template>
    <v-row class="d-flex justify-space-between align-center py-4 px-sm-8 px-4">
      <v-col cols="12" md="4" class="image-col ">
        <img
          src="/assets/logos/LogoWhite.png"
          :width="100"
          :height="100"
          class="align-self-center"
          alt="Descripción de la imagen"
        />
      </v-col>
      <v-col cols="6" md="4" class="text-center mobile-text-start">
        <p class="">© Reality Near Foundation {{ new Date().getFullYear() }}</p>
      </v-col>
      <v-col cols="6" md="4" class="text-end d-flex flex-column">
        <a
          v-for="footer in footerArray"
          :key="footer.path"
          :href="footer.link"
          target="_blank"
          rel="noreferrer"
        >
          {{ footer.title }}
        </a>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import footerArray from '../utils/footer.json'
  export default {
    data() {
      return {
        footerArray,
      };
    },
  };
  </script>
  
  <style lang="css" scoped>
  a {
    text-decoration: none;
    font-size: 13px;
    color: white;
  }
  
  a:hover {
    font-size: 14px;
  }
  
  @media (max-width: 960px) {
    .image-col {
      display: none !important;
    }
    .mobile-text-start {
    text-align: start !important;
   
  }
  }
  </style>
  
  