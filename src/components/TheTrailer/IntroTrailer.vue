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
      <Button :goto="'#'" :text="'Learn More'" />
    </div>
  </section>
</template>

<script>
import YoutubeTrailer from "./YoutubeTrailer.vue";
import Button from "../Button.vue";

export default {
  components: {
    YoutubeTrailer,
    Button,
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
  padding: 1rem;
  margin: 2rem 0;
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
      font-size: 3rem;
      margin: 0;
    }

    &-text {
      font-size: 1.15rem;
    }
  }
}
</style>
