import vituum from "vituum";
import handlebars from "@vituum/vite-plugin-handlebars";

export default {
  base: "./",
  plugins: [
    vituum(),
    handlebars({
      root: "./src",
    }),
  ],
};
