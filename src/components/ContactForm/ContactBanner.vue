<template>
  <section
    id="signup"
    class="flex flex-row flex-wrap justify-center gap-8 content-center mt-[10rem] bg-onyx-1 max-w-[1000px] p-8 mx-auto my-0 rounded-2xl"
  >
    <Controller class="w-[250px] h-[250px]" />

    <div
      class="max-w-[600px] flex flex-col flex-nowrap gap-4"
      v-if="!isSignedUp"
    >
      <h2 class="text-6xl">Want to game with us?</h2>

      <p>
        Join our growing community of (definely not) toxic members. Subscribe to
        our mailing list to stay informed and up-to-date about upcoming
        tournaments, gaming events, and other updates from the Toxic Team.
      </p>

      <button
        class="glow-on-hover capitalize py-4 px-8 max-w-[200px] text-center self-end"
        @click="openModal"
      >
        Join the toxic Community
      </button>
    </div>

    <div
      v-if="isSignedUp"
      class="max-w-[600px] flex flex-col flex-nowrap gap-4"
    >
      <h2 class="text-6xl">Thanks for signing up!</h2>
      <p>
        We are excited to game with you! Keep an eye on your email for updates
        and our next events.
      </p>
    </div>

    <ContactForm v-if="modalOpen" />
  </section>
</template>

<script>
import Controller from "@/assets/images/controller_icon/ControllerIcon.vue";
import ContactForm from "./ContactForm.vue";

import { useEmailStore } from "../../store/email";
import { mapState, mapActions } from "pinia";

export default {
  components: { Controller, ContactForm },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useEmailStore, ["openModal"]),
  },
  computed: {
    ...mapState(useEmailStore, ["modalOpen", "isSignedUp"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/glow-on-hover";
</style>
