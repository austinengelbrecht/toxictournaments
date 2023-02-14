<template>
  <iframe
    width="600"
    height="415px"
    :src="video"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      required: true,
    },
  },
};
</script>
