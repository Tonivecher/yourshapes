import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';
  
  return {
    plugins: [
      react()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      '__IS_SANDBOX__': JSON.stringify(isDevelopment),
    },
    server: {
      allowedHosts: [
        '.sandbox.golex.ai',
        'sandbox.golex.ai',
        '.prvw.live'
      ],
      host: true,
      cors: true
    },
    build: {
      sourcemap: true,
    },
    preview: {
      port: 5173,
      host: true,
      strictPort: true
    }
  }
})