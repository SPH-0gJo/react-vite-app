import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: [
      //    { find: 'axios', replacement: path.resolve(__dirname, './node_modules/axios/') },
      { find: 'app', replacement: path.resolve(__dirname, './src/app/') },
      { find: 'assets', replacement: path.resolve(__dirname, './public/assets/') },
      { find: 'shared', replacement: path.resolve(__dirname, './src/shared/') },
      //    { find: 'tests', replacement: path.resolve(__dirname, './tests/') },
    ],
  },
});
