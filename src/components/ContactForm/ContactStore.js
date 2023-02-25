import { defineStore } from "pinia";

export const useStore = defineStore("signup", {
  state: () => {
    return {
      signedUp: false,
      modalOpen: false,
    };
  },
});
