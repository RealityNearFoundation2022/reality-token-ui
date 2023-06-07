import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetifyConfig from './vuetify'
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'

// main.js o store/index.js
import { Buffer } from 'buffer'

import { Wallet } from './assets/js/nearwallet'

import { createStore } from 'vuex'

window.Buffer = window.Buffer || Buffer

const vuetify = vuetifyConfig

// Inicializa la conexión a NEAR
const nearConfig = {
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    contractName: 'token.guxal.testnet',
    walletUrl: 'https://testnet.mynearwallet.com/',
  }


const wallet = new Wallet({ createAccessKeyFor: nearConfig.contractName })


const store = createStore({
  state() {
    return {
      wallet: null,
    }
  },
  mutations: {
    setWallet(state, wallet) {
      state.wallet = wallet
    }
  }
})

async function initialize() {
    let isSignedIn = await wallet.startUp();
    
    if (isSignedIn) {
        store.commit('setWallet', wallet)
        // setBalanceToken(await getTokenBalance())
        console.log('login')
    } else {
        store.commit('setWallet', new Wallet({ createAccessKeyFor: nearConfig.contractName })) // Nueva instancia no logueada
        // setBalanceToken(null)
        console.log('no login')
    }
}


initialize().then(() => {
  const app = createApp(App)
  app.use(router)
  app.use(store) // Asegúrate de usar la tienda Vuex en tu aplicación
  app.use(vuetify)
  app.mount('#app')
});
