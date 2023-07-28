import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

console.log(import.meta.env.VITE_BASE_URL)
console.log('2222222222')

const app = createApp(App)


app.use(createPinia())
   .use(router)
   .mount('#app')
//
// console.log(_.a)
// console.log($.b)
