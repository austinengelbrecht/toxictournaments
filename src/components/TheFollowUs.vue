<template>
  <section
    class="flex flex-row flex-wrap justify-center items-center bg-onyx-2 p-8 py-10"
  >
    <div class="bg-onyx-2">
      <h2 class="followus uppercase text-6xl font-sourcesans font-bold">
        Follow Us
      </h2>
    </div>

    <ul class="socials flex flex-row">
      <li v-for="link in socialLinks" :key="link.url" class="px-3">
        <a :href="link.url" target="_blank" class="">
          <Icon :icon="link.icon" class="w-[48px] h-[48px]" />
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

<style lang="scss" scoped>
.followus {
  -webkit-text-stroke: 2px white;
  -webkit-text-fill-color: $onyx-3;

  @media (max-width: 400px) {
    font-size: 3rem;
  }
}

.socials {
  margin-top: 2rem;

  @media (min-width: 660px) {
    margin: 0 0 2rem 0;
  }
}
</style>
