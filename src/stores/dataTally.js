import { defineStore } from 'pinia';
import { ref } from 'vue';
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
    const countTally = ref({
      fakelandia: fakelandiaValues,
      marsrover: marsroverValues
    });
    const selected = ref({});

    function getDataPoints(dataPoints, view) {
      return useChartDataPoints(dataPoints, countTally.value[view]);
    }

    function $subscribe(dataType) {
      return countTally.value[dataType];
    };

    function $patch(dataType, kind) {
      countTally.value[dataType] = 
      {...countTally.value[dataType], [kind]:countTally.value[dataType][kind]+=1}
    };

    function markSelected(dataType, option) {
      selected.value[dataType] = option;
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