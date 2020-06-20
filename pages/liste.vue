<template>
  <div class="container">
    <div>
      Listen er vedlikeholdt av dataportabilitet.no, men vi behandler alle
      bidrag som <nuxt-link to="/send-inn">sendes inn her</nuxt-link>.
    </div>
    <div class="flex flex-wrap justify-between">
      <div
        v-for="item in items"
        :key="item.name"
        class="mb-4"
        style="max-width: 320px;"
      >
        <WebsiteItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { getSpreadSheetData } from "@/utils/spreadsheet";
import WebsiteItem from "@/components/WebsiteItem";
import { getAllMetaInfo } from "@/utils/meta-tags";

export default {
  components: {
    WebsiteItem,
  },
  async asyncData(context) {
    const items = await getSpreadSheetData();
    return {
      items,
    };
  },
  head() {
    return getAllMetaInfo({ title: "Liste over nettsider" });
  },
};
</script>

<style></style>
