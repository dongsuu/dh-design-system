import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    setupFiles: ['./vitest.setup.ts'],
  },
});
