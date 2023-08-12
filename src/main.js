import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/css/tailwind.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiMenuAlt4, BiSearch, IoNotifications } from 'oh-vue-icons/icons'

const app = createApp(App)
const pinia = createPinia()

addIcons(HiMenuAlt4, BiSearch, IoNotifications)

app.component("v-icon", OhVueIcon)

app.use(pinia)
app.use(router)

app.mount('#app')
