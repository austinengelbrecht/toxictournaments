<template>
  <section id="signup" class="mt-[10rem] flex flex-row flex-wrap">
    <div class="max-w-[50%] p-4 text-left">
      <BaseHeader :title="`Want to Game with us?`" />

      <p>
        Join our growing community of (definely not) toxic members. Subscribe to
        our mailing list to stay informed and up-to-date about upcoming
        tournaments, gaming events, and other updates from your Toxic Team.
      </p>
    </div>

    <ContactForm />
  </section>
</template>

<script>
import BaseHeader from "../UI/BaseHeader.vue";
import ContactForm from "./EmailForm.vue";

export default { components: { BaseHeader, ContactForm } };
</script>

<style lang="scss" scoped></style>
