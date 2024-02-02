import { defineStore } from 'pinia';
import { CHART_VALUES} from '@/data/chartData';
import useCountData from "./../composables/useCountData";
import useGetChartData from "./../composables/useGetChartData";
import useChartDataPoints from '@/composables/useChartDataPoints';

const initialValues = (view) => {
  const {countValues, dataType, noOfValues} = CHART_VALUES[view];
  return useCountData(dataType, useGetChartData(dataType, noOfValues), countValues);
}
const fakelandiaValues = initialValues("fakelandia");
const marsroverValues = initialValues("marsrover");

export const useDataTallyStore = defineStore("dataTally", () => {
    const countTally = {
      fakelandia: fakelandiaValues,
      marsrover: marsroverValues
    };
    const selected = {};

    function getDataPoints(dataPoints, view) {
      return useChartDataPoints(dataPoints, countTally[view]);
    }

    function $subscribe(dataType) {
      return countTally[dataType];
    };

    function $patch(dataType, kind) {
      countTally[dataType] = {...countTally[dataType], [kind]:countTally[dataType][kind]+=1}
    };

    function markSelected(dataType, option) {
      selected[dataType] = option;
    };
  
    return {
      selected,
      markSelected,
      getDataPoints,
      countTally,
      $subscribe,
      $patch
    }
})