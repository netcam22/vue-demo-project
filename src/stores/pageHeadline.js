import { defineStore } from 'pinia';

export const usePageHeadlineStore = defineStore("pageHeadline", () => {

const bannerData = {
        hero: {
            section: {class: "headline--hero headline--thirty headline-half", aria: "get-online-week"},
            heading: {class: "headline__heading--hero", 
                text: "Vue 3 Reusable Components"},
            paragraph: {class: "headline__text headline__text--hero", 
            text: "This is a demo project that I have developed with Vue 3. I have been experiementing with creating reusable components to which custom data, logic and styling can be applied. All three pages, Home, Fakelandia and Mars Rover, draw from the same set of components."},
            button: {class: "headline__button headline__button--hero", 
                link: "https://github.com/netcam22/vue-demo-project", 
                text: "Check out my Github repo"},
            div: {class: ""}
        },
        react: {
                section: {class: "headline--blue headline--thiry headline--half", aria: "misdemeanours"},
                heading: {class: "headline__heading--box", 
                    text: "My React project which inspired the Vue 3 Fakelandia page:"},
                paragraph: {class: "", 
                    text: ""},
                button: {class: "headline__button headline__button--box", 
                link: "https://fakelandia-vite.pages.dev/",
                text: "Fakelandia React Project"},
                div: {class: ""}
        },
        javascript: {
            section: {class: "headline--orange headline--thirty headline--half", aria: "misdemeanours"},
            heading: {class: "headline__heading--box", 
                text: "My JavaScript project which inspired the Vue 3 Mars Rover page:"},
            paragraph: {class: "", 
                text: ""},
            button: {class: "headline__button headline__button--box", 
            link: "https://netcam22.github.io/mars-rover/public/",
            text: "Mars Rover Javascript Project"},
            div: {class: ""}
        },
        fakelandia: {
            section: {class: "headline--blue headline--thirty headline--half", aria: "misdemeanours"},
            heading: {class: "headline__heading--box", 
                text: "Welcome to the home of the Justice Department of Fakelandia"},
            paragraph: {class: "", 
                text: ""},
            button: {class: "", link: "", text: ""},
            div: {class: "chart-box"}
        },
        marsrover: { 
            section: {class: "", aria: ""},
            heading: {class: "", 
                text: ""},
            paragraph: {class: "", 
                text: ""},
            button: {class: "", link: "", text: ""},
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