import { ROUTES } from "@/utils/routes"
import { createRouter, createWebHistory } from "vue-router"
import Dashboard from '../pages/Dashboard.vue'
import Library from '../pages/Library.vue'


const routes = [
    { path: ROUTES.HOME_PAGE, name: "Dashboard", component: Dashboard },
    { path: ROUTES.LIBRARY_PAGE, name: "Library", component: Library },
    { path: ROUTES.LIKED_SONGS_PAGE, name: "Liked Songs", component: Library }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router