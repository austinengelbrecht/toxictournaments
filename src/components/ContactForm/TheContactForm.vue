<template>
  <section id="signup" class="signup mt-[10rem] flex flex-row flex-wrap">
    <div class="signup-cta max-w-[50%] py-12 px-8 text-left bg-onyx-3">
      <h2 class="capitalize text-6xl">Want to game with us?</h2>

      <p>
        Join our growing community of (definely not) toxic members. Subscribe to
        our mailing list to stay informed and up-to-date about upcoming
        tournaments, gaming events, and other updates from your Toxic Team.
      </p>
    </div>

    <ContactForm class="px-8 py-12" />
  </section>
</template>

<script>
import BaseHeader from "../UI/BaseHeader.vue";
import ContactForm from "./EmailForm.vue";

export default { components: { BaseHeader, ContactForm } };
</script>

<style lang="scss" scoped>
.signup {
  &-cta {
    clip-path: polygon(0 0, 100% 0%, 95% 100%, 0% 100%);

    &:after {
      content: "";
      width: 10px;
      background-color: $toxic-3;
    }
  }

  &-form {
  }
}
</style>
