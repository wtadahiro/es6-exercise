module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  installedESLint: true,
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'no-alert': 'off',
  },
  env: {
    mocha: true,
    browser: true,
  }
};
