import { defineStore } from 'pinia';
import { CHART_VALUES } from '@/data/chartData';
import useCountData from "./../composables/useCountData";
import useGetChartData from "./../composables/useGetChartData";
import useChartDataPoints from './../composables/useChartDataPoints';

export const useDataTallyStore = defineStore("dataTally", () => {

    const countTally = {
      fakelandia: {...CHART_VALUES["fakelandia"].countValues},
      marsrover: {...CHART_VALUES["marsrover"].countValues},
    }

    function setDataPoints(dataPoints, view) {
      setDataCount(view);
      return useChartDataPoints(dataPoints, countTally[view]);
    }

    function setDataCount(view) {
      const {countValues, dataType, noOfValues} = CHART_VALUES[view];
      countTally[view] = useCountData(dataType, useGetChartData(dataType, noOfValues), countValues);
    }

    function getTypeOfTally(dataType) {
      return countTally[dataType];
    };

    function addToTally(dataType, kind) {
      countTally[dataType] = {...countTally[dataType], [kind]:countTally[dataType][kind]+=1}
    };
  
    return {
      setDataPoints,
      setDataCount,
      getTypeOfTally,
      addToTally
    }
})