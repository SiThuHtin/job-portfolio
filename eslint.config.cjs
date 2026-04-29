module.exports = [
  {
    ignores: ["**/node_modules/**", "**/.next/**", "build_output.txt"],
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        alert: "readonly",
        confirm: "readonly",
        console: "readonly",
        fetch: "readonly",
        navigator: "readonly",
        process: "readonly",
        sessionStorage: "readonly",
        setTimeout: "readonly",
        URL: "readonly",
        window: "readonly",
      },
    },
    rules: {
      eqeqeq: "error",
      "no-redeclare": "error",
      "no-unreachable": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    },
  },
];

