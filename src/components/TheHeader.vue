<template>
  <div class="navbar bg-onyx-3">
    <router-link to="/home" class="navbar-home">
      <ToxicLogo class="navbar-home-logo" />
      <h1>Toxic Tournaments</h1>
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
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    flex-grow: 1;

    &-logo {
      width: 100px;
      height: auto;
    }
  }
}
</style>
