import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()
  ],
  base: '/CV-Application/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    target: 'esnext', 
    outDir: 'dist', 
    minify: 'terser',
    sourcemap: true
  },
  server: {
    port: 3000, 
    open: true,   
    strictPort: false, 
    cors: true,   
    https: false,  
    proxy: { 
    }
  },
  
});
