import antfu from '@antfu/eslint-config';
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind';
import eslintParserTypeScript from '@typescript-eslint/parser';

const config = [
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        project: true,
      },
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'readable-tailwind': eslintPluginReadableTailwind,
    },
    rules: {
      ...eslintPluginReadableTailwind.configs.warning.rules,
      ...eslintPluginReadableTailwind.configs.error.rules,
      'readable-tailwind/multiline': ['warn', { printWidth: 100 }],
    },
  },
];

export default [
  antfu({ react: true }),
  ...config,
];
