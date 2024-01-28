import { createRouter, createWebHistory } from 'vue-router';
import { appStore } from '../store.js';
import { useRouterStore } from '@/stores/router';
const store = useRouterStore(appStore);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: store.routes
})

export default router