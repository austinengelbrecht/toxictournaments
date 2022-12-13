<template>
  <div class="navbar bg-onyx-3">
    <router-link to="/home" class="navbar-home">
      <ToxicLogo class="navbar-home-logo" />
      <h1>Toxic Tournaments</h1>
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
.navbar {
  height: 100px;

  &-home {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    flex-grow: 1;

    &-logo {
      width: 100px;
      height: auto;
    }
  }
}
</style>
