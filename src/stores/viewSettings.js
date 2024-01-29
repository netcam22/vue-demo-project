import { defineStore } from 'pinia';
import fakelandiaLogo from "./../assets/images/fakelandiaLogo.png";
import roverLogo from "./../assets/images/mars.png";

export const useViewSettingsStore = defineStore("viewSettings", {
  state: () => ({
    imageSources: {
      home: undefined,
      fakelandia: fakelandiaLogo,
      marsrover: roverLogo
      },
      menuStyles: {
        home: "navbar__item--dark",
        fakelandia: "navbar__item--dark",
        marsrover: "navbar__item--light"
      },
  }
  ),
  getters: {
    getImageSources: (state) => {
      return state.imageSources;
    },
    getMenuStyles: (state) => {
      return state.menuStyles;
    }
  },
  actions: {

  }
})