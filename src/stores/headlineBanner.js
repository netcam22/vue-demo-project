import { defineStore } from 'pinia';

export const useHeadlineBannerStore = defineStore("headlineBanner", {
state: () => ({
    section: {class: "headline headline--blue headline--thirty headline--half", aria: "helping-people"},
    heading: {class: "headline__heading headline__heading--box", 
    text: "We are a social change charity, helping people to improve their lives through digital."},
    paragraph: {class: "headline__text headline__text--box", 
    text: "We tackle the most pressing issues of our time, working with partners in thousands of communities across the UK and further afield."},
    button: {class: "headline__button headline__button--box", text: "Learn more about us"},
    image: {class: "image-box image-box--charity-people image-box--thirty"}
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