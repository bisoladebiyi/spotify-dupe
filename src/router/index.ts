import { ROUTES } from "@/utils/routes"
import { createRouter, createWebHistory } from "vue-router"
import Dashboard from '../pages/Dashboard.vue'
import Library from '../pages/Library.vue'
import LikedSongs from '../pages/LikedSongs.vue'

const routes = [
    { path: ROUTES.HOME_PAGE, name: "Dashboard", component: Dashboard },
    { path: ROUTES.LIBRARY_PAGE, name: "Library", component: Library },
    { path: ROUTES.LIKED_SONGS_PAGE, name: "LikedSongs", component: LikedSongs }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router