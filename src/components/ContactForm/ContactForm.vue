<template>
  <form @submit.prevent="submitEmail" class="flex flex-col flex-nowrap gap-4">
    <label for="newsletter-signup" class="capitalize font-bold text-xl">
      Enter Email Address
    </label>
    <input
      class="p-4 rounded-lg text-black text-lg"
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
import { supabase } from "@/supabase";

export default {
  data() {
    return {
      userEmail: "",
      isSubmitted: false,
    };
  },
  methods: {
    async submitEmail() {
      let currentDate = new Date().toJSON().slice(0, 10);
      console.log(currentDate);

      await supabase
        .from("Email Newsletter Subscription")
        .insert([{ email: this.userEmail, created_at: currentDate }]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/glow-on-hover";
</style>
