<template>
  <div class="nav bg-onyx-3">
    <ToxicLogo class="nav-logo" />
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
.nav {
  &-logo {
    height: 100px;
    width: auto;
  }
}
</style>
