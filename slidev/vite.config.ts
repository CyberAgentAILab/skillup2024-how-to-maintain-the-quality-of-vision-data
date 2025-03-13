import { defineConfig } from 'vite';

export default defineConfig({
  base: '/skillup2024-how-to-maintain-the-quality-of-vision-data/',
  build: {
    chunkSizeWarningLimit: 4000, // デフォルト 2000 を増やす
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // 依存ライブラリを vendor チャンクにまとめる
          }
        },
      },
    },
  },
});