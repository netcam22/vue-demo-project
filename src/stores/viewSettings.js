import { defineStore } from 'pinia';

export const useViewSettingsStore = defineStore("viewSettings", {
  state: () => ({
    imageSources: {
      home: "/src/assets/fakelandiaLogo.png",
      about: "/src/assets/logoHHH.png",
      contact: "/src/assets/itedulogo.png",
      items: "/src/assets/logoSmall.png",
      },
  }
  ),
  getters: {
    getImageSources: (state) => {
      return state.imageSources;
    },
    getHomeImageSources: (state) => {
      return state.imageSources.home;
    },
    getItemsImageSources: (state) => {
      return state.imageSources.items;
    },
    getAboutImageSources: (state) => {
      return state.imageSources.about;
    },
    getContactSettings: (state) => {
      return state.settings.contact;
    },
  },
  actions: {

  }
})