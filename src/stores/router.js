import { defineStore } from 'pinia';

export const useRouterStore = defineStore("router", {
  state: () => ({
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
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