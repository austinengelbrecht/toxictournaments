<template>
  <div class="footer bg-onyx-3 pb-4">
    <router-link
      to="/home"
      class="flex flex-col flex-nowrap justify-center items-center"
    >
      <ToxicLogo class="w-[100px] h-auto" />
    </router-link>

    <ul class="flex flex-row flex-nowrap justify-center mt-4">
      <li v-for="link in socialLinks" class="px-3" :key="link.url">
        <a :href="link.url" target="_blank" class="hover:text-offwhite">
          <Icon :icon="link.icon" class="w-[32px] h-[32px]" />
          <span class="sr-only">{{ link.linkText }}</span>
        </a>
      </li>
    </ul>

    <div class="text-center mt-8">
      <span>&copy;2022 Toxic Tournaments</span>
    </div>
  </div>
</template>

<script>
import ToxicLogo from "@/assets/icons/ToxicLogo.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    ToxicLogo,
    Icon,
  },
  data() {
    return {
      socialLinks: [
        {
          url: "https://www.youtube.com/channel/UC_u9_sjl2Q82zTK7WZwVr2A",
          linkText: "Goto our YouTube",
          icon: "mdi:youtube",
        },
        // {
        //   url: "#",
        //   linkText: "Goto our Twitch",
        //   icon: "mdi:twitch",
        // },
        {
          url: "https://www.facebook.com/ToxicTournamentsYT/",
          linkText: "Goto our Facebook",
          icon: "mdi:facebook",
        },
        {
          url: "https://www.instagram.com/toxictournaments/",
          linkText: "Goto our Instagram",
          icon: "mdi:instagram",
        },
        {
          url: "https://www.tiktok.com/@toxic_tournaments",
          linkText: "Goto our TikTok",
          icon: "ic:baseline-tiktok",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  color: #8a8887;
}
</style>
