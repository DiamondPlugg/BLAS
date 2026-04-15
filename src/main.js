import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Добавь этот импорт! (проверь путь к файлу роутера)

const app = createApp(App)

app.use(router) // Вот эта строчка оживит весь проект!
app.mount('#app')