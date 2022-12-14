<template>
  <section class="background">
    <slot></slot>
  </section>
</template>

<style>
.background {
  padding: 1rem;
  width: 100%;

  background: linear-gradient(90deg, #600e8c, #2a2a2a 15% 85%, #600e8c);
}
</style>
