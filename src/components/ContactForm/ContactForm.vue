<template>
  <form>
    <div>
      <label for="newsletter-signup" class="capitalize"
        >Enter Email Address</label
      >
      <input
        type="email"
        name="News Letter Signup"
        id="newsletter-signup"
        v-model="userEmail"
      />
    </div>

    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userEmail: "",
      isSubmitted: false,
    };
  },
  methods: {
    submitEmail() {},
  },
};
</script>

<style lang="scss" scoped></style>
