<template>
  <section class="background">
    <slot></slot>
  </section>
</template>

<style>
.background {
  padding: 1rem;
  margin: 2rem 0;

  background: linear-gradient(-30deg, #3d0959, #2a2a2a 25% 75%, #3d0959);
}
</style>
