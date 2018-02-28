module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'standard-preact'],
  plugins: ['flowtype'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    strict: 0
  }
};
