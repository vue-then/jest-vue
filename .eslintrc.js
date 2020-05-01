module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-extra-semi': 2
  },
  overrides: [
    {
      files: [
        '**/__tests__/**/*.{j,t}s?(x)',
        '**/tests/**/*.(spec|test).{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
