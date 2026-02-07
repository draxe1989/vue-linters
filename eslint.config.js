import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import skipPrettier from 'eslint-config-prettier'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'public'] },

  // Базовые конфиги
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  // Настройка парсера для TS в .vue файлах
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
      },
    },
    rules: {
      'no-useless-assignment': 'off',
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 3, // Если в одну строку, то максимум 3
          },
          multiline: {
            max: 1, // Если уже перенесено, то по 1 на строку
          },
        },
      ],
    },
  },

  // Окружение (Browser + Node)
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // Prettier — ВСЕГДА последний (отключает конфликты)
  skipPrettier,
)
