module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'standard'],
  extends: ['standard', 'prettier', 'prettier/react', 'prettier/standard'],
  globals: {
    __DEV__: true,
    window: true,
    fetch: true,
    requestAnimationFrame: true,
    URL: true
  },
  rules: {
    'valid-jsdoc': 0,
    'no-var': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-filename-extension': 0,
    'no-undef': 2,
    'no-unused-vars': 2
  }
}
