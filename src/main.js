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
        if (typeof price !== 'number') {
            console.error('O valor não é um número.');
            return '';
          }
        
          const formattedPrice = price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
        
          return formattedPrice;
        }
    }

app.mount('#app')
