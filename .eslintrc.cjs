module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    //不要なimportを警告
    // "unused-imports/no-unused-imports": "warn", // "error" でも
    //console.logを警告
    "no-console": ["warn", { allow: ["error"] }],
    //分割代入を優先する
    "prefer-destructuring": ["error", { array: false, object: true }],
    //varを禁止
    "no-var": "error",
    //早期リターンさせる
    "no-else-return": "error",
    //厳密等価演算子使用させる
    eqeqeq: ["error", "smart"],
    "prefer-template": "error",
  },
};
