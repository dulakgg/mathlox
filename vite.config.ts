import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { vitePrerenderPlugin } from "vite-prerender-plugin"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.PRERENDER === "false"
      ? []
      : [
          vitePrerenderPlugin({
            renderTarget: "#root",
            prerenderScript: path.resolve(__dirname, "src/prerender.tsx"),
            additionalPrerenderRoutes: ["/", "/sofizmaty", "/paradoksy"],
          }),
        ]),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})