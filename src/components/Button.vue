<template>
  <router-link :to="goto" class="button">
    <div class="button-text">{{ text }}</div>
  </router-link>
</template>

<script>
export default {
  props: ["goto", "text"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  padding: 1rem 2rem;
  max-width: 25%;

  border: 2px solid $poison-3;
  border-radius: 8px;

  background-color: $black;

  &:hover {
    background-color: $onyx-3;
    border-color: $poison-1;
    transition: 0.25s;
  }

  &-text {
    text-align: center;
    margin: auto;
    font-size: 1.15rem;
  }
}
</style>
