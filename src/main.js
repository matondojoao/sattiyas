import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import http from '@/services/http.js'
import { createPinia } from 'pinia'
import '@/assets/js/jquery.slick.min.js'
import '@/assets/js/animated-headline.js'
const app = createApp(App)

app.use(router)
const pinia = createPinia()

app.use(pinia)
app.config.globalProperties.$http = http

app.config.globalProperties.$filters = {
  formatCurrency(price) {
    const parsedPrice = parseFloat(price);

    if (isNaN(parsedPrice)) {
      console.error('O valor não é um número.');
      return '';
    }

    const formattedPrice = parsedPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formattedPrice;
  }
}


app.mount('#app')
