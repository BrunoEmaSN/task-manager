import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

import App from './App.vue'
import router from './router'
import './assets/index.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.use(router)
app.use(Vue3Toastify, {
  autoClose: 2000
} as ToastContainerOptions)

app.mount('#app')
