<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <TheFooter />
  </footer>
</template>

<style lang="scss">
.hidden {
  display: none;
}
</style>
