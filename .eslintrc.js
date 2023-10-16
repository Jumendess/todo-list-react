module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022, // Atualize para a versão ECMAScript mais recente, se necessário
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "testing-library", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: "./",
      },
    ],
  },
};
