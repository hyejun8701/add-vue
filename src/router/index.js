import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import('@/views/Login'),
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})