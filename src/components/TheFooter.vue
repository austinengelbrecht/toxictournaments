<template>
  <div class="footer bg-onyx-3">
    <router-link to="/home" class="footer-home">
      <ToxicLogo class="footer-home-logo" />
      <h2 class="footer-home-title">Toxic Tournaments</h2>
    </router-link>

    <ul class="socials">
      <li v-for="link in socialLinks" class="socials-links">
        <a :key="link.url" :href="link.url" target="_blank">
          <Icon :icon="link.icon" class="icon" />
          <span class="sr-only">{{ link.linkText }}</span>
        </a>
      </li>
    </ul>

    <div class="footer-copyright">
      <span>&copy; Toxic Tournaments 2022</span>
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
          url: "#",
          linkText: "Goto our YouTube",
          icon: "mdi:youtube",
        },
        {
          url: "#",
          linkText: "Goto our Twitch",
          icon: "mdi:twitch",
        },
        {
          url: "#",
          linkText: "Goto our Facebook",
          icon: "mdi:facebook",
        },
        {
          url: "#",
          linkText: "Goto our Twitter",
          icon: "mdi:twitter",
        },
        {
          url: "#",
          linkText: "Goto our Instagram",
          icon: "mdi:instagram",
        },
        {
          url: "https://www.tiktok.com/t/ZTRVDRaoj/",
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
