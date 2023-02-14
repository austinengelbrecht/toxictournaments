<template>
  <div class="mx-10">
    <h2 class="text-6xl">{{ title }}</h2>
    <p class="uppercase font-ice text-2xl">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
  },
};
</script>

<style lang="scss" scoped></style>
