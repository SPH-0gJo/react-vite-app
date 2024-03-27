module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // TypeScript 테스트 파일 경로를 정의
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  // 컴포넌트 테스트 시 불필요한 파일 변환 제외
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
