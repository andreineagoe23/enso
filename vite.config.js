import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Keep root base for serving from repository root or docs on GitHub Pages
  base: "/",
  build: {
    outDir: "docs",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});
