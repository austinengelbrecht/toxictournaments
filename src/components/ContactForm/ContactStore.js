import { defineStore } from "pinia";

export const useAlertStore = defineStore("signedup", {
  state: () => {
    return {
      signedUp: false,
    };
  },
});
