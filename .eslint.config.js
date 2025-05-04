import tseslint from 'typescript-eslint';

export default [
  ...tseslint.config({
    project: './tsconfig.base.json'
  }),
  {
    rules: {
      semi: 'off',
      quotes: 'off',
      'arrow-parens': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-empty-function': 'warn'
    }
  }
];
