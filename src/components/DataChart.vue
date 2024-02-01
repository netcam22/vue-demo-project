<script setup>
import {CHART_DATA} from './../data/chartData';
import {useDataTallyStore} from '@/stores/dataTally';
import {appStore} from '../store.js';

const props = defineProps({view: String});

const {title, subtitle, titleColor, titleBackground, chartType, width, height, 
        fontStyle, titleSize, subtitleSize, chartColors, colorBackground, dataPoints,
        animationDuration} = CHART_DATA[props.view].chart;

const {getDataPoints} = useDataTallyStore(appStore);
const data = getDataPoints(dataPoints, props.view);
console.log("data in chart", data);

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
            dataPoints: getDataPoints(dataPoints, props.view)
        }]
        };
const styleOptions = {width: width, height: height}
</script>

<template>
<CanvasJSChart :options="options" :styles="styleOptions"/>
</template>