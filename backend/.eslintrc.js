module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: "error", // Require the use of === and !==
    "no-trailing-spaces": "error", // Disallow trailing whitespace at the end of lines
    "object-curly-spacing": ["error", "always"], // Enforce consistent spacing inside braces
    "arrow-spacing": ["error", { before: true, after: true }], // Enforce consistent spacing before and after the arrow in arrow functions
    "no-console": 0, // Turn of no console.log rule
  },
};
