module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    // "react/no-unused-prop-types": "warn",
  },
};
