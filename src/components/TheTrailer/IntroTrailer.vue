<template>
  <trailer-background>
    <YoutubeTrailer />

    <div>
      <h2>Are We Toxic?</h2>
    </div>
  </trailer-background>
</template>

<script>
import TrailerBackground from "./TrailerBackground.vue";
import YoutubeTrailer from "./YoutubeTrailer.vue";

export default {
  components: {
    TrailerBackground,
    YoutubeTrailer,
  },
  data() {
    return {};
  },
};
</script>
