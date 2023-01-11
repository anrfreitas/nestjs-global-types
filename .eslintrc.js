module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "sourceType": "module",
      ecmaVersion: 12,
  },
  "plugins": [
      "@typescript-eslint/eslint-plugin",
      "prettier"
  ],
  "extends": [
      "plugin:@typescript-eslint/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "prettier"
  ],
  "root": true,
  "env": {
      "node": true,
      "jest": true
  },
  "ignorePatterns": [
      ".eslintrc.js"
  ],
  "rules": {
      "prettier/prettier": "error",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": [2, {"ts-ignore": "allow-with-description"}],
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/ban-types": "off",
      "import/order": 2
  }
};
