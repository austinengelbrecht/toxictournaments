<template>
  <!-- todo - how to add event for closing the modal to background only -->
  <div class="modal">
    <div class="modal-content">
      <div class="bg-onyx-1 p-8 rounded-2xl flex flex-col gap-8">
        <h2 class="capitalize text-4xl">Tell Us a little about yourself?</h2>

        <form @submit.prevent="subscribe()" class="flex flex-col gap-8">
          <div class="flex flex-col">
            <label for="email" class=""> What's your email? (Required)</label>
            <input
              class="px-4 py-2 text-black"
              type="email"
              name=""
              id="email"
              placeholder="Enter Your Email Address"
              v-model="userEmail"
            />
          </div>

          <div class="flex flex-col">
            <label for="name"> What's Your Name? (Optional)</label>
            <input
              class="px-4 py-2 text-black"
              type="text"
              name=""
              id="name"
              v-model="userName"
              placeholder="Enter Your Name"
            />
          </div>

          <div class="flex flex-col">
            <label for="gammer-tag">What's your gammer tag? (Optional)</label>
            <input
              class="px-4 py-2 text-black"
              type="text"
              name=""
              id="gammer-tag"
              v-model="userGameTag"
              placeholder="Enter Your Gammer Tag"
              required
            />
          </div>

          <div class="flex flex-row justify-end gap-4">
            <button @click="closeModal">Cancel</button>
            <button
              type="submit"
              id="email_newsletter_submit"
              class="glow-on-hover p-4 w-[200px] text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useEmailStore } from "../../store/email";
import { mapActions } from "pinia";

export default {
  data() {
    return {
      userEmail: "",
      userName: "",
      userGameTag: "",
      isSubmitted: false,
    };
  },
  methods: {
    ...mapActions(useEmailStore, ["closeModal", "signUpUser"]),

    subscribe() {
      axios
        .post(
          "https://toxic-tournaments-default-rtdb.firebaseio.com/subscribe.json",
          {
            email: this.userEmail,
            username: this.userName,
            gametag: this.userGameTag,
          }
        )
        .then(() => {
          this.signUpUser();
          this.closeModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/glow-on-hover";

.modal {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 1;

  background-color: rgb(0, 0, 0, 0.85);
}

.modal-content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  height: 100%;
  max-width: 600px;
}
</style>
