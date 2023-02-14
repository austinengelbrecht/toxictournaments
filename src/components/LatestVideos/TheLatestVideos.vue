<template>
  <section>
    <BaseHeader :title="`Watch Our Latest Content`" />
  </section>
</template>

<script>
import featuredVideos from "@/assets/data/featured_videos.json";

import BaseHeader from "../UI/BaseHeader.vue";

export default {
  components: { BaseHeader },
  data() {
    return {
      videoLinks: featuredVideos,
    };
  },
};
</script>

<style lang="scss" scoped></style>
