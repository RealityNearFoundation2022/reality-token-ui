import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetifyConfig from './vuetify'
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'
import './index.css'

import { Buffer } from 'buffer'

import { Wallet } from './assets/js/nearwallet'

import { createStore } from 'vuex'

window.Buffer = window.Buffer || Buffer

const vuetify = vuetifyConfig

// Inicializa la conexión a NEAR
const nearConfig = {
    networkId: 'mainnet',//'testnet', configuracion de produccion cambiar si se encuentra en local
    nodeUrl: 'https://rpc.near.org', // 'https://rpc.testnet.near.org',
    contractName: 'token.realitymaster.near' ,// 'token.guxal.testnet',
    walletUrl: 'https://mynearwallet.com/' ,// 'https://testnet.mynearwallet.com/',
  }


const wallet = new Wallet({ createAccessKeyFor: nearConfig.contractName, network: nearConfig.networkId })


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
        store.commit('setWallet', new Wallet({ createAccessKeyFor: nearConfig.contractName, network: nearConfig.networkId })) // Nueva instancia no logueada
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
