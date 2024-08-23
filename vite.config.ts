import { defineConfig } from "vite";
import dtsPlugin from "vite-plugin-dts";
import cssPlugin from "vite-plugin-libcss";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "react-plasma-background",
      fileName: "index",
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    cssPlugin(),
    react(),
    dtsPlugin({
      rollupTypes: true,
      beforeWriteFile: (filePath, content) => {
        return {
          filePath,
          content: content.replace(/export \{ \}/g, ""),
        }
      }
    })
  ],
});
