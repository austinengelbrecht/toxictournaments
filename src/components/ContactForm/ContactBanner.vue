<template>
  <section
    id="signup"
    class="flex flex-row flex-wrap justify-center gap-8 content-center mt-[10rem] bg-onyx-1 max-w-[1000px] p-8 mx-auto my-0 rounded-2xl"
  >
    <ClassicController class="w-[250px] h-[250px]" />

    <div class="max-w-[600px] flex flex-col flex-nowrap gap-4">
      <h2 class="text-6xl">Want to game with us?</h2>

      <p>
        Join our growing community of (definely not) toxic members. Subscribe to
        our mailing list to stay informed and up-to-date about upcoming
        tournaments, gaming events, and other updates from the Toxic Team.
      </p>

      <button
        class="glow-on-hover capitalize py-4 px-8 max-w-[200px] text-center self-end"
        @click="openForm()"
      >
        Join the toxic Community
      </button>
    </div>
  </section>

  <ContactForm v-if="formOpen" @close-form="closeForm()" />
</template>

<script>
import ClassicController from "@/assets/icons/classiccontroller.vue";
import ContactForm from "./ContactForm.vue";

export default {
  components: { ClassicController, ContactForm },
  data() {
    return {
      formOpen: false,
    };
  },
  methods: {
    openForm() {
      this.form = true;
    },
    closeForm() {
      this.formOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/glow-on-hover";
</style>
