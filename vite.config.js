import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: "./dist",
    // manifest: true,
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      // input: resolve(__dirname, "src/index.html"),
      output: {
        // dir: "build",
        // dir: resolve(__dirname, "build"),
        // file: "build/bundle.js",
        // format: "cjs",
        // entryFileNames: 'bundle-[hash].js',
      },
    },
  },
  preview: {
    port: 8080,
  },
});
