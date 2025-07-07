import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    yextSSG(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/fonts/*",
          dest: "assets/fonts",
        },
      ],
    }),
  ],
});
