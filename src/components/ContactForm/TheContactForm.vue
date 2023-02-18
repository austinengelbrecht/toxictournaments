<template>
  <section
    id="signup"
    class="signup mt-[10rem] flex flex-row flex-wrap max-w-[100%] bg-onyx-1"
  >
    <div class="signup-cta py-12 px-8 text-left bg-onyx-3 max-w-[600px]">
      <div class="signup-cta-text">
        <h2 class="text-6xl">Want to game with us?</h2>

        <p>
          Join our growing community of (definely not) toxic members. Subscribe
          to our mailing list to stay informed and up-to-date about upcoming
          tournaments, gaming events, and other updates from the Toxic Team.
        </p>
      </div>
    </div>

    <ContactForm class="px-8 py-12 bg-onyx-1 w-[600px]" />
  </section>
</template>

<script>
import ContactForm from "./EmailForm.vue";

export default { components: { ContactForm } };
</script>

<style lang="scss" scoped>
.signup {
  &-cta {
    border-right: 10px solid $toxic-3;
    transform: skew(-15deg);

    &-text {
      transform: skew(15deg);
    }
  }
}
</style>
