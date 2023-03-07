<template>
  <!-- todo - how to add event for closing the modal to background only -->
  <div class="modal">
    <div class="modal-content">
      <div class="bg-onyx-1 p-8 rounded-2xl flex flex-col">
        <span @click="closeModal" class="">
          <Icon icon="fa6-regular:circle-xmark" color="white" width="32" />
        </span>

        <h2 class="capitalize text-3xl">Tell Us a little about yourself?</h2>

        <form @submit.prevent="registerEmail" class="flex flex-col gap-8">
          <div class="flex flex-col">
            <label for="name"> What's Your Name? </label>
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
            <label for="email" class=""> What's your email? </label>
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
            <label for="gammer-tag">What's your gammer tag?</label>
            <input
              class="px-4 py-2 text-black"
              type="text"
              name=""
              id="gammer-tag"
              v-model="userGameTag"
              placeholder="Enter Your Gammer Tag"
            />
          </div>

          <div>
            <!-- <button type="button" @click="">Cancel</button> -->
            <button
              type="submit"
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
import { Icon } from "@iconify/vue";
import { supabase } from "@/supabase";

import { useEmailStore } from "../../store/email";
import { mapActions } from "pinia";

export default {
  components: { Icon },
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

    async registerEmail() {
      let currentDate = new Date().toJSON().slice(0, 10);

      await supabase
        .from("Email Newsletter Subscription")
        .insert([
          {
            email: this.userEmail,
            name: this.userName,
            game_tag: this.userGameTag,
            created_at: currentDate,
          },
        ])
        .then((returns) => {
          console.log("returned: ", returns);
          this.signUpUser();
          this.closeModal();
        })
        .catch(console.error());
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
  max-width: 500px;
}
</style>
