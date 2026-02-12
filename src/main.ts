import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/main.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { createPinia } from 'pinia'
import router from '@/router'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark',
    },
  },
})
app.mount('#app')
