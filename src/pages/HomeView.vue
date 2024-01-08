<script setup>
import IntroHero from "../components/IntroHero/IntroHero.vue";
import TheFollowUs from "../components/TheFollowUs.vue";

import { defineAsyncComponent } from "vue";
// import UpcomingEvents from "../components/UpcomingEvents.vue";

const TheLatestVideos = defineAsyncComponent(() =>
  import("../components/LatestVideos/TheLatestVideos.vue")
);

const ContactBanner = defineAsyncComponent(() =>
  import("../components/ContactForm/ContactBanner.vue")
);

const UpcomingEvents = defineAsyncComponent(() =>
  import("../components/UpcomingEvents.vue")
);
</script>

<template>
  <IntroHero />
  <TheFollowUs />

  <UpcomingEvents />

  <TheLatestVideos />
  <ContactBanner />
</template>
