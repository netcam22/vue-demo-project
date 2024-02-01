<script setup>
import {CHART_DATA} from './../data/chartData';
import {useChartDataPoints} from './../composables/useChartDataPoints';

const props = defineProps({view: String});

const {title, subtitle, titleColor, titleBackground, chartType, width, height, 
        fontStyle, titleSize, subtitleSize, chartColors, colorBackground, dataPoints,
        countValues, DATA_TYPE, noOfValues} = CHART_DATA[props.view].chart;

const updatedDataPoints = useChartDataPoints(dataPoints, countValues, DATA_TYPE, noOfValues);

const options = {
            colorSet: chartColors,
            zoomEnabled: true,
            animationEnabled: true,
            animationDuration: 2000,
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