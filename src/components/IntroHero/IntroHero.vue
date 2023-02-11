<template>
  <section class="background">
    <div class="background-two">
      <div class="hero">
        <div class="hero-intro">
          <h1 class="hero-intro-heading">Bring your competition to life</h1>
          <p class="hero-intro-subtext">
            Elevate your gaming skills, build your competitive spirit, and
            experience the excitement as you climb the tournament brackets.
          </p>
        </div>

        <IntroTrailer class="hero-video" />
      </div>
    </div>
  </section>
</template>

<script>
import IntroTrailer from "./IntroTrailer.vue";

export default { components: { IntroTrailer } };
</script>

<style lang="scss" scoped>
.background {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%231a1a1a' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  &-two {
    background: linear-gradient(
      0deg,
      $onyx-3,
      rgb(0, 0, 0, 0.2) 10% 90%,
      $onyx-3
    );
  }
}

.hero {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  padding: 10rem 2rem;

  background: linear-gradient(
    -40deg,
    $poison-transition,
    $onyx-3 25% 75%,
    $poison-transition
  );

  &-intro {
    display: flex;
    flex-flow: column nowrap;

    margin-bottom: 6rem;
    padding-right: 6rem;

    max-width: 600px;

    &-heading {
      font-size: 4rem;
      text-transform: capitalize;
      margin: 0;
    }

    @media screen and (max-width: 1215px) {
      text-align: center;
      justify-content: center;
      padding-right: 0;
    }
  }

  &-video {
    max-width: 560px;
    height: 315px;
  }
}
</style>
