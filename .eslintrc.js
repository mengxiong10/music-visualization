module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};