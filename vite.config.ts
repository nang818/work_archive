import { defineConfig } from 'vite'
import path, { resolve } from 'path' // resolve를 여기서 가져와야 합니다!
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/work_archive/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // public 폴더를 경로에서 제외하고 등록해보세요. 
        // 만약 public 안에 계속 두실 거라면 아래 경로를 유지하세요.
        'dm-bnr-1': resolve(__dirname, 'public/works/2020/dm-bnr-1.html')
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})