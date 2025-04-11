import { defineConfig } from "vite";
import webExtension from "vite-plugin-web-extension";
import pkg from "./package.json";

export default defineConfig({
  plugins: [
    webExtension({
      manifest: () => ({
        name: "single-spa Vue Force Dev",
        description: pkg.description,
        version: pkg.version,
        manifest_version: 3,
        icons: {
          16: "icon/16.png",
          32: "icon/32.png",
          48: "icon/48.png",
          96: "icon/96.png",
          128: "icon/128.png",
        },
        content_scripts: [
          {
            matches: ["*://*/*"],
            js: ["src/main.js"],
            world: "MAIN",
          },
        ],
      }),
    }),
  ],
});
