module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/attributes-order': ['warn', {
      'alphabetical': true,
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-html': 0,
    'comma-dangle': ['warn', 'always-multiline'],
    'quotes': [2, 'single', {'avoidEscape': true}],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': 1,
    }],
    'vue/multi-word-component-names': 'off',
  },
}
