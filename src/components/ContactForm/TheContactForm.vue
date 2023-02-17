<template>
  <section id="signup" class="mt-[10rem]">
    <BaseHeader :title="`Sign Up`" />

    <ContactForm />
  </section>
</template>

<script>
import BaseHeader from "../UI/BaseHeader.vue";
import ContactForm from "./EmailForm.vue";

export default { components: { BaseHeader, ContactForm } };
</script>

<style lang="scss" scoped></style>
