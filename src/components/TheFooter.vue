<template>
  <div class="footer bg-onyx-3">
    <router-link to="/home" class="footer-home">
      <ToxicLogo class="footer-home-logo" />
      <h2 class="footer-home-title">Toxic Tournaments</h2>
    </router-link>

    <ul>
      <li v-for="link in socialLinks">
        <a :key="link.url" :href="link.url" target="_blank">
          <Icon :icon="link.icon" class="icon" />
          <span class="sr-only">{{ link.linkText }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import ToxicLogo from "@/assets/icons/ToxicLogo.vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    ToxicLogo,
  },
  data() {
    return {
      socialLinks: [
        {
          url: "#",
          linkText: "Goto our YouTube",
          icon: "fa:github",
        },
        {
          url: "#",
          linkText: "Goto our Twitter",
          icon: "fa:linkedin",
        },
        {
          url: "#",
          linkText: "Goto our Twitter",
          icon: "fa:linkedin",
        },
        {
          url: "#",
          linkText: "Goto our Twitter",
          icon: "fa:linkedin",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 2rem;

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
}
</style>
