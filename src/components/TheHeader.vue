<template>
  <div class="navbar bg-onyx-3">
    <router-link
      to="/home"
      class="navbar-home flex flex-nowrap flex-row items-center"
    >
      <ToxicLogo class="navbar-home-logo" />
      <h1 class="navbar-home-title">Toxic Tournaments</h1>
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
.navbar {
  height: 100px;

  &-home {
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
}
</style>
