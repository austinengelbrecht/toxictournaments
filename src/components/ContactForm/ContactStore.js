import { defineStore } from "pinia";

export const useStore = defineStore("signup", {
  state: () => {
    return {
      isSignedup: false,
      modalOpen: false,
    };
  },
  actions: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
});
