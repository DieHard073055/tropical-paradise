import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tropical-paradise/",
  plugins: [react()],
  build: {
    outDir: "docs", // Set the output directory to docs
  },
});
