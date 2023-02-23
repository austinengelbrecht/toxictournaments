<template>
  <div class="modal" @click="$emit('closeForm')">
    <form
      @submit.prevent="submitEmail"
      class="modal-content flex flex-col flex-nowrap gap-4 bg-onyx-1"
    >
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
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { supabase } from "@/supabase";

export default {
  emits: ["closeForm"],
  data() {
    return {
      userEmail: "",
      userName: "",
      userGammerTag: "",
      isSubmitted: false,
    };
  },
  methods: {
    async submitEmail() {
      let currentDate = new Date().toJSON().slice(0, 10);
      console.log(currentDate);

      await supabase.from("Email Newsletter Subscription").insert([
        {
          email: this.userEmail,
          name: this.userName,
          gammer_tag: this.userGammerTag,
          created_at: currentDate,
        },
      ]);
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

  &-close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;

    cursor: pointer;
  }
}

.modal-content {
  margin: 0 auto;
  padding: 1rem;

  height: 600px;
  max-width: 600px;
}
</style>
