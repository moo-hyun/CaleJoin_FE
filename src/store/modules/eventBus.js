// src/store/modules/eventBus.js
import { defineStore } from 'pinia';

export const useEventBus = defineStore('eventBus', {
  state: () => ({
    currentMonth: '',
  }),

  getters: {

    getCurrentMonth(state) {
      return state.currentMonth;
    }

  },

  actions: {
    updateCurrentMonth(month) {

      console.log('month112 : ' + month);

      this.currentMonth = month;
    },
  },
});
