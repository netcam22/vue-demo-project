<script setup>
import PageHeader from '@/components/PageHeader.vue';
import DataChart from '@/components/DataChart.vue';
const view = "marsrover";
import {CHART_DATA} from './../data/chartData';
const {title, subtitle, titleColor, titleBackground, chartType, width, height, 
        fontStyle, titleSize, subtitleSize, chartColors, colorBackground, dataPoints}
        = CHART_DATA[view].chart;
</script>

<template>
  <PageHeader :view = "view"/>
  <main class = "main-content main-content--marsrover">  
<DataChart 
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
  :chartColors = "chartColors"
  :colorBackground = "colorBackground"
  />
  </main>
</template>

<style lang="scss" scoped>
.main-content {
  background-color: lighten(#efb948, 35%);
}
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