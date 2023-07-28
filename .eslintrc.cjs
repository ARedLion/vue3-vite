/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
   root: true,
   extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/eslint-config-typescript',
      '@vue/eslint-config-prettier/skip-formatting',
   ],
   parserOptions: {
      ecmaVersion: 'latest'
   },
   globals: {
      _: false,
      $: 'readonly',
      myGlobalVariable: 'readonly',
      anotherGlobalVariable: 'writable',
   },
   overrides: [
      {
         files: ['*.ts', '*.tsx', '*.vue'],
         rules: {
            '@typescript-eslint/no-unused-vars': 'off'
         }
      }
   ]
}
