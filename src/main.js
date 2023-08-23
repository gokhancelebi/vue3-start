import './assets/main.css'

import { createApp } from 'vue'
import App from './layouts/App.vue'
import router from './route'

const app = createApp(App)

app.use(router)

app.mount('#app')
