import { defineStore } from 'pinia';
import HomeView from '../views/HomeView.vue';

export const useRouterStore = defineStore("router", {
  state: () => ({
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/items',
        name: 'items',
        component: () => import('../views/ItemsView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue')
      }
    ]
  }
  ),
  getters: {
    getRoutes: (state) => {
      return state.routes;
    }
  },
  actions: {

  }
})