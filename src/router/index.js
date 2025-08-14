import VueRouter from "vue-router";
import Vue from "vue";
import Login from "@/views/auth/Login.vue";
import Home from "@/views/home/Home.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: () => import('@/views/auth/Register.vue')
    // }
]


const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
