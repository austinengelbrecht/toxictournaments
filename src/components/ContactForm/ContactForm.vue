<template>
  <!-- todo - how to add event for closing the modal to background only -->
  <div class="modal">
    <div class="bg-onyx-1 modal-content p-4">
      <span @click="$emit('closeForm')">
        <Icon icon="fa6-regular:circle-xmark" color="white" width="32" />
      </span>

      <form @submit.prevent="submitEmail" class="">
        <div class="">
          <label for="name"> What's Your Name? </label>
          <input type="text" name="" id="name" v-model="userName" />
        </div>

        <div>
          <label for="email" class=""> What's your email? </label>
          <input
            class=""
            type="email"
            name=""
            id="email"
            placeholder="Enter Email Address"
            v-model="userEmail"
          />
        </div>

        <div>
          <label for="gammer-tag">What's your gammer tag?</label>
          <input type="text" name="" id="gammer-tag" v-model="userGameTag" />
        </div>

        <div>
          <button type="button" @click="$emit('closeForm')">Cancel</button
          ><button
            type="submit"
            class="glow-on-hover p-4 w-[200px] text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { supabase } from "@/supabase";
import { Icon } from "@iconify/vue";

export default {
  emits: ["closeForm"],
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
    async submitEmail() {
      let currentDate = new Date().toJSON().slice(0, 10);
      console.log(currentDate);
      await supabase.from("Email Newsletter Subscription").insert([
        {
          email: this.userEmail,
          name: this.userName,
          game_tag: this.userGameTag,
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
