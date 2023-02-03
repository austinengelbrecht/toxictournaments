<template>
  <section class="hero">
    <div class="hero-intro">
      <h1>Bring your competition to life</h1>
      <p>
        Elevate your gaming skills, build your competitive spirit, and
        experience the excitement as you climb the tournament brackets.
      </p>
    </div>

    <YoutubeTrailer class="hero-video" />
  </section>
</template>

<script>
import YoutubeTrailer from "./YoutubeTrailer.vue";

export default { components: { YoutubeTrailer } };
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-flow: row wrap;

  padding: 4rem 2rem;

  &-intro {
    flex-grow: 1;
    max-width: 600px;
  }
}
</style>
