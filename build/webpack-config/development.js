const webpackMerge = require("webpack-merge");
const baseConf = require("./base");

const devConf = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 50,
    ignored: /node_modules/
  },
  devServer: {
    hot: true,
    inline: true,
    watchOptions: {
      aggregateTimeout: 50,
      ignored: /node_modules/
    },
    publicPath: "/",
    // Enable history API fallback so HTML5 History API based
    // routing works. Good for complex setups.
    historyApiFallback: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || '0.0.0.0';
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: "localhost", // Defaults to `localhost`
    port: 8080, // Defaults to 8080

    // overlay: true is equivalent
    overlay: {
      errors: true,
      warnings: false
    }
  }
};

module.exports = webpackMerge(baseConf, devConf);
