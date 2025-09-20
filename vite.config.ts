import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: './postcss.config.js',
  },
  optimizeDeps: {
    exclude: ['@mdi/font'], // prevents Vite/PostCSS from touching MDI
  },
});