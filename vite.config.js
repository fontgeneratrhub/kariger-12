import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Note: 'root' is usually not required unless you want to change the default build behavior.
});
