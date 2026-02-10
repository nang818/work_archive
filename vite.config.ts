import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/work_archive/', // 깃허브 저장소 이름을 적어주면 빌드 시 경로를 다 맞춰줍니다.
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // 서브페이지를 아래와 같이 하나씩 등록해줘야 dist에 생성됩니다.
        'dm-bnr-1': resolve(__dirname, 'public/works/2020/dm-bnr-1.html')
      }
    }
  },
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
