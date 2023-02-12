<template>
  <section class="bg-onyx-3 flex flex-row flex-wrap justify-center">
    <h2 class="uppercase text-8xl font-ice">Follow Us</h2>

    <ul class="flex flex-row ml-10">
      <li v-for="link in socialLinks" :key="link.url">
        <a :href="link.url" target="_blank" class="hover:text-offwhite">
          <Icon :icon="link.icon" class="w-[32px] h-[32px]" />
          <span class="sr-only">{{ link.linkText }}</span>
        </a>
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
