import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';
  // GitHub Pages serves the site from /<repo> by default, so we adjust base path
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const base = isDevelopment ? '/' : `/${process.env.VITE_BASE_PATH || repoName || ''}/`;
  const normalizedBase = base.replace(/\/\/+/g, '/').replace(/\/$/, '/') || '/';
  
  return {
    plugins: [
      react()
    ],
    base: normalizedBase,
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "./src") },
        { find: /^animejs$/, replacement: path.resolve(__dirname, "./src/lib/animejs-wrapper") },
      ],
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
      cors: true,
      historyApiFallback: true,
    },
    build: {
      sourcemap: isDevelopment,
    },
    preview: {
      port: 5173,
      host: true,
      strictPort: true
    }
  }
})
