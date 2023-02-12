<template>
  <section>
    <h2 class="capitalize">Follow Us</h2>
    <ul>
      <li>
        <Icon />
      </li>
    </ul>
  </section>
</template>

<script>
import socialLinks from "@/assets/data/social_links.vue";
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
