import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'

const app = createApp(App)
app.mount('#app')
app.use(router)
