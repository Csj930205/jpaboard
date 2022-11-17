import './assets/w3.css'
import './assets/common.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import store from "./vuex/store";

const app = createApp(App)
app.config.globalProperties.$axios = axios; // 전역변수로 설정 컴포넌트에서 this.$axios를 호출 할 수 있다.
app.config.globalProperties.$serverUrl = '//localhost:8888' // api server
app.config.globalProperties.$store = store

app.use(router).use(store).mount('#app')

