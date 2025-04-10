import { defineConfig } from "vite";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";
import pkg from "./package.json";

export default defineConfig({
  plugins: [
    webExtension({
      manifest: () => ({
        ...readJsonFile("manifest.json"),
        name: pkg.name,
        description: pkg.description,
        version: pkg.version,
      }),
    }),
  ],
});
