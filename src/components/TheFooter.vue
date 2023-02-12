<template>
  <div class="footer bg-onyx-3 pb-4">
    <router-link
      to="/home"
      class="flex flex-col flex-nowrap justify-center items-center"
    >
      <ToxicLogo class="w-[100px] h-auto" />
    </router-link>

    <ul class="flex flex-row flex-nowrap justify-center mt-4">
      <li v-for="link in socialLinks" class="px-3" :key="link.url">
        <a :href="link.url" target="_blank" class="hover:text-offwhite">
          <Icon :icon="link.icon" class="w-[32px] h-[32px]" />
          <span class="sr-only">{{ link.linkText }}</span>
        </a>
      </li>
    </ul>

    <div class="text-center mt-8">
      <span>&copy;2022 Toxic Tournaments</span>
    </div>
  </div>
</template>

<script>
import ToxicLogo from "@/assets/icons/ToxicLogo.vue";
import { Icon } from "@iconify/vue";
import socialLinks from "@/assets/data/social_links.json";

export default {
  components: {
    ToxicLogo,
    Icon,
  },
  data() {
    return {
      socialLinks: socialLinks,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  color: #8a8887;
}
</style>
