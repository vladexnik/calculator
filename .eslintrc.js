module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: ['eslint:recommended', 'plugin:prettier/recommended'],
   parser: '@babel/eslint-parser',
   overrides: [
      {
         env: {
            node: true,
         },
         files: ['.eslintrc.{js,cjs}'],
         parserOptions: {
            sourceType: 'script',
         },
      },
   ],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   rules: {
      'react/prop-types': 0,
      'prettier/prettier': [
         'warn',
         {
            endOfLine: 'auto',
         },
      ],
   },
};
