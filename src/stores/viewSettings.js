import { defineStore } from 'pinia';

export const useStuffStore = defineStore("pageStuff", {
  state: () => ({
      stuff: {
        home: "stuff",
        fakelandia: "stuff",
        marsrover: "stuff"
      },
  }
  ),
  getters: {
    getStuff: (state) => {
      return state.stuff;
    }
  },
  actions: {

  }
})