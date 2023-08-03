import {
    createWebHistory,
    createRouter
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import InstanaAssistantView from '../views/InstanaAssistantView.vue'
import TurbonomicAssistantView from '../views/TurbonomicAssistantView.vue'
import CP4AIOpsAssistantView from '../views/CP4AIOpsAssistantView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
history: createWebHistory(),
routes: [
    {
        path: '/',
        component: HomeView,
        name: 'HomeView',
    },
    {
        path: '/about',
        component: AboutView,
        name: 'AboutView',
    },
    {
        path: '/instana-assistant',
        component: InstanaAssistantView,
        name: 'InstanaAssistantView',
    },
    {
        path: '/turbonomic-assistant',
        component: TurbonomicAssistantView,
        name: 'TurbonomicAssistantView',
    },
    {
        path: '/cp4aiops-assistant',
        component: CP4AIOpsAssistantView,
        name: 'CP4AIOpsAssistantView',
    },
    {
        path: '/:pathMatch(.*)*', 
        component: NotFoundView,
        name: 'NotFoundView'
    },
]
})

export { router }