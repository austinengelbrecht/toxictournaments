<template>
  <section id="signup" class="px-8 py-16 mt-[10rem]">
    <div class="p-8 flex flex-row flex-wrap">
      <ClassicController class="w-[250px] h-[250px]" />

      <div class="max-w-[600px]">
        <h2 class="text-6xl">Want to game with us?</h2>

        <p>
          Join our growing community of (definely not) toxic members. Subscribe
          to our mailing list to stay informed and up-to-date about upcoming
          tournaments, gaming events, and other updates from the Toxic Team.
        </p>
      </div>

      <button class="glow-on-hover capitalize">Join the toxic Community</button>
    </div>
  </section>
</template>

<script>
import ClassicController from "@/assets/icons/classiccontroller.vue";

export default { components: { ClassicController } };
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/glow-on-hover";
</style>
