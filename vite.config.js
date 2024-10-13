import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public', // Define the root directory as public
  build: {
    rollupOptions: {
      input: {
        main: '/src/main.jsx', // Specify the input file explicitly
      },
    },
  },
});
