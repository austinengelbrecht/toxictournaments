<template>
  <form
    @submit.prevent="submitEmail"
    class="cta-form flex flex-col flex-nowrap gap-4"
  >
    <label for="newsletter-signup" class="capitalize font-bold text-xl">
      Enter Email Address
    </label>
    <input
      class="cta-form-input p-4 rounded-lg text-black text-lg"
      type="email"
      name="News Letter Signup"
      id="newsletter-signup"
      placeholder="Enter Email Address"
      v-model="userEmail"
    />

    <button type="submit" class="glow-on-hover p-4 w-[200px] text-center">
      Join The Toxic Community
    </button>
  </form>
</template>

<script>
//import axios from "axios";
import supabase from "@/lib/supabase.js";

export default {
  data() {
    return {
      userEmail: "",
      isSubmitted: false,
    };
  },
  methods: {
    submitEmail() {
      async function submitEmail() {
        const { data, error } = await supabase
          .from('Email Newsletter')
          .insert([
            { email: this.userEmail, created_at: 'otherValue' },
          ])
      }


    //   axios
    //     .post(
    //       "https://toxic-tournaments-default-rtdb.firebaseio.com/email-signup.json",
    //       {
    //         email: this.userEmail,
    //       }
    //     )
    //     .then((repsonse) => {
    //       console.log(repsonse);
    //       console.log("I was successful!");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       console.log("I hit an error!");
    //     });

    //   this.userEmail = "";
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/glow-on-hover";
</style>
