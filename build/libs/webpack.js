var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");

module.exports = {
  setup,
  start
}

function setup() {
  return new Promise(function(resolve, reject) {
    Libs.helpers.logStart("Libs.webpack.setup");
    var compiler;
    try {
      var compiler = webpack(require("../../webpack.config.js")(!devEnvironment));
    } catch(e) {
      Libs.helpers.logError(e);
      return resolve();
    }
    compiler.run((err, stats) => {
      if (err) Libs.helpers.logError(err);
      resolve();
    });
  });
}

function start() {
  Libs.helpers.logStart("Libs.webpack.start");
  try {
    var webpackConfig = require("../../webpack.config.js")(!devEnvironment);
    var server = new webpackDevServer(webpack(webpackConfig), {
      hot: true,
      historyApiFallback: false,
      proxy: {
        "*": `http://localhost:${devServerPort}`
      },
      publicPath: webpackConfig.output.publicPath
    });
  } catch(e) {
    console.log(e);
  }
  server.listen(3000, "localhost", function() {});
}