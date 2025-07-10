import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindPlugin from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    fs: {
      allow: ['.'],
    },
    middlewareMode: false,
  },
})
