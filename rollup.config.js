const { default: json } = require("@rollup/plugin-json");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/out.rollup.js",
    format: "esm",
  },
  plugins: [json()]
};
