import { defineStore } from "pinia";

export const useEmailStore = defineStore({
  id: "email",
  state: () => ({
    signedUp: false,
    modalOpen: false,
  }),
  getters: {
    isSignedUp(state) {
      return state.signedUp;
    },
    isModalOpen(state) {
      return state.modalOpen;
    },
  },
  actions: {
    signUpUser() {
      this.signedUp = true;
    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
});
