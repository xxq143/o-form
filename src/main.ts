import { createApp } from 'vue'
import './style.css'
import elementPlus from 'element-plus'
import "element-plus/dist/index.css"
import oForm from 'o-form'
import "o-form/dist/index.css"
import router from '@/router'
import App from './App.vue'

const app = createApp(App)
app.use(elementPlus)
    .use(oForm)
    .use(router)
    .mount('#app')
