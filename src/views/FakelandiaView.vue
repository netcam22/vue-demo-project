<script setup>
import PageHeader from '@/components/PageHeader.vue';
import PieChart from '@/components/PieChart.vue';
const chartColors = [];
const view = "fakelandia";
const title = "Misdemeanours";
const date = new Date().toLocaleDateString("en-GB");
const subtitle = `Reported on ${date}`;
const titleColor = "#242a6d";
const titleBackground = "#f3ec18";
const dataPoints = [
            { label: "Mild Public Rudeness",  y: 1, color: "#28ade5"},
            { label: "Not Eating Your Vegetables", y: 4, color: "#8ead4f"},
            { label: "Speaking In a Lift", y: 2, color: "#242a6d" },
            { label: "Supporting Manchester United",  y: 3, color: "#ef1e24"},
        ];
const chartType = "pie";
const width = "100%";
const height = "30wv";
const fontStyle = "Algeria";
const titleSize = 35;
const subtitleSize = 18;
</script>

<template>
  <PageHeader :view = "view" />
  <main class = "main-content main-content--fakelandia">  
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

<style lang="scss" scoped >
.header {
    background-image: url("/src/assets/images/houses.png");
    background-repeat: repeat-x;
    background-position: bottom;
    font-family: "Algeria";
    font-weight: 500;
    padding: 3% 0 0 0;
    @include respond-medium {
        padding: 2% 0 7% 2%;
    }
  }
</style>