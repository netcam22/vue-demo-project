import { defineStore } from 'pinia';

export const useViewSettingsStore = defineStore("viewSettings", {
  state: () => ({
    imageSources: {
      home: "fakelandiaLogo.png",
      about: "logoHHH.png",
      contact: "itedulogo.png",
      items: "logoSmall.png",
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