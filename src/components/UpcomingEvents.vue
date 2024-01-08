<template>
  <section>
    <BaseHeader :title="`Upcoming Events`" />

    <div v-if="loading">Loading....</div>

    <div v-else-if="error">Error</div>

    <div v-else>Got Data</div>
  </section>
</template>

<script>
import BaseHeader from "./UI/baseheader.vue";
import axios from "axios";

export default {
  components: { BaseHeader },
  data() {
    return {
      loading: true,
      error: false,
      data: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const apiUrl = "https://catfact.ninja/fact";

      axios
        .get(apiUrl)
        .then((response) => {
          this.data = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error getting data", error);
          this.error = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
