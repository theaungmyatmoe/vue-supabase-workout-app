import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'

import Toast, {POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    position: POSITION.TOP_RIGHT
});

app.mount('#app')
