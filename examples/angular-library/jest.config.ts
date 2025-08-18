export default {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.(ts|mjs|js)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json', useESM: true, isolatedModules: true }]
  },
  transformIgnorePatterns: ['node_modules/(?!(@angular|rxjs)/)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'html'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  rootDir: '.'
};
