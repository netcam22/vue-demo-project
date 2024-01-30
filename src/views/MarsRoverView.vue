<script setup>
import PageHeader from '@/components/PageHeader.vue';
import DataChart from '@/components/DataChart.vue';
const view = "marsrover";
import {CHART_DATA} from './../data/chartData';
const {title, subtitle, titleColor, titleBackground, dataPoints, chartType, 
        width, height, fontStyle, titleSize, subtitleSize, chartColors} = CHART_DATA[view].chart;
</script>

<template>
  <PageHeader :view = "view" :backgroundColor = "titleBackground"/>
  <main class = "main-content main-content--marsrover">  
<DataChart 
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
    @include respond-medium {
        padding: 2% 0 2% 2%;
    }
}
</style>