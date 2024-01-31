import { defineStore } from 'pinia';

export const useHeadlineBannerStore = defineStore("headlineBanner", {
state: () => ({
    section: {class: "headline headline--blue headline--thirty headline--half", aria: "misdemeanours"},
    heading: {class: "headline__heading headline__heading--box", 
    text: "Welcome to the home of the Justice Department of Fakelandia."},
    paragraph: {class: "headline__text headline__text--box", 
    text: "Here you can view a chart representing misdemeanours committed by our citizens today."},
    button: {class: "headline__button headline__button--box", text: "Learn more about us"},
    image: {class: "image-box"}
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
    },
    getImage: (state) => {
        return state.image;
    }
},
actions: {

}
})