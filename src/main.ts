import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import money from 'v-money3'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(bootstrap)
app.use(money)
app.mount('#app')
