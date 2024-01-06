import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import http from '@/services/http.js'
import { createPinia } from 'pinia'
import '@/assets/js/jquery.slick.min.js'
import '@/assets/js/animated-headline.js'
import $ from "jquery";
const app = createApp(App)

app.use(router)
const pinia = createPinia()

app.use(pinia)

app.config.globalProperties.$http = http

app.mount('#app')
