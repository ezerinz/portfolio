import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://edwin-lh.is-a.dev/portfolio",
  base: "portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
