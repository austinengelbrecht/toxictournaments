<template>
  <form
    @submit.prevent="submitEmail"
    class="cta-form flex flex-col flex-nowrap"
  >
    <label for="newsletter-signup" class="capitalize text-bold">
      Enter Email Address
    </label>
    <input
      class="cta-form-input"
      type="email"
      name="News Letter Signup"
      id="newsletter-signup"
      placeholder="Enter Email Address"
      v-model="userEmail"
    />

    <button type="submit" class="glow-on-hover button">
      Join The Toxic Community
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userEmail: "",
      isSubmitted: false,
    };
  },
  methods: {
    submitEmail() {
      axios
        .post(
          "https://toxic-tournaments-default-rtdb.firebaseio.com/email-signup.json",
          {
            email: this.userEmail,
          }
        )
        .then((repsonse) => {
          console.log(repsonse);
          console.log("I was successful!");
        })
        .catch((error) => {
          console.log(error);
          console.log("I hit an error!");
        });

      this.userEmail = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/glow-on-hover";
</style>
