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
        path: '/fakelandia',
        name: 'fakelandia',
        component: () => import('../views/FakelandiaView.vue')
      },
      {
        path: '/music',
        name: 'music',
        component: () => import('../views/MusicView.vue')
      },
      
      {
        path: '/hhh',
        name: 'hhh',
        component: () => import('../views/HhhView.vue')
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