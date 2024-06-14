module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "tailwind.config.js"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": 0,
  },
};

// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react-hooks/recommended",
//   ],

//   ignorePatterns: [
//     "dist",
//     ".eslintrc.cjs",
//     "src/components/ui/*.tsx",
//     ".prettierrc.js",
//     "tailwind.config.js",
//   ],
//   parser: "@typescript-eslint/parser",
//   plugins: ["react-refresh", "@tanstack/query"],
//   rules: {
//     "@tanstack/query/exhaustive-deps": "error",
//     "@tanstack/query/no-rest-destructuring": "warn",
//     "@tanstack/query/stable-query-client": "error",

//     "no-console": 0,
//     "react-refresh/only-export-components": 0,
//     "@typescript-eslint/no-explicit-any": 0,
//   },
// };
