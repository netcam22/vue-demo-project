<script>
export default {
    props: {
    title: String,
    subtitle: String,
    titleColor: String,
    dataPoints: Array,
    titleBackground: String,
    chartType: String,
    width: String,
    height: String,
    fontStyle: String,
    titleSize: Number,
    subtitleSize: Number,
    chartColors: String
    },
    data({title, subtitle, titleColor, titleBackground, dataPoints, chartType, 
        width, height, fontStyle, titleSize, subtitleSize, chartColors}) {
    return {
        options: {
        colorSet: chartColors,
        zoomEnabled: true,
        animationEnabled: true,
        animationDuration: 2000,	
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
            dataPoints: dataPoints
        }]
        },
        styleOptions: {
        width: width,
        height: height
        }
    }
    }
}
</script>
<template>
<CanvasJSChart :options="options" :styles="styleOptions"/>
</template>

<style lang="scss" scoped>
</style>