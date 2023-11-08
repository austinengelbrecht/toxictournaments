<template>
  <section
    class="flex mx-auto my-0 gap-4 items-center justify-center mt-12 p-4 bg-onyx-1"
  >
    <img
      src="/OutbreakLogo.png"
      alt="Outbreak 2023 Logo"
      loading="lazy"
      aria-hidden="true"
      height="100"
      width="100"
    />

    <div class="flex flex-col gap-4">
      We are currently hosting a special event! Join the Outbreak Event!
      <a
        href="http://34.71.9.100/"
        rel="nofollow"
        target="_blank"
        class="button text-center self-start"
        >Learn More</a
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button {
  padding: 0.5rem 1rem;
  border: black 4px solid;
  border-radius: 0.25rem;
  background-color: #e21313;
  color: black;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: $toxic-3;
  }
}
</style>
