import { createApp } from 'vue'
import 'normalize.css'
import 'assets/css/index.less'

import router from './router/index'
import store from './store/index'
import { setupStore } from './store'

import globalRegister from './global'

import App from './App.vue'

const app = createApp(App)

app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
