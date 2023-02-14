<template>
  <section class="mt-20 flex flex-column justify-center">
    <BaseHeader :title="`Watch Our Latest Content`" />

    <ul class="featured-videos">
      <li
        class="featured-videos-clip"
        v-for="video in videoLinks"
        :key="video.url"
      >
        <LatestVideo :video="video.url" />
      </li>
    </ul>
  </section>
</template>

<script>
import featuredVideos from "@/assets/data/featured_videos.json";

import BaseHeader from "../UI/BaseHeader.vue";
import LatestVideo from "./LatestVideo.vue";

export default {
  components: { BaseHeader, LatestVideo },
  data() {
    return {
      videoLinks: featuredVideos,
    };
  },
};
</script>

<style lang="scss" scoped>
.featured-videos {
  &-clip {
    &:nth-child(1) {
      width: 600px;
      height: 350px;
    }

    &:nth-child(n + 2) {
      width: 250px;
      height: auto;
    }
  }
}
</style>
