<template>
  <section class="background">
    <slot></slot>
  </section>
</template>

<style>
.background {
  padding: 1rem;
  margin: 2rem 0;
  width: 100%;

  background: linear-gradient(90deg, #3d0959, #2a2a2a 30% 70%, #3d0959);
}
</style>
