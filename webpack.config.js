const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "out.webpack.js",
    path: path.resolve(__dirname, "dist"),
  },
};
