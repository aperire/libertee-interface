const webpack = require("webpack");
const path = require("path");

module.exports = function override(config) {
  const fallback = {
    crypto: false,
    stream: false,
    assert: false,
    http: false,
    https: false,
    os: false,
    url: false,
    fs: false,
    path: false,
    buffer: false,
    process: false,
    tty: false,
    zlib: false,
  };

  config.resolve.fallback = fallback;
  config.resolve.alias = {
    components: path.resolve(__dirname, "src/components/"),
    Redux: path.resolve(__dirname, "src/redux/"),
    helper: path.resolve(__dirname, "src/helper/"),
    assets: path.resolve(__dirname, "src/assets/"),
    utils: path.resolve(__dirname, "src/utils/"),
    api: path.resolve(__dirname, "src/api/"),
    Layout: path.resolve(__dirname, "src/Layout/"),
    lib: path.resolve(__dirname, "src/lib/"),
    middleware: path.resolve(__dirname, "src/middleware/"),
    styles: path.resolve(__dirname, "src/styles/"),
    hooks: path.resolve(__dirname, "src/hooks/"),
    contexts: path.resolve(__dirname, "src/contexts/"),
    Routes: path.resolve(__dirname, "src/Routes/"),
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  return config;
};
