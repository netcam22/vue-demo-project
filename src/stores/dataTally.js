import { defineStore } from 'pinia';
import { MISDEMEANOUR_COUNT_VALUES, DAY_COUNT_VALUES } from '@/data/chartData';

export const useDataTallyStore = defineStore("dataTally", {
  state: () => ({
        fakelandia: MISDEMEANOUR_COUNT_VALUES,
        marsrover: DAY_COUNT_VALUES
  }
  ),
  actions: {
    getTypeOfTally(dataType) {
      return this[dataType];
    },
    setTally(dataType, data) {
      this[dataType] = data;
    },
    addToTally(dataType, kind) {
      this[dataType] = {...this[dataType], [kind]:this[dataType][kind]+=1}
    },
  },
})