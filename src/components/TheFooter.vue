<template>
  <div class="footer bg-onyx-3">
    <router-link to="/home" class="footer-home">
      <ToxicLogo class="footer-home-logo" />
      <h2 class="footer-home-title">Toxic Tournaments</h2>
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
.footer {
  padding: 2rem;

  &-home {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    &-logo {
      width: 100px;
      height: auto;
    }

    &-title {
      margin: 0;
    }
  }
}
</style>
