import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { glob } from 'glob' // 모든 HTML 파일을 자동으로 찾기 위해 필요합니다.

export default defineConfig({
  base: '/work_archive/',
  build: {
    rollupOptions: {
      input: {
        // 최상위 index.html 등록
        main: path.resolve(__dirname, 'index.html'),
        // public/works 폴더 내의 모든 HTML 파일을 자동으로 찾아서 등록합니다.
        ...Object.fromEntries(
          glob.sync('public/works/**/*.html').map(file => [
            // 파일명을 키값으로 사용 (예: dm-bnr-1)
            path.parse(file).name,
            // 실제 파일 경로 연결
            path.resolve(__dirname, file)
          ])
        )
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