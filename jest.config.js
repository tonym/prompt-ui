/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  coveragePathIgnorePatterns: ['index.ts'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/test.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/+(*.)+(spec).+(ts)', '**/+(*.)+(test).+(tsx)'],
  reporters: ['default'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'md']
};
