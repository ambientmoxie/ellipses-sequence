export default {
  root: "src",
  base: "/projects/ellipses-sequence",
  server: { host: true },
  build: {
    outDir: "../dist",
    chunkSizeWarningLimit: 1000,
  },
  // rollupOptions: {
  //   input: {
  //     main: "./src/index.html",
  //     about: "./src/pages/about.html",
  //   },
  // },
};
