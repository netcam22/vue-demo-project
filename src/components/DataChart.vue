<script setup>
import {CHART_DATA} from './../data/chartData';
import useGetChartData from "./../composables/useGetChartData";
import useCountData from "./../composables/useCountData";
import useChartDataPoints from './../composables/useChartDataPoints';
import {useDataTallyStore} from '@/stores/dataTally';
import { appStore } from '../store.js';
const store = useDataTallyStore(appStore);

const props = defineProps({view: String});

const {title, subtitle, titleColor, titleBackground, chartType, width, height, 
        fontStyle, titleSize, subtitleSize, chartColors, colorBackground, dataPoints,
        countValues, DATA_TYPE, noOfValues, animationDuration} = CHART_DATA[props.view].chart;

const count = useCountData(DATA_TYPE, useGetChartData(DATA_TYPE, noOfValues), countValues);
console.log("count", count);
console.log("store", store.getMisdemeanours);
store.setMisdemeanours(count);
console.log("store", store.getMisdemeanours);
const updatedDataPoints = useChartDataPoints(dataPoints, store.getMisdemeanours);

const options = {
            colorSet: chartColors,
            zoomEnabled: true,
            animationEnabled: true,
            animationDuration: animationDuration,
            backgroundColor: colorBackground,	
            title:{
            text: title,
            fontSize: titleSize,
            fontColor: titleColor,
            backgroundColor: titleBackground,
            padding: 5,
            margin: 2,
            fontFamily: fontStyle
            },
        subtitles: [{
            text: subtitle,
            fontSize: subtitleSize,
            fontFamily: fontStyle,
            fontColor: titleColor,
            padding: 5,
            margin: 2
        }],
        data: [{
            type: chartType,
            dataPoints: updatedDataPoints
        }]
        };
const styleOptions = {width: width, height: height}
</script>

<template>
<CanvasJSChart :options="options" :styles="styleOptions"/>
</template>