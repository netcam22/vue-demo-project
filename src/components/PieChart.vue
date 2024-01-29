<script>

export default {
    data() {
    return {
        options: {
        zoomEnabled: true,
        animationEnabled: true,
        animationDuration: 2000,	
        title:{
            text: "Misdemeanours",
            fontSize: 35,
            fontColor: "#242a6d",
            fontFamily: "Courier"
        },
        subtitles: [{
            text: `Reported on ${Date()}`,
            backgroundColor: "#f3ec18",
            fontSize: 18,
            fontFamily: "Courier",
            fontColor: "#242a6d",
            padding: 7
        }],
        data: [{
            color: "#FFE066",
            type: "pie",
            dataPoints: [
            { label: "Mild Public Rudeness",  y: 1, color: "#28ade5"},
            { label: "Not Eating Your Vegetables", y: 4, color: "#8ead4f"},
            { label: "Speaking In a Lift", y: 2, color: "#242a6d" },
            { label: "Supporting Manchester United",  y: 3, color: "#ef1e24"},
        ]
        }]
        },
        styleOptions: {
        width: "100%",
        height: "30vw"
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