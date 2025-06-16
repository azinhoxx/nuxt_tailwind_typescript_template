import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default antfu(
  {
    rules: {
      'style/brace-style': ['error', '1tbs'],
      'antfu/top-level-function': ['off'],
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'import-x/first': ['off'],
      'vue/max-attributes-per-line': [
        'warn',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      'vue/brace-style': ['error', '1tbs'],
    },
  },
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: './src/assets/main.css',
      },
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      'better-tailwindcss/multiline': [
        'warn',
        {
          group: 'emptyLine',
          lineBreakStyle: 'windows',
        },
      ],
      'better-tailwindcss/no-unregistered-classes': ['off'],
    },
  },
)
