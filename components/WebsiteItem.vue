<template>
  <div :key="item.name">
    <h3>{{ item.name }}</h3>
    <p>
      <a :href="item.url">{{ item.url }}</a>
    </p>
    <p v-if="item.isMachineReadable && item.dataFormat !== 'N/A'">
      Maskinlesbart som {{ item.dataFormat }}
    </p>
    <p v-else>Ikke maskinlesbart</p>
    <p v-if="item.days === '0'">Data leveres samme dag</p>
    <p v-else-if="item.days === '1'">Data leveres etter {{ item.days }} dag</p>
    <p v-else>Data leveres etter {{ item.days }} dager</p>
    <div>
      <h4>Instruksjoner for henting</h4>
      <p>{{ item.instructions }}</p>
      <h4>Notater</h4>
      <p>{{ item.notes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebsiteItem",
  props: { item: { type: Object, required: true } },
};
</script>

<style scoped>
h3 {
  @apply text-lg font-semibold;
}
h4 {
  @apply font-semibold;
}
</style>
