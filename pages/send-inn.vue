<template>
  <div class="m-auto max-w-content flex justify-center">
    <iframe
      src="https://quintadb.com/widgets/ddSKWxyhbaW6RcMKf6WQzD/dcJgWIFwHfbkTKW6vOC8kY?iframe=true"
      height="660px"
      width="320px"
      >Fill out my
      <a
        href="https://quintadb.com/widgets/ddSKWxyhbaW6RcMKf6WQzD/dcJgWIFwHfbkTKW6vOC8kY?iframe=true"
        >online form</a
      >.</iframe
    >
  </div>
</template>

<script>
import { getAllMetaInfo } from "@/utils/meta-tags";

export default {
  head() {
    return getAllMetaInfo({ title: "Send inn" });
  },
};
</script>

<style></style>
