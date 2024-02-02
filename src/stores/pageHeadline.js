import { defineStore } from 'pinia';

export const usePageHeadlineStore = defineStore("pageHeadline", () => {

const bannerData = {
        hero: {
            section: {class: "headline headline--image headline--fifty headline--volunteers", aria: "get-online-week"},
            heading: {class: "headline__heading headline__heading--hero", 
                text: "Vue.js Components"},
            paragraph: {class: "headline__text headline__text--hero", 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            button: {class: "headline__button headline__button--hero", 
                text: "Get involved now!"},
            div: {class: ""}
        },
        home: {
                section: {class: "headline headline--blue headline--thirty headline--half", aria: "misdemeanours"},
                heading: {class: "headline__heading headline__heading--box", 
                    text: "Welcome to the home of the Justice Department of Fakelandia."},
                paragraph: {class: "headline__text headline__text--box", 
                    text: "Here you can view a chart representing misdemeanours committed by our citizens today"},
                button: {class: "headline__button headline__button--box", text: "Learn more about us"},
                div: {class: "image-box"}
        },
        fakelandia: {
            section: {class: "headline headline--blue headline--thirty headline--half", aria: "misdemeanours"},
            heading: {class: "headline__heading headline__heading--box", 
                text: "Welcome to the home of the Justice Department of Fakelandia"},
            paragraph: {class: "", 
                text: ""},
            button: {class: "", text: ""},
            div: {class: "chart-box"}
        },
        marsrover: { 
            section: {class: "", aria: ""},
            heading: {class: "", 
                text: ""},
            paragraph: {class: "", 
                text: ""},
            button: {class: "", text: ""},
            div: {class: ""}
        }
    };

    function getSection(view) {
        return bannerData[view].section;
    }

    function getHeading(view) {
        return bannerData[view].heading;
    }

    function getParagraph(view) {
        return bannerData[view].paragraph;
    }

    function getButton(view) {
        return bannerData[view].button;
    }

    function getDiv(view) {
        return bannerData[view].div;
    }

    return {
        getSection,
        getHeading,
        getParagraph,
        getButton,
        getDiv
    }
})