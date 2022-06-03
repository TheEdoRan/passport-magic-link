module.exports = {
  extends: ["standard", "plugin:jest/recommended"],
  plugins: ["jest"],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    quotes: "off",
    "comma-dangle": "off",
    semi: "off",
    "jest/no-done-callback": "off",
    "space-before-function-paren": "off",
  },
};
