import { defineStore } from 'pinia';
import fakelandiaLogo from "./../assets/fakelandiaLogo.png";
import hhhLogo from "./../assets/hhhLogo.png";
import musicLogo from "./../assets/musicLogo.png";

export const useViewSettingsStore = defineStore("viewSettings", {
  state: () => ({
    imageSources: {
      home: undefined,
      fakelandia: fakelandiaLogo,
      music: musicLogo,
      hhh: hhhLogo
      },
  }
  ),
  getters: {
    getImageSources: (state) => {
      return state.imageSources;
    }
  },
  actions: {

  }
})