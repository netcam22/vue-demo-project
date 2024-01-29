<script setup>
import PageHeader from '@/components/PageHeader.vue';
import PieChart from '@/components/PieChart.vue';
import * as CanvasJS from '@canvasjs/charts';
CanvasJS.addColorSet("chartColors", ["#aeb1d7", "#7177ba", "#343c9c", 
"#f48428", "#efb948", "#f4ce7f", "#f9e3b6"]);
const chartColors = "chartColors";
const view = "marsrover";
const title = "Mars Rover";
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const lastSunday = new Date(today.setDate(today.getDate()-today.getDay())).toLocaleDateString("en-GB");
const subtitle = `Mars Rover Journeys on week ending Sunday ${lastSunday}`;
const titleColor = "#242a6d";
const titleBackground = "#aeb1d7";
const dataPoints = [
            { label: "Monday",  y: 6},
            { label: "Tuesday", y: 4},
            { label: "Wednesday", y: 2},
            { label: "Thursday",  y: 3},
            { label: "Friday", y: 5},
            { label: "Saturday", y: 2},
            { label: "Sunday",  y: 1},
        ];
const chartType = "column";
const width = "100%";
const height = "30wv";
const fontStyle = "Courier";
const titleSize = 35;
const subtitleSize = 18;
</script>

<template>
  <PageHeader :view = "view" />
  <main class = "main-content main-content--marsrover">  
<PieChart 
  :chartColors = "chartColors"
  :title = "title" 
  :subtitle = "subtitle"
  :titleColor = "titleColor" 
  :titleBackground = "titleBackground"
  :dataPoints = "dataPoints"
  :chartType = "chartType"
  :width = "width"
  :height = "height"
  :fontStyle = "fontStyle"
  :titleSize = "titleSize"
  :subtitleSize = "subtitleSize"
  />
  </main>
</template>

<style lang="scss" scoped>
.header {
    background-image: url("/src/assets/images/space.png");
    background-repeat: repeat-x;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    padding: 2% 0 2% 2%;
}
</style>