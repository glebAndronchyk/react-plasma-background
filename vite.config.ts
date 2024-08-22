import { defineConfig } from "vite";
import dtsPlugin from "vite-plugin-dts";
import cssPlugin from "vite-plugin-libcss";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "react-css-plasma-background",
      fileName: (format) => `lib.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      // output: {
      //   globals: {
      //     react: "React",
      //     "react-dom": "ReactDOM",
      //   },
      // },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [cssPlugin(), react(), dtsPlugin({ insertTypesEntry: true })],
});
