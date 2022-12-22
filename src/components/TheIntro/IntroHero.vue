<template>
  <section class="hero">
    <div class="intro">
      <ToxicLogo class="intro-logo" />
      <h1 class="intro-heading">Toxic Tournaments</h1>
      <p class="intro-tagline">
        Welcome To The Best Mid-West Smash Bros Tournament Hosting
      </p>
    </div>
  </section>
</template>

<script>
import ToxicLogo from "../../assets/icons/ToxicLogo.vue";

export default {
  components: { ToxicLogo },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url(../../assets/images/intro_background.png);
  min-height: 392px;
}

.intro {
  display: flex;
  flex-flow: column nowrap;
  max-width: fit-content;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 0 auto;
  //background-color: rgb(58, 58, 58);

  &-logo {
    max-height: 200px;
    width: auto;
  }

  &-heading {
    margin: 0;
    text-align: center;
    font-size: 3rem;
  }

  &-tagline {
    text-align: center;
    font-size: 1.25rem;
  }
}
</style>
