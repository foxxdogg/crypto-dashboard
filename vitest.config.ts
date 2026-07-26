import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // Включает глобальные переменные вроде describe, it, expect (как в Jest)
      globals: true,
      // Имитирует среду браузера в Node.js с помощью установленного jsdom
      environment: 'jsdom',
      // Указывает файл, который будет запускаться перед каждым тестом
      setupFiles: './src/setupTests.ts',
    },
  })
);
