<template>
  <section class="flex flex-col mt-20">
    <BaseHeader :title="`Watch Our Latest Content`" />

    <div class="w-[800px] my-0 mx-auto">
      <swiper
        :slides-per-view="1"
        :navigation="true"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="video in videoLinks" :key="video.url">
          <LatestVideo :video="video.url" class="m-0-auto" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import featuredVideos from "@/assets/data/featured_videos.json";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import BaseHeader from "../UI/BaseHeader.vue";
import LatestVideo from "./LatestVideo.vue";

export default {
  components: { Swiper, SwiperSlide, BaseHeader, LatestVideo },
  data() {
    return {
      videoLinks: featuredVideos,
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style lang="scss" scoped></style>
