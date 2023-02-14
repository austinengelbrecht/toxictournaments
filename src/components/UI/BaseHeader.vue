<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
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
