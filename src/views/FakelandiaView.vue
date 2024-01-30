<script setup>
import PageHeader from '@/components/PageHeader.vue';
import DataChart from '@/components/DataChart.vue';
const view = "fakelandia";
import {CHART_DATA} from './../data/chartData';
const {title, subtitle, titleColor, titleBackground, chartType, width, height, 
        fontStyle, titleSize, subtitleSize, chartColors, colorBackground, dataPoints}
        = CHART_DATA[view].chart;
</script>
<template>
  <PageHeader :view = "view"/>
  <main class = "main-content main-content--fakelandia">  
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

<style lang="scss" scoped >

.main-content {
  background-color: lighten($lemon, 40%);
}
.header {
    background-color: lighten($blueberry, 42%);
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