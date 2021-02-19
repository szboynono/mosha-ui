import { createApp } from 'vue'
import App from './App.vue'
import mosha from './index'
import './styles/index.scss'
const app = createApp(App)
app.use(mosha)
app.mount('#app')
