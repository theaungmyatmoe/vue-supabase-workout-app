import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import CreateWorkout from '../components/CreateWorkout.vue'
import {useAuthStore} from "@/stores/auth";
import {rule} from "postcss";

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
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/create',
            component: CreateWorkout,
            name: 'CreateWorkout',
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (to.meta.requiresAuth && !authStore.isLoggedIn) next({name: 'Login'})
    else next();

})

export default router;