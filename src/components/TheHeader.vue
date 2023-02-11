<template>
  <div class="bg-onyx-3 h-px-{100}">
    <router-link to="/home" class="home flex flex-nowrap flex-row items-center">
      <ToxicLogo class="home-logo w-auto hover:animate-pulse" />
      <h1 class="home-title text-3xl">Toxic Tournaments</h1>
    </router-link>
  </div>
</template>

<script>
import ToxicLogo from "@/assets/icons/ToxicLogo.vue";

export default {
  components: {
    ToxicLogo,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  &-logo {
    width: 100px;
    height: auto;
  }

  &-title {
    @media (max-width: 800px) {
      display: none;
    }
  }
}
</style>
