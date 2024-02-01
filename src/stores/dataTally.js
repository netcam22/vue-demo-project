import { defineStore } from 'pinia';
import { MISDEMEANOUR_COUNT_VALUES } from '@/data/chartData';

export const useDataTallyStore = defineStore("dataTally", {
  state: () => ({
        misdemeanours: MISDEMEANOUR_COUNT_VALUES
  }
  ),
  getters: {
    getMisdemeanours: (state) => {
      return state.misdemeanours;
    }
  },
  actions: {
    setMisdemeanours(data) {
      this.misdemeanours = data;
    },
    addMisdemeanour(kind) {
      this.misdemeanours = {...this.misdemeanours, [kind]:this.misdemeanours[kind]+=1}
    },
  },
})