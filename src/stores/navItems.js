import { defineStore } from 'pinia';

export const useNavItemsStore = defineStore("navItems", {
  state: () => ({
    menu: [
      {id: 1, name: 'home', title: "Home"},
      {id: 2, name: 'items', title: "Items"},
      {id: 3, name: 'about', title: "About"},
      {id: 4, name: 'contact', title: "Contact"}
    ]
  }
  ),
  getters: {
    getMenu: (state) => {
      return state.menu;
    }
  },
  actions: {

  }
})