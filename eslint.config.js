import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';
import pluginQuery from '@tanstack/eslint-plugin-query';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
// import unusedImports from 'eslint-plugin-unused-imports';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig(
    {
        ignores: ['dist', 'coverage', 'node_modules', 'build', '**.config.*', 'package.json', 'pnpm-lock.yaml'],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginQuery.configs['flat/recommended'],
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                parser: tseslint.parser,
            },
        },
        plugins: {
            'simple-import-sort': simpleImportSort,
            // 'unused-imports': unusedImports,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'jsx-a11y': jsxA11y,
        },
        rules: {
            curly: ['error', 'all'],
            eqeqeq: ['error', 'always', { null: 'ignore' }],

            'no-unused-vars': 'off',
            'no-unused-expressions': 'off',
            'no-duplicate-imports': 'error',

            // 'unused-imports/no-unused-imports': 'error',
            // 'unused-imports/no-unused-vars': [
            //     'error',
            //     { args: 'after-used', argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            // ],

            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^react$', '^@?\\w'],
                        ['^node:'],
                        ['^@/'],
                        ['^src/'],
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                        ['^.+\\.module\\.s?css$', '^.+\\.s?css$', '^.+\\.(png|jpe?g|svg|gif|webp)$'],
                        ['^\\u0000'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'warn',

            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

            'jsx-a11y/alt-text': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn',
            'jsx-a11y/no-autofocus': 'warn',
            'jsx-a11y/no-static-element-interactions': 'warn',

            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/no-empty-object-type': 'error',
            '@typescript-eslint/no-empty-interface': 'error',
            '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/no-empty-function': 'error',
            '@typescript-eslint/naming-convention': [
                'error',
                { format: ['camelCase', 'UPPER_CASE', 'PascalCase'], selector: 'variable', leadingUnderscore: 'allow' },
                { format: ['camelCase', 'PascalCase'], selector: 'function' },
                { format: ['PascalCase'], selector: 'interface' },
                { format: ['PascalCase'], selector: 'typeAlias' },
            ],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
    },

    prettier,
);
