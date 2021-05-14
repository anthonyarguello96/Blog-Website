module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'rules': {
    // 'newIsCap': 0,
    'require-jsdoc': 0,
    'new-cap': 0,
    'no-unused-vars': 1,
  },
};
