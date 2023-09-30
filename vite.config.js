import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: new URL("./src/index.html", import.meta.url).pathname,
        imprint: new URL("./src/imprint.html", import.meta.url).pathname,
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  server: {
    port: 8000,
  },
};
