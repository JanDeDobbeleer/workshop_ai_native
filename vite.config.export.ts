import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist-export',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index-export.html',
    },
  },
});
