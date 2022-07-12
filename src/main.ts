import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/** 全局样式 */
import './assets/scss/global.scss'

createApp(App).use(router).mount('#app')