<template>
  <div class="container">
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("home").fetch();
    return {
      page,
    };
  },
};
</script>

<style scoped>
h2 {
  @apply text-lg italic font-semibold;
}
.subheader {
  @apply text-center;
}
</style>
