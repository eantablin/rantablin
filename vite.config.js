import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from a custom domain (richard.antablin.com) at the root,
// so the base path is "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  server: {
    host: true,
    port: 5173,
  },
});
