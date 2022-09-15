import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/sign-up',
            component: SignUp,
            name: 'SignUp'
        }
    ]
})

export default router
