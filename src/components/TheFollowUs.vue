<template>
  <section
    class="background-transition flex flex-row flex-wrap justify-center items-center p-8 py-12"
  >
    <div class="">
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
  -webkit-text-fill-color: transparent;

  @media (max-width: 400px) {
    font-size: 3rem;
  }
}

.socials {
  margin-top: 2rem;

  @media (min-width: 660px) {
    margin: 0 0 0 2rem;
  }
}

.background-transition {
  background: linear-gradient(180deg, $onyx-3, $onyx-2);
}
</style>
