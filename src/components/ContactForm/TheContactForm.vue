<template>
  <section id="signup" class="px-8 py-16 bg-onyx-2 mt-[10rem]">
    <div class="border-solid border-toxic-3 border-4 p-8">
      <ClassicController class="w-[100px] h-[100px]" />

      <div class="mb-8">
        <h2 class="text-6xl">Want to game with us?</h2>

        <p>
          Join our growing community of (definely not) toxic members. Subscribe
          to our mailing list to stay informed and up-to-date about upcoming
          tournaments, gaming events, and other updates from the Toxic Team.
        </p>
      </div>

      <ContactForm class="" />
    </div>
  </section>
</template>

<script>
import ClassicController from "@/assets/icons/classiccontroller.vue";
import ContactForm from "./EmailForm.vue";
import { Icon } from "@iconify/vue";

export default { components: { ClassicController, ContactForm, Icon } };
</script>

<style lang="scss" scoped></style>
