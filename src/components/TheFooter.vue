<template>
  <div class="footer bg-onyx-3">
    <router-link to="/home" class="footer-home">
      <ToxicLogo class="footer-home-logo" />
      <h2 class="footer-home-title">Toxic Tournaments</h2>
    </router-link>

    <ul class="socials">
      <li v-for="link in socialLinks" class="socials-links" :key="link.url">
        <a :href="link.url" target="_blank">
          <Icon :icon="link.icon" class="icon" />
          <span class="sr-only">{{ link.linkText }}</span>
        </a>
      </li>
    </ul>

    <div class="footer-copyright">
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
  padding: 2rem;
  color: #8a8887;

  a {
    &:hover {
      color: $off-white;
    }
  }

  &-home {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    &-logo {
      width: 100px;
      height: auto;
    }

    &-title {
      margin: 0;
    }
  }

  &-copyright {
    margin-top: 4rem;
    text-align: center;
  }
}

.socials {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 4rem;

  &-links {
    padding: 0 1rem;
  }
}

.icon {
  width: 32px;
  height: 32px;
}
</style>
