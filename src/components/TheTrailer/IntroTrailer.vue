<!-- ! Depreciated - Do not use this component -->
<!-- todo: Needs to be removed - saving for text -->

<template>
  <section class="trailer">
    <YoutubeTrailer class="trailer-video" />

    <div class="trailer-intro">
      <h2 class="trailer-intro-heading">Are We Toxic?</h2>
      <p class="trailer-intro-text">
        We all have our moments, but who doesn't like a little bit a light
        jabbing back and forth with their friends? We started Toxic Tournaments
        with this in mind. Orginally started by a group of friends who wanted to
        get together and play video games; Toxic Tournaments has slowly grown
        into hosting open tournaments to share the love and frustration of video
        games.
      </p>
    </div>
  </section>
</template>

<script>
import YoutubeTrailer from "../TheIntro/IntroTrailer.vue";

export default {
  components: {
    YoutubeTrailer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.trailer {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background: linear-gradient(
    -40deg,
    $poison-transition,
    $onyx-3 20% 80%,
    $poison-transition
  );

  &-video {
    max-width: 560px;
    height: 315px;
  }

  &-intro {
    display: flex;
    flex-flow: column nowrap;
    max-width: 560px;

    &-heading {
      font-size: 2.5rem;
      margin: 0;
    }

    &-text {
      font-size: 1.25rem;
    }
  }
}
</style>
