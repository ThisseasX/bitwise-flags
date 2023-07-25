import { defineConfig } from 'vite';

export default defineConfig({
  base: '/bitwise-flags',
  resolve: {
    alias: {
      components: '/src/components',
    },
  },
});
