import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/main.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

const app = createApp(App)
app.use(PrimeVue, {
  theme: { preset: Aura },
  options: {
    darkModeSelector: '.dark', // Disables automatic dark mode

    cssLayer: {
      name: 'primevue',
      order: 'theme, base, primevue',
    },
  },
})
app.mount('#app')
