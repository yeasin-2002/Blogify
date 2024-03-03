module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],

  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'src/components/ui/*.tsx',
    '.prettierrc.js',
    'tailwind.config.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@tanstack/query'],
  rules: {
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',

    'no-console': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
        ignorePatterns: ['src/context/*.tsx'],
      },
    ],
  },
};
