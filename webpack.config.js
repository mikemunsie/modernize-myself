const path = require('path');
const webpack = require('webpack');
const node_modules_dir = path.resolve(__dirname, 'node_modules');
const glob = require('glob');

module.exports = function(prodMode) {

  var module = {
    loaders: [
      {
        test: /\.js?$/,
        exclude: [node_modules_dir],
        loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015"],
      },
      {
        test: /\.scss?$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      }
    ]
  };

  var plugins = prodMode ?
    [
      new webpack.optimize.UglifyJsPlugin({minimize: true}),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ] :
    [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ];

  function createEntries(pattern, extra) {
    var entry = {};
    var fileName = "";
    var files = glob.sync(pattern);
    for (var fileIndex in files) {
      fileName = path.parse(files[fileIndex]).name;
      entry[fileName] = [files[fileIndex]];
      if (!prodMode) {
        entry[fileName].unshift("webpack/hot/only-dev-server");
        entry[fileName].unshift("webpack-dev-server/client?http://localhost:3000");
      }
    }
    Object.assign(entry, extra);
    console.log(entry);
    return entry;
  }

  return {
    devtool: 'eval',
    entry: createEntries("./public/apps/*.js", {
      vendors: ['webpack/hot/only-dev-server', 'webpack-dev-server/client?http://localhost:3000', 'jquery','react','babel-polyfill']
    }),
    output: {
      path: path.join(__dirname, "public/dist/apps"),
      filename: "[name].js",
      publicPath: "http://localhost:3000/public/dist/apps/"
    },
    module: module,
    plugins: plugins
  };

};