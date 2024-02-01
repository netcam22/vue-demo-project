import { defineStore } from 'pinia';
import { MISDEMEANOUR_COUNT_VALUES, DAY_COUNT_VALUES } from '@/data/chartData';

export const useDataTallyStore = defineStore("dataTally", () => {

    const countTally = {
      fakelandia: MISDEMEANOUR_COUNT_VALUES,
      marsrover: DAY_COUNT_VALUES,
    }

    function getTypeOfTally(dataType) {
      return countTally[dataType];
    };

    function setTally(dataType, data) {
      countTally[dataType] = data;
    };

    function addToTally(dataType, kind) {
      countTally[dataType] = {...countTally[dataType], [kind]:countTally[kind]+=1}
    };
  
    return {
      getTypeOfTally,
      setTally,
      addToTally
    }
})