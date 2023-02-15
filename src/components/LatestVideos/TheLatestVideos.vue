<template>
  <section class="flex flex-col mt-[10rem] md:mt-[15rem]">
    <BaseHeader :title="`Watch Our Best Content`" />

    <div class="my-0 mx-auto max-w-[800px] w-[100%]">
      <swiper
        :slides-per-view="1"
        :navigation="true"
        :pagination="{ clickable: true }"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :loop="true"
      >
        <swiper-slide v-for="video in videoLinks" :key="video.url">
          <div class="p-10">
            <LatestVideo
              :video="video.url"
              class="mx-auto my-0 max-w-[700px] h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import featuredVideos from "@/assets/data/featured_videos.json";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

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
      modules: [Navigation, Pagination, A11y],
    };
  },
};
</script>

<style lang="scss">
.swiper {
  width: 100%;
  max-width: 800px;

  &-slide {
    width: 100%;
    max-width: 800px;

    &-active {
      width: 100%;
      max-width: 800px;
    }
  }

  &-wrapper {
    width: 100%;
    max-width: 800px;
  }
}

.swiper-button {
  &-prev,
  &-next {
    color: $off-white;
    border-radius: 10px;
    margin: 0 0.5rem;

    &::after {
      background-color: rgb(58, 58, 58, 0.75);
      padding: 1rem;

      border-radius: 10px;
    }

    &:hover,
    &:active {
      &:after {
        background-color: $onyx-3;
        transition: 0.5s;
      }
    }
  }
}

.swiper-pagination-bullet {
  background-color: $black;

  &-active {
    background-color: $toxic-3;
  }
}

.swiper-scrollbar {
  background: $onyx-1;

  &-drag {
    background: $onyx-3;
  }
}
</style>
