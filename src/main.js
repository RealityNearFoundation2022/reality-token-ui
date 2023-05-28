import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetifyConfig from './vuetify'
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'

const app = createApp(App)

const vuetify = vuetifyConfig

app.use(router)
app.use(vuetify)
app.mount('#app')