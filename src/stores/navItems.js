import { defineStore } from 'pinia';

export const useNavItemsStore = defineStore("navItems", {
  state: () => ({
    menu: [
      {id: 1, name: 'home', title: "Home"},
      {id: 2, name: 'fakelandia', title: "Fakelandia"},
      {id: 4, name: 'marsrover', title: "Mars Rover"}
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