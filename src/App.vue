<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

</script>

<template>
  <v-app>
    <NavBar />
    <RouterView class="mt-12 "/>
  </v-app>
</template>
