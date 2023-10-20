import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Set the base path to '/' if deploying to the root domain
  resolve: {
    alias: {
      '@': 'src', // Remove the leading slash
    },
  },
  build: {
    target: 'esnext',
    outDir: 'public',
    minify: 'terser',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
    strictPort: false,
    cors: true,
    https: false,
    proxy: {},
  },
});
