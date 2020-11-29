module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',


    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    'standard'

  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',

  ],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',


    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'space-before-blocks': 'off',
    'no-tabs': 'off',
    // 'indent': 'off',
    // 'indent': ['warn', 'tab'],
    'comma-dangle': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'quotes': 'off',
    'camelcase': 'off',
    'eqeqeq': 'off',
    'quote-props': 'off',
    'no-trailing-spaces': 'off',
    'dot-notation': 'off',

    'no-undef': 'warn',
    'no-absolute-path': 'off',
    'object-curly-newline': 'off',
    'array-bracket-spacing': 'off',
    'no-lone-blocks': 'off',
    'padded-blocks': 'off',

    'no-unused-vars': 'warn',
    'no-redeclare': 'warn',
    'object-curly-spacing': 'warn',
    'space-in-parens': 'warn',
    'no-prototype-builtins': 'warn',
    'no-constant-condition': 'warn',
    'no-unreachable': 'warn',
    'no-multiple-empty-lines': 'warn',
    'spaced-comment': 'warn',
    'prefer-const': 'warn',
    'comma-spacing': 'warn',
    'key-spacing': 'warn',
    'no-multi-spaces': 'warn',
    'arrow-spacing': 'warn',
    // 'operator-linebreak': ["warn", "after", { "overrides": { "?": "before", ":": "before", "&&": "before", "||": "before" } }],
    'operator-linebreak': 'off',

    'indent': ['warn', 'tab', { 'SwitchCase': 1 }],
    'vue/script-indent': ['warn', 'tab', { 'baseIndent': 1, 'switchCase': 1 }],
    'vue/no-unused-vars': 'warn',

  },


  overrides: [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
}
