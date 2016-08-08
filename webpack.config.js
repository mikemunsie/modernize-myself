const path = require('path');
const webpack = require('webpack');
const node_modules_dir = path.resolve(__dirname, 'node_modules');
const glob = require('glob');
const parsePath = require('parse-filepath');

module.exports = function(prodMode) {

  var module = {
    loaders: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/react-circular-progress')
        ],
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

  /**
   * Creates the entries in the format of "dir/filename.js" format
   * @param {object} config
   */
  function createEntries(config) {
    var entry = {};
    var fileName = "";
    var dir = "";
    for (var fileIndex in config.files) {
      dir = parsePath(config.files[fileIndex]).dirname.replace(config.base, "").substring(1);
      fileName = dir + "/" + parsePath(config.files[fileIndex]).name;
      entry[fileName] = [config.files[fileIndex]];
      if (!prodMode) {
        entry[fileName].unshift("webpack/hot/only-dev-server");
        entry[fileName].unshift("webpack-dev-server/client?http://localhost:3000");
      }
    }
    entry = _.extend(entry, config.otherEntries);
    return entry;
  }

  var vendors = [
    'babel-polyfill',
    'jquery',
    'lodash',
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'redux',
    'redux-thunk',
    'superagent'
  ];
  if (!prodMode) {
    vendors.push('webpack/hot/only-dev-server');
    vendors.push('webpack-dev-server/client?http://localhost:3000');
  }
  return [
    {
      entry: createEntries({
        base: "./src",
        files: glob.sync("./src/+(app|components|layouts|libs|providers)/**/*.js"),
        otherEntries: {
          vendors: vendors
        }
      }),
      output: {
        path: path.join(__dirname, "src/dist"),
        filename: "[name].js",
        publicPath: "http://localhost:3000/src/"
      },
      module: module,
      plugins: plugins
    }
  ];

};