import { defineStore } from "pinia";
import { supabase } from "@/supabase";

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
    async registerEmail(email, name, game_tag) {
      let currentDate = new Date().toJSON().slice(0, 10);
      //console.log(currentDate);

      await supabase
        .from("Email Newsletter Subscription")
        .insert([
          {
            email: email,
            name: name,
            game_tag: game_tag,
            created_at: currentDate,
          },
        ])
        .then((returns) => {
          console.log("returned: ", returns);
          this.signUpUser();
        })
        .catch(console.error());
    },
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
