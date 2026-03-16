import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],

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
