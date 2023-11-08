<script setup>
import IntroHero from "../components/IntroHero/IntroHero.vue";
import TheFollowUs from "../components/TheFollowUs.vue";

import { defineAsyncComponent } from "vue";

const TheLatestVideos = defineAsyncComponent(() =>
  import("../components/LatestVideos/TheLatestVideos.vue")
);

const ContactBanner = defineAsyncComponent(() =>
  import("../components/ContactForm/ContactBanner.vue")
);
</script>

<template>
  <IntroHero />
  <TheFollowUs />

  <TheLatestVideos />
  <ContactBanner />
</template>
