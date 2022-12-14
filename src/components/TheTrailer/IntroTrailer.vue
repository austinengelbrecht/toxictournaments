<template>
  <section class="trailer bg-onyx-2">
    <YoutubeTrailer />

    <div class="trailer-text">
      <h2>Are We Toxic?</h2>
      <p>
        We all have our moments, but who doesn't like a little bit a light
        jabbing back and forth with their friends? We started Toxic Tournaments
        with this in mind. Orginally started by a group of friends who wanted to
        get together and play video games; Toxic Tournaments has slowly grown
        into hosting open tournaments to share the love and frustration of video
        games.
      </p>
      <a href="#">Then probably a button here</a>
    </div>
  </section>
</template>

<script>
import YoutubeTrailer from "./YoutubeTrailer.vue";

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
  padding: 1rem;
  margin: 2rem 0;
  // background: linear-gradient(-30deg, #3d0959, #2a2a2a 25% 75%, #3d0959);

  &-text {
    display: flex;
    flex-flow: column nowrap;
    max-width: 500px;
  }
}
</style>
