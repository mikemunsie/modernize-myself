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
        loader: 'babel'
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
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ];

  function createEntries(pattern, extra) {
    var entry = {};
    var fileName = "";
    var files = glob.sync(pattern);
    for (var fileIndex in files) {
      fileName = path.parse(files[fileIndex]).name;
      entry[fileName] = files[fileIndex];
    }
    Object.assign(entry, extra);
    return entry;
  }

  return [

    // Un-Auth Apps
    {
      entry: createEntries("./public/apps/*.js", {
        vendors: ['jquery','react','babel-polyfill']
      }),
      output: {
        path: path.join(__dirname, "public/dist/apps"),
        filename: "[name].js"
      },
      module: module,
      plugins: plugins
    }
  ]
};