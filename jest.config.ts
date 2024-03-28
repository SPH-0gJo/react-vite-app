import type { Config } from 'jest';

export default {
  rootDir: __dirname,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  /**
   * @note Include the polyfills in the "setupFiles"
   * to apply them BEFORE the test environment.
   */
  setupFiles: ['<rootDir>/jest.polyfills.ts'],
  testEnvironmentOptions: {
    /**
     * @note Opt-out from JSDOM using browser-style resolution
     * for dependencies. This is simply incorrect, as JSDOM is
     * not a browser, and loading browser-oriented bundles in
     * Node.js will break things.
     *
     * Consider migrating to a more modern test runner if you
     * don't want to deal with this.
     */
    customExportConditions: [''],
  },

  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // TypeScript 테스트 파일 경로를 정의
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  // 컴포넌트 테스트 시 불필요한 파일 변환 제외
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
} satisfies Config;
