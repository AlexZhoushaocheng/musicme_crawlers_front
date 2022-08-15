import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(ArcoVue);
app.mount('#app')
