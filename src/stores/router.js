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
        path: '/marsrover',
        name: 'marsrover',
        component: () => import('../views/MarsRoverView.vue')
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