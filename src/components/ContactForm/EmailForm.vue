<template>
  <form @submit.prevent="submitEmail">
    <div>
      <label for="newsletter-signup" class="capitalize"
        >Enter Email Address</label
      >
      <input
        type="email"
        name="News Letter Signup"
        id="newsletter-signup"
        v-model="userEmail"
      />
    </div>

    <button type="submit">Join The Toxic Community</button>
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

<style lang="scss" scoped></style>
