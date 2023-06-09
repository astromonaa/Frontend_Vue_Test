import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {store, key} from './store'
import {router} from './router/routes'

createApp(App)
.use(store, key)
.use(router)
.mount('#app')
