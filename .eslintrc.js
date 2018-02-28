module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'standard-preact',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
  ],
  plugins: ['flowtype'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    strict: 0,
  },
};
