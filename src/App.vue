<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
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
