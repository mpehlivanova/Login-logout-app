import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// Custom rule: removes an object key that is repeated with the SAME value.
// e.g. { a: 1, a: 1 } -> { a: 1 }. Same key with a different value is left
// for the built-in 'no-dupe-keys' rule, because we can't know which one is right.
const noDuplicateKeys = {
  meta: {
    type: 'problem',
    fixable: 'code',
    schema: [],
    messages: { duplicate: "Duplicate key '{{key}}' with the same value." },
  },
  create(context) {
    const sourceCode = context.sourceCode;
    const getKey = (prop) => {
      if (prop.type !== 'Property' || prop.computed) return null;
      if (prop.key.type === 'Identifier') return prop.key.name;
      if (prop.key.type === 'Literal') return String(prop.key.value);
      return null;
    };
    return {
      ObjectExpression(node) {
        const seen = new Map();
        for (const prop of node.properties) {
          const key = getKey(prop);
          if (key === null) continue;
          const value = sourceCode.getText(prop.value);
          if (!seen.has(key)) {
            seen.set(key, value);
            continue;
          }
          if (seen.get(key) !== value) continue;
          context.report({
            node: prop,
            messageId: 'duplicate',
            data: { key },
            fix(fixer) {
              const before = sourceCode.getTokenBefore(prop); // comma after the previous property
              const after = sourceCode.getTokenAfter(prop);
              if (after && after.value === ',') {
                return fixer.removeRange([before.range[1], after.range[1]]);
              }
              return fixer.removeRange([before.range[0], prop.range[1]]);
            },
          });
        }
      },
    };
  },
};

const tsconfigPath = fileURLToPath(new URL('./tsconfig.json', import.meta.url));

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'coverage'] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,

  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      local: { rules: { 'no-duplicate-keys': noDuplicateKeys } },
    },
    settings: {
      // Don't parse packages in node_modules (e.g. @mui/icons-material has
      // thousands of files) - this made linting take 40+ seconds.
      'import/ignore': ['node_modules'],
      'import/external-module-folders': ['node_modules'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: { alwaysTryTypes: true, project: tsconfigPath },
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
    },
    rules: {
      // Removes duplicate keys with the same value on Ctrl+S
      'local/no-duplicate-keys': 'error',

      // ---------- Import ordering ----------
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // node:fs, path
            'external', // react, @mui/material, axios
            'internal', // aliases like @/...
            ['parent', 'sibling', 'index'], // ../ and ./
            'type', // import type { ... }
            'object',
          ],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'react-dom/**', group: 'external', position: 'before' },
            { pattern: '@mui/**', group: 'external', position: 'after' },
            { pattern: '@azure/**', group: 'external', position: 'after' },
            { pattern: '@/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['react', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      // Sorts names inside braces: import { a, B, c } from '...'
      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: false }],

      // ---------- Use @/ instead of ../ ----------
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*', '../**'],
              message: "Use the '@/' alias instead of '../' (e.g. '@/hooks/useAuthContext').",
            },
          ],
        },
      ],

      // ---------- Other import hygiene ----------
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'error',
      // Slow rules (TypeScript already checks these). They make
      // Ctrl+S hang on "Getting code actions from 'ESLint'".

      '@typescript-eslint/no-explicit-any': 'off',
      'import/no-cycle': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'error',

      // ---------- TypeScript ----------
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      // ---------- Unused imports / vars ----------
      // Removes unused imports automatically on --fix / Ctrl+S
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // ---------- React ----------
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // ---------- General ----------
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'],
      'prefer-const': 'error',
    },
  },
);
