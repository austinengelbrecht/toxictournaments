<template>
  <section
    class="flex mx-auto my-0 gap-4 items-center justify-center px-4 py-1 bg-onyx-1 flex-wrap"
  >
    <img
      src="/OutbreakLogo.png"
      alt="Outbreak 2023 Logo"
      loading="lazy"
      aria-hidden="true"
      height="80"
      width="80"
    />

    <span class="text-center">
      We are currently hosting a special event! Join the Outbreak Event!
    </span>

    <a
      href="http://34.71.9.100/"
      rel="nofollow"
      target="_blank"
      class="button text-center"
      >Learn More</a
    >
  </section>
</template>

<style lang="scss" scoped>
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: $onyx-3;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    background-color: $onyx-2;
    transform: translateY(-2px);
  }
}
</style>
