module.exports = {
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=es2015'
      },
      {
        test: /\.scss?$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      
    ]
  }
}