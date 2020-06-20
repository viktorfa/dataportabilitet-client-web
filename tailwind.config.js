/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      width: {
        content: "800px",
      },
      maxWidth: {
        content: "800px",
      },
      colors: {
        t1: "darkslateblue",
        t2: "dodgerblue",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: ["./**/*.vue"],
};
