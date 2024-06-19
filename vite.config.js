import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://json-server-vercel-ten-liard.vercel.app/',
        changeOrigin: true,
        path: '/api',
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
})
