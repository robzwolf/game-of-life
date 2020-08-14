module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "indent": [2, 4, { "SwitchCase": 1 }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "max-len": ["error", { "code": 120 }]
  },
};
