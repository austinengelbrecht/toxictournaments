<template>
  <section class="bg-onyx-3 flex flex-row flex-wrap justify-center">
    <h2 class="capitalize text-8xl font-ice">Follow Us</h2>

    <ul>
      <li>
        <Icon />
      </li>
    </ul>
  </section>
</template>

<script>
import socialLinks from "@/assets/data/social_links.json";
import { Icon } from "@iconify/vue";

export default {
  data() {
    return {
      socialLinks: socialLinks,
    };
  },
  components: { Icon },
};
</script>

<style lang="scss" scoped></style>
