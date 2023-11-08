<script setup>
import IntroHero from "../components/IntroHero/IntroHero.vue";
import TheFollowUs from "../components/TheFollowUs.vue";
import SpecialEvent from "../components/SpecialEvent.vue";

import { defineAsyncComponent } from "vue";

const TheLatestVideos = defineAsyncComponent(() =>
  import("../components/LatestVideos/TheLatestVideos.vue")
);

const ContactBanner = defineAsyncComponent(() =>
  import("../components/ContactForm/ContactBanner.vue")
);

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const eventCheck =
  currentYear === 2023 && currentMonth === 10 && currentDay <= 19;
</script>

<template>
  <IntroHero />
  <TheFollowUs />
  <SpecialEvent v-if="eventCheck" />
  <TheLatestVideos />
  <ContactBanner />
</template>
