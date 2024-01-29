import { defineStore } from 'pinia';
import fakelandiaLogo from "./../assets/fakelandiaLogo.png";
import HHHlogo from "./../assets/logoHHH.png";
import iteduLogo from "./../assets/itedulogo.png";
import smallLogo from "./../assets/logoSmall.png";

export const useViewSettingsStore = defineStore("viewSettings", {
  state: () => ({
    imageSources: {
      home: fakelandiaLogo,
      about: HHHlogo,
      contact: iteduLogo,
      items: smallLogo,
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