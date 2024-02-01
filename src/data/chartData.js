import * as CanvasJS from '@canvasjs/charts';
CanvasJS.addColorSet("marsRoverColors", ["#aeb1d7", "#7177ba", "#343c9c", 
"#f48428", "#efb948", "#f4ce7f", "#f9e3b6"]);

import { MISDEMEANOURS, MISDEMEANOUR_COUNT_VALUES } from './selectBoxData';

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const lastSunday = new Date(today.setDate(today.getDate()-today.getDay())).toLocaleDateString("en-GB");

export const CHART_DATA = {
    home: {

    },
    fakelandia: {
        chart: {
            title: "Misdemeanours",
            subtitle: `Reported on ${now.toLocaleDateString("en-GB")}`,
            titleColor: "#242a6d",
            titleBackground: "#f3ec18",
            chartType: "pie",
            width: "100%",
            height: "30wv",
            fontStyle: "Algeria",
            titleSize: 25,
            subtitleSize: 18,
            chartColors: "",
            colorBackground: "#fdfcda",
            dataPoints: [
                { name: "rudeness", label: "Mild Public Rudeness",  y: 1, color: "#28ade5"},
                { name: "vegetables", label: "Not Eating Your Vegetables", y: 4, color: "#8ead4f"},
                { name: "lift", label: "Speaking In a Lift", y: 2, color: "#242a6d" },
                { name: "united", label: "Supporting Manchester United",  y: 3, color: "#ef1e24"},
            ],
            countValues: MISDEMEANOUR_COUNT_VALUES,
            DATA_TYPE: MISDEMEANOURS
        }
    },
    marsrover: {
        chart: {
            title: "Mars Rover",
            subtitle: `Mars Rover Journeys on week ending Sunday ${lastSunday}`,
            titleColor: "#242a6d",
            titleBackground: "#aeb1d7",
            chartType: "column",
            width: "100%",
            height: "30wv",
            fontStyle: "Courier",
            titleSize: 35,
            subtitleSize: 18,
            chartColors: "marsRoverColors",
            colorBackground: "#fdf8ec",
            dataPoints: [
                { label: "Monday",  y: 6},
                { label: "Tuesday", y: 4},
                { label: "Wednesday", y: 2},
                { label: "Thursday",  y: 3},
                { label: "Friday", y: 5},
                { label: "Saturday", y: 2},
                { label: "Sunday",  y: 1},
            ],
        }
    }
}