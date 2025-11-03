import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  assetsInclude: [
    '**/*.woff',
    '**/*.woff2',
    '**/*.otf',
    '**/*.ttf',
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: /^animejs$/, replacement: path.resolve(__dirname, './src/lib/animejs-wrapper') },
    ],
  },
  server: {
    allowedHosts: [
      '.sandbox.golex.ai',
      'sandbox.golex.ai',
      '.prvw.live',
    ],
    host: true,
    cors: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = path.extname(assetInfo.name ?? '').toLowerCase()
          if (['.woff', '.woff2', '.otf', '.ttf'].includes(ext)) {
            return 'fonts/[name][extname]'
          }

          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  preview: {
    port: 5173,
    host: true,
    strictPort: true,
  },
})
