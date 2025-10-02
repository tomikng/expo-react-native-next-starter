import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['packages/**/*.{test,spec}.{ts,tsx}', 'apps/**/*.{test,spec}.{ts,tsx}'],
  },
})
