<script>
import * as CanvasJS from '@canvasjs/charts';
CanvasJS.addColorSet("colors1", ["#BA68C8", "#9575CD", "#7986CB", "#64B5F6", "#4FC3F7", "#4DD0E1", "#4DB6AC", "#81C784", "#DCE775", "#FFD54F", "#FFB74D"]);
export default {
data() {
    return {
    options: {
        colorSet: "colors1",
        theme: "light2",
        title: {
        text: "Cow Milk Production in India"
        },
        axisY: {
        title: "In Million Tonne"
        },
        data: [{
        yValueFormatString: "### Mt",
        dataPoints: [
			{label: "2005-06", y: 37.344},
			{label: "2006-07", y: 39.759},
			{label: "2007-08", y: 41.148},
			{label: "2008-09", y: 46.822},
			{label: "2009-10", y: 49.810},
			{label: "2010-11", y: 52.200},
			{label: "2011-12", y: 54.903},
			{label: "2012-13", y: 57.770},
			{label: "2013-14", y: 62.195},
			{label: "2014-15", y: 66.423},
			{label: "2015-16", y: 73.646}
		]
        }]
    },
    styleOptions: {
        width: "100%",
        height: "360px"
    }
    }
    
}
}
</script>
<template>
<CanvasJSChart :options="options" :styles="styleOptions" />
</template> 