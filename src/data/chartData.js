import * as CanvasJS from '@canvasjs/charts';
CanvasJS.addColorSet("marsRoverColors", ["#aeb1d7", "#7177ba", "#343c9c", 
"#f48428", "#efb948", "#f4ce7f", "#f9e3b6"]);

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const lastSunday = new Date(today.setDate(today.getDate()-today.getDay())).toLocaleDateString("en-GB");

export const CHART_DATA = {
    home: {

    },
    fakelandia: {
        chart: {
            chartColors: "",
            title: "Misdemeanours",
            subtitle: `Reported on ${now.toLocaleDateString("en-GB")}`,
            headingColor: "#242a6d",
            backgroundColor: "#f3ec18",
            chartType: "pie",
            width: "100%",
            height: "30wv",
            fontStyle: "Algeria",
            titleSize: 35,
            subtitleSize: 18,
            dataPoints: [
                { label: "Mild Public Rudeness",  y: 1, color: "#28ade5"},
                { label: "Not Eating Your Vegetables", y: 4, color: "#8ead4f"},
                { label: "Speaking In a Lift", y: 2, color: "#242a6d" },
                { label: "Supporting Manchester United",  y: 3, color: "#ef1e24"},
            ],
        }
    },
    marsrover: {
        chart: {
            chartColors: "marsRoverColors",
            title: "Mars Rover",
            subtitle: `Mars Rover Journeys on week ending Sunday ${lastSunday}`,
            headingColor: "#242a6d",
            backgroundColor: "#aeb1d7",
            chartType: "column",
            width: "100%",
            height: "30wv",
            fontStyle: "Courier",
            titleSize: 35,
            subtitleSize: 18,
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