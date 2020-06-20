<template>
  <div>
    <div style="min-height: 100vh;">
      <div class="max-w-content m-auto font-mono mb-2">
        <div class="text-center text-3xl font-semibold">
          DATAPORTABILITET
        </div>
        <nav class="flex justify-center">
          <nuxt-link to="/" :class="(currentPage === '' && 'current') || ''"
            >Hjem</nuxt-link
          >
          <span>&nbsp;–&nbsp;</span>
          <nuxt-link
            to="/liste"
            :class="(currentPage === 'liste' && 'current') || ''"
            >Liste</nuxt-link
          >
          <span>&nbsp;–&nbsp;</span>
          <nuxt-link
            to="/send-inn"
            :class="(currentPage === 'send-inn' && 'current') || ''"
            >Send inn</nuxt-link
          >
        </nav>
      </div>
      <nuxt />
    </div>
    <hr />
    <footer class="text-center">
      <p>&copy; {{ new Date().getFullYear() }} dataportabilitet.no</p>
      <p>
        <a href="mailto:info@dataportabilitet.no" target="_blank"
          >info@dataportabilitet.no</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    let currentPage = "";
    try {
      currentPage = this.$route.path.split("/")[1];
    } catch {}
    return {
      currentPage,
    };
  },
  mounted() {
    console.log("Mounted layout!");
    console.log(this.$nuxt.$route);
    console.log(this.$route);
  },
};
</script>

<style scoped>
a {
  color: inherit;
}
a.current {
  border-bottom: solid 2px black;
}
</style>
