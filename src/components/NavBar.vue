<template>
    <v-app-bar :elevation="2" color="black" app class="ma-0">
      <v-toolbar-title>
        <img src="/assets/logos/LogoOnelineWhite.png" :width="200" @click="scrollToSection('#description')" alt="Descripción de la imagen" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-list-item v-for="item in menuItems" :key="item.id" text @click="scrollToSection(item.path)">
          {{ item.label }}
        </v-list-item>
      </v-toolbar-items>
      <LoginButton class="hidden-sm-and-down"></LoginButton>
      <v-app-bar-nav-icon class="d-flex d-sm-flex d-md-none" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    </v-app-bar>

    <v-navigation-drawer  class="ma-0" color="black" v-model="drawer" temporary location="right">
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.id" @click="scrollToSection(item.path)">
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <LoginButton ></LoginButton>
    </v-navigation-drawer>
</template>

  
<script>
import LoginButton from './LoginButton.vue'

export default {
  name: 'NavBar',
  props: ['layoutView'],
  components: { LoginButton },
  data() {
    return {
      drawer: false,
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
      this.drawer = false;
    },
  },
 
};
</script>
<style lang="css" scoped>
.v-list-item:hover{
  font-size: 18px;
  font-weight: bold;
}
</style>