import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import http from '@/services/http.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
