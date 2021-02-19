import { createApp } from 'vue'
import App from './App.vue'
import mosha from './index'

const app = createApp(App)
app.use(mosha)
app.mount('#app')
