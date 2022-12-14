<template>
  <trailer-background>
    <YoutubeTrailer />
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
