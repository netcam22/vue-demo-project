import { defineStore } from 'pinia';

export const useHeroBannerStore = defineStore("heroBanner", {
    state: () => ({
        section: {class: "headline headline--image headline--fifty headline--volunteers", aria: "get-online-week"},
        heading: {class: "headline__heading headline__heading--hero", text: "Vue.js Components"},
        paragraph: {class: "headline__text headline__text--hero", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        button: {class: "headline__button headline__button--hero", text: "Get involved now!"}
    }),

    getters: {
        getSection: (state) => {
            return state.section;
        },
        getHeading: (state) => {
            return state.heading;
        },
        getParagraph: (state) => {
            return state.paragraph;
        },
        getButton: (state) => {
            return state.button;
        }
    },
    actions: {

}
})