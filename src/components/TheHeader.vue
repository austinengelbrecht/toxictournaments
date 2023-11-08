<template>
  <div class="bg-onyx-3 h-[100px]">
    <router-link to="/home" class="home flex flex-nowrap flex-row items-center">
      <ToxicLogo class="w-[100px] h-auto hover:animate-pulse" />
      <h1 class="home-title text-3xl">Toxic Tournaments</h1>
    </router-link>
  </div>
  <SpecialEvent v-if="eventCheck" />
</template>

<script setup>
import ToxicLogo from "@/assets/icons/ToxicLogo.vue";
import SpecialEvent from "./SpecialEvent.vue";

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const eventCheck =
  currentYear === 2023 && currentMonth === 10 && currentDay <= 19;
</script>

<style lang="scss" scoped>
.home {
  &-title {
    @media (max-width: 800px) {
      display: none;
    }
  }
}
</style>
