import * as CanvasJS from '@canvasjs/charts';
CanvasJS.addColorSet("marsRoverColors", ["#aeb1d7", "#7177ba", "#343c9c", 
"#f48428", "#efb948", "#f4ce7f", "#f9e3b6"]);

export const MISDEMEANOURS = ['rudeness','vegetables','lift','united',];
export const MISDEMEANOUR_COUNT_VALUES = MISDEMEANOURS.reduce((acc, item) => {return {...acc, [item]: 0}}, {});
export const DAYS = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
export const DAY_COUNT_VALUES = DAYS.reduce((acc, item) => {return {...acc, [item]: 0}}, {});

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const lastSunday = new Date(today.setDate(today.getDate()-today.getDay())).toLocaleDateString("en-GB");

export const CHART_VALUES = {
    fakelandia: {
        countValues: MISDEMEANOUR_COUNT_VALUES,
        dataType: MISDEMEANOURS,
        noOfValues: 10,
    },
    marsrover: {
        countValues: DAY_COUNT_VALUES,
        dataType: DAYS,
        noOfValues: 100,
    }
}

export const CHART_DATA = {
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
                { name: "rudeness", label: "Mild Public Rudeness", color: "#28ade5"},
                { name: "vegetables", label: "Not Eating Your Vegetables", color: "#8ead4f"},
                { name: "lift", label: "Speaking In a Lift", color: "#242a6d" },
                { name: "united", label: "Supporting Manchester United", color: "#ef1e24"},
            ],
            animationDuration: 1000
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
                {name:"monday", label: "Monday"},
                {name: "tuesday",label: "Tuesday"},
                {name: "wednesday", label: "Wednesday"},
                {name: "thursday", label: "Thursday"},
                {name: "friday", label: "Friday"},
                {name: "saturday", label: "Saturday"},
                {name: "sunday", label: "Sunday"},
            ],
            animationDuration: 2000
        }
    }
}