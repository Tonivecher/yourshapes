import { copyFileSync, existsSync } from "node:fs"
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

const spaFallbackPlugin = () => ({
  name: "spa-fallback-404",
  closeBundle() {
    const indexHtml = new URL("./dist/index.html", import.meta.url)

    if (!existsSync(indexHtml)) {
      return
    }

    // Static hosts that do not support rewrites can serve 404.html and still boot the SPA.
    copyFileSync(indexHtml, new URL("./dist/404.html", import.meta.url))
  },
})

const normalizedBase = (() => {
  const configuredBase = process.env.VITE_BASE_PATH ?? "/"
  if (configuredBase === "/") {
    return configuredBase
  }

  return `/${configuredBase.replace(/^\/+|\/+$/g, "")}/`
})()

export default defineConfig({
  base: normalizedBase,
  plugins: [react(), spaFallbackPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      animejs: fileURLToPath(new URL("./src/lib/animejs-wrapper.ts", import.meta.url)),
    },
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks: {
          three: [
            "three",
            "@react-three/fiber",
            "@react-three/drei"
          ],

          motion: [
            "framer-motion",
            "gsap"
          ],

          radix: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-popover"
          ],

          vendor: [
            "react",
            "react-dom",
            "react-router-dom"
          ]
        }
      }
    }
  }
})
