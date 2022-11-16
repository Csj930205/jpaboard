import { createRouter, createWebHistory} from 'vue-router'
import PageHome from '@/views/PageHome.vue'
import BoardList from "@/views/board/BoardList";
import BoardDetail from "@/views/board/BoardDetail";
import BoardWrite from "@/views/board/BoardWrite";
import LoginPage from "@/views/common/LoginPage";

const routes =[
    {
        path: '/',
        name: 'PageHome',
        component: PageHome
    },
    {
        path: '/member',
        name: 'member',
        component: () => import('../views/PageAbout.vue')
    },
    {
        path: '/board/list',
        name: 'BoardList',
        component: BoardList
    },
    {
        path: '/board/detail',
        name: 'BoardDetail',
        component: BoardDetail
    },
    {
        path: '/board/write',
        name: 'BoardWrite',
        component: BoardWrite
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router