module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // Missing space before function parentheses
    "space-before-function-paren": 0,
    "no-tabs": "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
