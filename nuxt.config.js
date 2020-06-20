import cheerio from "cheerio";

import { getAllMetaInfo } from "./utils/meta-tags";

const { meta, title } = getAllMetaInfo();
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title,
    htmlAttrs: { lang: "no" },
    meta: [
      ...meta,
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /**
   * Remove all JS from our site.
   */
  render: { resourceHints: false },
  hooks: {
    "export:page": ({ page }) => {
      const doc = cheerio.load(page.html);
      // Remove all scripts and insert google analytics manually.
      doc("body script").remove();
      doc("head").append(`
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127032198-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-127032198-1');
        </script>
      `);
      page.html = doc.html();
    },
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    configPath: "~/tailwind.config.js",
    cssPath: "~/assets/css/main.css",
    exposeConfig: false,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxt/content",
    [
      "@nuxtjs/sitemap",
      {
        hostname: "https://dataportabilitet.no",
        exclude: ["/404"],
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
